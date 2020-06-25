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

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
};