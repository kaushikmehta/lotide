const eqArrays = function(array1, array2){
  if (array1.length === array2.length) {
    let value = true
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]){
        value = false
      }
    }
    return value;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected){
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];
  for (item of array){
    results.push(callback(item));
  }
  return results;
};

// checking first letter of word
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

// checking length of word
const results2 = map(words, word => word.length);
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]);

// checking last letter of word
const results3 = map(words, word => word[word.length -1]);
assertArraysEqual(results3, [ 'd', 'l', 'o', 'r', 'm' ]);


