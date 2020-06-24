const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  }
};

const findKeyByValue = function(object, value) {
  for (const item in object) {
    // console.log(item);
    if (value === object[item]) {
      return item;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi : "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// findKeyByValue(bestTVShowsByGenre, "The Expanse")
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"));