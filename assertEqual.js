const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('hello', 'hello');
assertEqual('hello', 'Hello');
assertEqual(27, 27);
assertEqual(27, '27');