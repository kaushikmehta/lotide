const assertEqual = require("./assertEqual");


// [[2], [4, 3]], [[2], [5, 3]]
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false
      }
    } else {
      for (const j in array1) {
        const a = array1[j];
        const b = array2[j];
        if (array1[j] !== array2[j]) {
          return false
        }
      }
    }
  }
  return true;
};

module.exports = eqArrays;