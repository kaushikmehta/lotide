const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const letterPositions = function(sentence){
  const results = {};
  for (let index in sentence){
    // console.log(index);
    if (results[sentence[index]] === undefined){
      results[sentence[index]] = [Number(index)];
    } else {
      results[sentence[index]].push(Number(index));
    }
  }
  // console.log(results);
  return results;
};

module.exports = letterPositions;

// letterPositions('hello');

// console.log(assertArraysEqual(letterPositions('hello').h, [0]));
// console.log(assertArraysEqual(letterPositions('hello').e, [1]));
// console.log(assertArraysEqual(letterPositions('hello').l, [2,3]));
// console.log(assertArraysEqual(letterPositions('hello').o, [4]));
