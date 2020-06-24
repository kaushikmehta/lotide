const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  }
};

const eqObjects = function (object1, object2) {
  let result = false;
  for (key1 in object1){
    if (Object.keys(object2).indexOf(key1) !== -1 ){
      result = true;
    }
  }
  return result;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), true)); // => false


// console.log(eqObjects(ab, abc));
// console.log(eqObjects(ab, ba));