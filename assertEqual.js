const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`;
  }
};

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual('hello', 'hello'));
console.log(assertEqual('hello', 'Hello'));
console.log(assertEqual(27, 27));
console.log(assertEqual(27, '27'));