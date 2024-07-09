// Objeto que mapea letras del alfabeto español a su representación en braille
export const alphabet = {
  'a': '⠁',
  'á': '⠷',
  'b': '⠃',
  'c': '⠉',
  'd': '⠙',
  'e': '⠑',
  'é': '⠮',
  'f': '⠋',
  'g': '⠛',
  'h': '⠓',
  'i': '⠊',
  'í': '⠌',
  'j': '⠚',
  'k': '⠅',
  'l': '⠇',
  'm': '⠍',
  'n': '⠝',
  'ñ': '⠻',
  'o': '⠕',
  'ó': '⠬',
  'p': '⠏',
  'q': '⠟',
  'r': '⠗',
  's': '⠎',
  't': '⠞',
  'u': '⠥',
  'ú': '⠾',
  'v': '⠧',
  'w': '⠺',
  'x': '⠭',
  'y': '⠽',
  'z': '⠵',
};

// Prefijo para indicar letras mayúsculas en braille
export const UPPER_CASE_PREFIX = '⠅';

// Prefijo para indicar que el siguiente carácter es un numeral en braille
export const NUMERAL_PREFIX = '⠼';

// Objeto que mapea números del 0 al 9 a su representación en braille
export const numbers = {
  '1': '⠁',
  '2': '⠃',
  '3': '⠉',
  '4': '⠙',
  '5': '⠑',
  '6': '⠋',
  '7': '⠛',
  '8': '⠓',
  '9': '⠊',
  '0': '⠚',
};

// Objeto que mapea signos de puntuación y otros caracteres especiales a su representación en braille
export const punctuation = {
  '.': '⠄',
  ',': '⠂',
  '\\?': '⠢',
  '\\¿': '⠢',
  ';': '⠆',
  '!': '⠖',
  '¡': '⠖',
  '<': '⠦',
  '>': '⠴',
  '\\ ': '⠶',  // Espacio
  '-': '⠤',
  "'": '⠄',   // Apóstrofo
};

// Mapeo inverso para convertir braille de vuelta a texto
export const brailleToAlphabet = Object.fromEntries(
  Object.entries(alphabet).map(([key, value]) => [value, key])
);

// Mapeo inverso para números
export const brailleToNumbers = Object.fromEntries(
  Object.entries(numbers).map(([key, value]) => [value, key])
);

// Mapeo inverso para signos de puntuación
export const brailleToPunctuation = Object.fromEntries(
  Object.entries(punctuation).map(([key, value]) => [value, key])
);
