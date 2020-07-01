const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
  for (const item in object) {
    if (value === object[item]) {
      return item;
    }  
  }  
};  

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi : "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// findKeyByValue(bestTVShowsByGenre, "The Expanse");

// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"));