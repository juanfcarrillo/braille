export const alphabet = {
    'a':  '⠁',
    'á':  '⠷',
    'b':  '⠃',
    'c':  '⠉',
    'd':  '⠙',
    'e':  '⠑',
    'é':  '⠮',
    'f':  '⠋',
    'g':  '⠛',
    'h':  '⠓',
    'i':  '⠊',
    'í':  '⠌',   
    'j':  '⠚',
    'k':  '⠅',
    'l':  '⠇',
    'm':  '⠍',
    'n':  '⠝',
    'ñ':  '⠻',
    'o':  '⠕',
    'ó':  '⠬',
    'p':  '⠏',
    'q':  '⠟',
    'r':  '⠗',
    's':  '⠎',
    't':  '⠞',
    'u':  '⠥',
    'ú':  '⠾',
    'v':  '⠧',
    'w':  '⠺',
    'x':  '⠭',
    'y':  '⠽',
    'z':  '⠵',
};

export const UPPER_CASE_PREFIX = '⠅'
export const NUMERAL_PREFIX = '⠼'

export const numbers = {
    '1':  '⠁',
    '2':  '⠃',
    '3':  '⠉',
    '4':  '⠙',
    '5':  '⠑',
    '6':  '⠋',
    '7':  '⠛',
    '8':  '⠓',
    '9':  '⠊',
    '0':  '⠚',
}

export const punctuation = {
    '.': '⠄',
    ',':  '⠂',
    '\\?': '⠢',
    '\\¿': '⠢',
    ';':  '⠆',
    '!':  '⠖',
    '<':  '⠦',
    '>':  '⠴',
    '\\ ': '⠶',
    '-':  '⠤',
    "'":  '⠄',
}

// Reverse mappings for Braille to text
export const brailleToAlphabet = Object.fromEntries(
    Object.entries(alphabet).map(([key, value]) => [value, key])
  );
  
  export const brailleToNumbers = Object.fromEntries(
    Object.entries(numbers).map(([key, value]) => [value, key])
  );
  
  export const brailleToPunctuation = Object.fromEntries(
    Object.entries(punctuation).map(([key, value]) => [value, key])
  );
