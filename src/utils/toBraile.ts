import { NUMERAL_PREFIX, UPPER_CASE_PREFIX, alphabet, numbers, punctuation } from "../constants/brailleDicctionary";

function isAlphaNumeric(str: string): boolean {
    return /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9]+$/i.test(str);
}

function isAlpha(str: string): boolean {
    return /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/i.test(str);
}

function isNumber(str: string): boolean {
    return /^[0-9]+$/i.test(str);
}

function isUpperCase(str: string): boolean {
    return isAlpha(str) && str === str.toUpperCase();
}

function hasNumbers(str: string): boolean {
    return /[0-9]+/.test(str);
}

function setNumeral(str: string): string {
    const numbers = str.match(/[0-9]+/g);

    const replacedNumbers = str.replace(/[0-9]+/, '&&');

    const mergedNumbers = replacedNumbers.replace(/&&/g, NUMERAL_PREFIX + numbers?.join(''));

    return mergedNumbers
}
    

function setNumeralWord(str: string): string {
    const spacedNumbers = str   .replace(/(\d)/g, '$1&&');
    
    const splited = spacedNumbers.split('&&');

    console.log({splited})

    const replacedNumbers = splited.map(setNumeral).join('');

    return replacedNumbers;
}

function characterToBraile(character: string): string {
    if (!isAlphaNumeric(character)) {
        return punctuation[character as keyof typeof punctuation] || '';
    }

    if (isNumber(character)) {
        return numbers[character as keyof typeof numbers] || '';
    }

    return alphabet[character.toLowerCase() as keyof typeof alphabet] || '';
}

function wordToBraile(word: string): string {
    return word
        .split('')
        .map(word => {
            if (NUMERAL_PREFIX === word) {
                return word;
            }

            if (isUpperCase(word)) {
                return `${UPPER_CASE_PREFIX}${characterToBraile(word)}`;
            }

            return characterToBraile(word);
        })
        .join('');
}

export function toBraille(text: string): string {
    const spaceSpplited = text.split(' ');

    const braile = spaceSpplited
        .map((word) => {
            let newWord = word;

            if (hasNumbers(word)) {
                newWord = setNumeralWord(word);
            }

            if (newWord === '' || newWord === '') {
                return '';
            }

            if (isUpperCase(newWord) && newWord.length > 1) {
                return `${UPPER_CASE_PREFIX}${UPPER_CASE_PREFIX}${wordToBraile(newWord.toLowerCase())}`;
            }

            return wordToBraile(newWord);
        })
        .join(' ');

    return braile;
}

