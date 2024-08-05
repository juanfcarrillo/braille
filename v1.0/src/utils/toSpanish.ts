import { UPPER_CASE_PREFIX, brailleToAlphabet, brailleToNumbers, brailleToPunctuation } from "../constants/brailleDicctionary";

function isBrailleAlpha(str: string) {
  return str in brailleToAlphabet;
}

function isBraillePunctuation(str: string) {
  return str in brailleToPunctuation;
}

function brailleToCharacter(braille: string, isUpperCase = false) {
  if (isBraillePunctuation(braille)) {
    return brailleToPunctuation[braille];
  }

  if (braille in brailleToNumbers) {
    return brailleToNumbers[braille];
  }

  if (isBrailleAlpha(braille)) {
    const char = brailleToAlphabet[braille];
    return isUpperCase ? char.toUpperCase() : char;
  }

  return '';
}

function brailleToWord(brailleWord: { match: (arg0: RegExp) => never[]; }) {
  let isUpperCase = false;
  const characters = brailleWord.match(/.{1,1}/g) || []; // Split into chunks of 1 (Braille characters)
  return characters.map((braille: string) => {
    if (braille === UPPER_CASE_PREFIX) {
      isUpperCase = true;
      return '';
    }

    const char = brailleToCharacter(braille, isUpperCase);
    isUpperCase = false; // Reset after using
    return char;
  }).join('');
}

export function fromBraille(brailleText) {
  const words = brailleText.split(' ');
  return words.map(brailleToWord).join(' ');
}
