const sliceObjKeysArray = [
  "id",
  "firstName",
  "lastname",
  "pic",
  "primaryPosition",
  "batSide",
  "throwSide",
  "number",
  "birthCity",
  "birthStateProvince",
  "birthCountry",
];

///spread operator
const destructSliceObjKeysArrayToArray = [...sliceObjKeysArray];
console.log(destructSliceObjKeysArrayToArray);

const [, , , , ...rest] = destructSliceObjKeysArrayToArray;
console.log(rest);

const formatKeyNames = rest.map((el, index) => {
  let elToArrayOfCharacters = [...el]; //['P', 'r', 'i', 'm', 'a', 'r', 'y', 'P', 'o', 's', 'i', 't', 'i', 'o', 'n']
  elToArrayOfCharacters[0] = elToArrayOfCharacters[0].toUpperCase(); /// capitalize the element in the array

  const joinElToArrayOfCharacters = elToArrayOfCharacters.join(""); ///change back to a string

  return joinElToArrayOfCharacters;
});

console.log(formatKeyNames);
