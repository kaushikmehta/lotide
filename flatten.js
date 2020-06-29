const flatten = function (nestedArray) {
  let newArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        newArray.push(nestedArray[i][j]);
      }
    } else {
      newArray.push(nestedArray[i])
    }
  }
  return newArray;
}

module.exports = flatten;
