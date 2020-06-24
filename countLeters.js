const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  }
};

const countLetters = function(string) {
  let countedLetters = {};
  for (let letter of string) {
    if (letter !== ' '){
      if (countedLetters[letter] === undefined) {
        countedLetters[letter] = 1;
      } else {
        countedLetters[letter] +=1;
      }
    }
    }
  return countedLetters;
};

console.log(countLetters("Lighthouse in the house!"));