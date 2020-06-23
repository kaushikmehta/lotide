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


const without = function(source, itemsToRemove) {  
  let copy = [];
  for (let i = 0; i < source.length; i ++) {
    copy.push(source[i]);
  }

  for (let i = 0; i < itemsToRemove.length; i++){
    for (let j = 0; j < copy.length; j++){
      if (itemsToRemove[i] === copy[j]) {
        copy.splice(j, 1);
      }
    }
  }
  return ("copy: " + copy + " source: " + source)
}

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


