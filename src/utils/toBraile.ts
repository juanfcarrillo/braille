import { UPPER_CASE_PREFIX, alphabet, numbers, punctuation } from "../constants/brailleDicctionary";

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
            if (isUpperCase(word)) {
                return `${UPPER_CASE_PREFIX}${characterToBraile(word)}`;
            }
            
            return characterToBraile(word);
        })
        .join('');
}

export function toBraille(text: string): string{
    const spaceSpplited = text.split(' ');

    const braile = spaceSpplited
                    .map((word) => {
                        if (word === '' || word === '') {
                            return '';
                        }

                        if (isUpperCase(word) && word.length > 1) {
                            return `${UPPER_CASE_PREFIX}${UPPER_CASE_PREFIX}${wordToBraile(word.toLowerCase())}`;
                        }

                        return wordToBraile(word);
                    })
                    .join(' ');

    return braile;
}

