const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {  
  let copy = [];
  for (let i = 0; i < source.length; i ++) {
    copy.push(source[i]);
  }

  for (let i = 0; i < itemsToRemove.length; i++){
    for (let j = 0; j < copy.length; j++){
      if (itemsToRemove[i] === copy[j]) {
        copy.splice(j, 1);
      }
    }
  }
  return copy;
}

module.exports = without;