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

const middle = function (array) {
  let result = [];

  if (!array.length > 2) return result;

  if (array.length % 2 === 0) {
    result.push(array[(array.length / 2) - 1]);
    result.push(array[array.length / 2]);
  } else {
    result.push(array[Math.floor(array.length/2)]);
  }
  return result;
};

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
