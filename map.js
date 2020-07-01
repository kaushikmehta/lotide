const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];
  for (item of array){
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// // checking first letter of word
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

// // checking length of word
// const results2 = map(words, word => word.length);
// assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]);

// // checking last letter of word
// const results3 = map(words, word => word[word.length -1]);
// assertArraysEqual(results3, [ 'd', 'l', 'o', 'r', 'm' ]);


