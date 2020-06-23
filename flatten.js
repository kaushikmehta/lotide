const assertArraysEqual = function (array1, array2) {
  if (array1.length === array2.length) {
    let value = true
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        value = false
      }
    }
    value === false ? console.log("🛑 The two arrays are same in size but not equal") : console.log("✅ The two arrays are equal");
  } else {
    console.log("The two arrays are different sizes and therefore not equal");
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    let value = true
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        value = false
      }
    }
    return value;
  } else {
    return "The two arrays are different sizes"
  }
};

const flatten = function (nestedArray) {
  let newArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        newArray.push(nestedArray[i][j]);
      }
    } else {
      newArray.push(nestedArray[i])
    }
  }
  return newArray;
}


console.log(flatten([1, 2, [3, 4], 5, [6]]));