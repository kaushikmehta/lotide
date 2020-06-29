const assertEqual = require("../assertEqual");
const tail = require("../tail");

console.log(assertEqual);
console.log(tail([1,2,3]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(words);
console.log(tail(words));
console.log(assertEqual(words.length, 3));