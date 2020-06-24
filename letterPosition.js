const assertArraysEqual = function(array1, array2){
  if (array1.length === array2.length) {
    let value = true
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]){
        value = false
      }
    }
    value === false ? console.log("🛑 The two arrays are same in size but not equal") : console.log("✅ The two arrays are equal");
  } else {
    console.log("The two arrays are different sizes and therefore not equal");
  }
};

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
    return "The two arrays are different sizes"
  }
};

const letterPositions = function(sentence){
  const results = {};



  return results;
};