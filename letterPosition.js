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
  for (let index in sentence){
    // console.log(index);
    if (results[sentence[index]] === undefined){
      results[sentence[index]] = [Number(index)];
    } else {
      results[sentence[index]].push(Number(index));
    }
  }
  console.log(results);
  return results;
};

letterPositions('hello');

console.log(assertArraysEqual(letterPositions('hello').h, [0]));
console.log(assertArraysEqual(letterPositions('hello').e, [1]));
console.log(assertArraysEqual(letterPositions('hello').l, [2,3]));
console.log(assertArraysEqual(letterPositions('hello').o, [4]));
