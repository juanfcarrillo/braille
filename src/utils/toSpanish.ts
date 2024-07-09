import { UPPER_CASE_PREFIX, brailleToAlphabet, brailleToNumbers, brailleToPunctuation } from "../constants/brailleDicctionary";

// Función para verificar si un carácter en braille representa una letra del alfabeto
function isBrailleAlpha(str: string) {
  return str in brailleToAlphabet;  // Verifica si el carácter está presente en el diccionario brailleToAlphabet
}

// Función para verificar si un carácter en braille representa un símbolo de puntuación
function isBraillePunctuation(str: string) {
  return str in brailleToPunctuation;  // Verifica si el carácter está presente en el diccionario brailleToPunctuation
}

// Función para convertir un carácter en braille a su equivalente en texto
function brailleToCharacter(braille: string, isUpperCase = false) {
  if (isBraillePunctuation(braille)) {  // Si es un símbolo de puntuación en braille
    return brailleToPunctuation[braille];  // Devuelve el símbolo de puntuación correspondiente
  }

  if (braille in brailleToNumbers) {  // Si es un número en braille
    return brailleToNumbers[braille];  // Devuelve el número correspondiente
  }

  if (isBrailleAlpha(braille)) {  // Si es una letra del alfabeto en braille
    const char = brailleToAlphabet[braille];  // Obtiene la letra correspondiente en texto
    return isUpperCase ? char.toUpperCase() : char;  // Devuelve la letra en mayúscula si se especifica
  }

  return '';  // Devuelve una cadena vacía si no se encuentra correspondencia
}

// Función para convertir una palabra completa en braille a texto
function brailleToWord(brailleWord: string) {
  let isUpperCase = false;
  const characters = brailleWord.match(/.{1,1}/g) || []; // Divide la palabra en caracteres individuales de braille
  return characters.map((braille: string) => {
    if (braille === UPPER_CASE_PREFIX) {  // Si es el prefijo UPPER_CASE_PREFIX
      isUpperCase = true;  // Establece la bandera de mayúsculas activa
      return '';  // Retorna una cadena vacía
    }

    const char = brailleToCharacter(braille, isUpperCase);  // Convierte el carácter de braille a texto
    isUpperCase = false; // Reinicia la bandera de mayúsculas después de usarla
    return char;  // Retorna el carácter convertido
  }).join('');  // Une los caracteres convertidos en una palabra completa
}

// Función principal que convierte todo el texto en braille a texto normal
export function fromBraille(brailleText: string) {
  const words = brailleText.split(' ');  // Divide el texto en braille por espacios para obtener palabras individuales
  return words.map(brailleToWord).join(' ');  // Convierte cada palabra de braille a texto y las une con espacios
}
