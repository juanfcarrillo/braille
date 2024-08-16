import { NUMERAL_PREFIX, UPPER_CASE_PREFIX, alphabet, numbers, punctuation } from "../constants/brailleDicctionary";

const EMPTY_BRAILLE = '☐';

// Función para verificar si una cadena contiene caracteres alfanuméricos
function isAlphaNumeric(str: string): boolean {
    return /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9]+$/i.test(str);
}

// Función para verificar si una cadena contiene solo letras del alfabeto
function isAlpha(str: string): boolean {
    return /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/i.test(str);
}

// Función para verificar si una cadena contiene solo números
function isNumber(str: string): boolean {
    return /^[0-9]+$/i.test(str);
}

// Función para verificar si una cadena está completamente en mayúsculas
function isUpperCase(str: string): boolean {
    return isAlpha(str) && str === str.toUpperCase();
}

// Función para verificar si una cadena contiene números
function hasNumbers(str: string): boolean {
    return /[0-9]+/.test(str);
}

// Función para establecer el prefijo NUMERAL_PREFIX antes de los números en una cadena
function setNumeral(str: string): string {
    const numbers = str.match(/[0-9]+/g);  // Extrae todos los números de la cadena

    const replacedNumbers = str.replace(/[0-9]+/, '&&');  // Reemplaza el primer número encontrado con '&&'

    const mergedNumbers = replacedNumbers.replace(/&&/g, NUMERAL_PREFIX + numbers?.join(''));  // Concatena NUMERAL_PREFIX con los números

    return mergedNumbers;
}

// Función para procesar una palabra y convertirla en braille
function setNumeralWord(str: string): string {
    const spacedNumbers = str.replace(/(\d+)/g, '$1&&');  // Inserta '&&' después de cada número

    const splited = spacedNumbers.split('&&');  // Divide la cadena por '&&'

    const replacedNumbers = splited.map(setNumeral).join('');  // Convierte cada parte numérica usando setNumeral y las une

    return replacedNumbers;
}

// Función para convertir un carácter individual a su representación en braille
function characterToBraile(character: string): string {
    
    if (!isAlphaNumeric(character)) {
        return punctuation[character as keyof typeof punctuation] || EMPTY_BRAILLE;  // Devuelve el símbolo de puntuación correspondiente, si existe
    }

    if (isNumber(character)) {
        return numbers[character as keyof typeof numbers] || EMPTY_BRAILLE;  // Devuelve el número en braille, si está definido
    }

    return alphabet[character.toLowerCase() as keyof typeof alphabet] || EMPTY_BRAILLE;  // Devuelve la letra en braille, convirtiéndola a minúscula primero
}

// Función para convertir una palabra completa a braille
function wordToBraile(word: string): string {
    return word
        .split('')
        .map(word => {
            if (NUMERAL_PREFIX === word) {
                return word;  // Si el prefijo NUMERAL_PREFIX está presente, lo deja intacto
            }

            if (isUpperCase(word)) {
                return `${UPPER_CASE_PREFIX}${characterToBraile(word)}`;  // Agrega el prefijo UPPER_CASE_PREFIX si la letra es mayúscula
            }

            return characterToBraile(word);  // Convierte el carácter a braille
        })
        .join('');
}

// Función principal que convierte todo el texto a braille
export function toBraille(text: string): string {
    const spaceSpplited = text.split(' ');  // Divide el texto por espacios

    const braile = spaceSpplited
        .map((word) => {
            let newWord = word;

            if (hasNumbers(word)) {
                newWord = setNumeralWord(word);  // Si la palabra contiene números, convierte los números a braille
            }

            if (newWord === '' || newWord === '') {
                return '';  // Si la palabra resultante está vacía, devuelve una cadena vacía
            }

            if (isUpperCase(newWord) && newWord.length > 1) {
                return `${UPPER_CASE_PREFIX}${UPPER_CASE_PREFIX}${wordToBraile(newWord.toLowerCase())}`;  // Si la palabra está en mayúsculas, la convierte a braille
            }

            return wordToBraile(newWord);  // Convierte la palabra a braille
        })
        .join(' ');  // Une las palabras con espacios

    return braile;  // Devuelve el texto completo convertido a braille
}
