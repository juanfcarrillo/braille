export const alphabetToBraille = {
    a: '100000',
    b: '101000',
    c: '110000',
    // ...
  };
  
  export const numbersToBraille = {
    '1': '100000',
    '2': '101000',
    '3': '110000',
    // ...
  };
  
  export const punctuationToBraille = {
    ',': '000010',
    ';': '000011',
    ':': '010010',
    // ...
  };
  
  export const brailleToAlphabet = Object.fromEntries(
    Object.entries(alphabetToBraille).map(([key, value]) => [value, key])
  );
  
  export const brailleToNumbers = Object.fromEntries(
    Object.entries(numbersToBraille).map(([key, value]) => [value, key])
  );
  
  export const brailleToPunctuation = Object.fromEntries(
    Object.entries(punctuationToBraille).map(([key, value]) => [value, key])
  );
  
  export const UPPER_CASE_PREFIX = '000001';
  export const NUMBER_PREFIX = '001111';
  