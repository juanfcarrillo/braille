import { NUMERAL_PREFIX, UPPER_CASE_PREFIX, alphabet, numbers, punctuation } from "../../constants/brailleDicctionary";
import { toBraille } from "../../utils/toBraile";
import {it, expect, describe} from "vitest";

describe('Spanish Braille Translator', () => {
    it('translates simple lowercase letters', () => {
        expect(toBraille('a')).toBe(alphabet['a']);
        expect(toBraille('b')).toBe(alphabet['b']);
    });

    it('translates simple uppercase letters', () => {
        expect(toBraille('A')).toBe(`${UPPER_CASE_PREFIX}${alphabet['a']}`);
        expect(toBraille('B')).toBe(`${UPPER_CASE_PREFIX}${alphabet['b']}`);
    });

    it('translates numbers', () => {
        expect(toBraille('1').slice(1)).toBe(numbers['1']);
        expect(toBraille('2').slice(1)).toBe(numbers['2']);
    });

    it('translates punctuation', () => {
        expect(toBraille('.')).toBe(punctuation['.']);
        expect(toBraille(',')).toBe(punctuation[',']);
    });

    it('translates mixed case words', () => {
        const word = 'Hola';
        const brailleWord = `${UPPER_CASE_PREFIX}${alphabet['h']}${alphabet['o']}${alphabet['l']}${alphabet['a']}`;
        expect(toBraille(word)).toBe(brailleWord);
    });

    it('handles empty string', () => {
        expect(toBraille('')).toBe('');
    });

    it('handles string with spaces', () => {
        const sentence = 'Hola mundo';
        const brailleSentence = `${UPPER_CASE_PREFIX}${alphabet['h']}${alphabet['o']}${alphabet['l']}${alphabet['a']} ${alphabet['m']}${alphabet['u']}${alphabet['n']}${alphabet['d']}${alphabet['o']}`;
        expect(toBraille(sentence)).toBe(brailleSentence);
    });
});
