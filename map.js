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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const results = [];
  for (item of array){
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);