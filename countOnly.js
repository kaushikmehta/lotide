const assertEqual = require("./assertEqual");
)

const countOnly = function(allItems, itemsToCount) {
  let countedNames = {};
  for (let item in itemsToCount) {
    // console.log(itemsToCount[item]);
   if (itemsToCount[item] === true) {
    for (let name of allItems) {
      if (name === item){
        if (countedNames[name] === undefined) {
          countedNames[name] = 1
        } else {
          countedNames[name] +=1
        } // else

      } // if name = item
    }
   }
  }
  // console.log("countedObj: ", countedNames)
  return countedNames;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

module.exports = countOnly;

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// console.log(assertEqual(result1["Jason"], 1));
// console.log(assertEqual(result1["Karima"], undefined));
// console.log(assertEqual(result1["Fang"], 2));