const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
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
    value =  false
  }
  return value
};

const eqObjects = function (object1, object2) {
  let value = false;
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return value;

  for (key1 of keys1) {
    const firstVal = object1[key1];
    const secVal = object2[key1];
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      value = eqArrays(object1[key1], object2[key1]);
      // value = true;

    } else {
      if (object1[key1] !== object2[key1]){
        value = false;
      } else {
        value = true;
      }
    }
  };
  return value;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false