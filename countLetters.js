const assertEqual = require("./assertEqual");

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

module.exports = countLetters;
// console.log(countLetters("Lighthouse in the house!"));