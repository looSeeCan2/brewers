import ul from "./ul.js";

const table = (playerArg) => {
  console.log(playerArg);
  const grabHeaderRow = document.getElementById("header-row");
  const grabDataTbodyRow = document.getElementById("data-tbody-row");

  ///make you clear out the section
  grabHeaderRow.innerHTML = "";
  grabDataTbodyRow.innerHTML = "";

  const sliceObjKeysArray = Object.keys(playerArg); ///returns keys in an array
  ///spread operator
  const spreadSliceObjKeysArrayToArray = [...sliceObjKeysArray];
  console.log(spreadSliceObjKeysArrayToArray);

  const [, , , , ...rest] = spreadSliceObjKeysArrayToArray; ///excludes elements that are not needed and stores the rest of values in a rest variable
  console.log(rest);

  const formatKeyNames = rest.map((el, index) => {
    let elToArrayOfCharacters = [...el]; //['P', 'r', 'i', 'm', 'a', 'r', 'y', 'P', 'o', 's', 'i', 't', 'i', 'o', 'n']
    elToArrayOfCharacters[0] = elToArrayOfCharacters[0].toUpperCase(); /// capitalize the element in the array

    const joinElToArrayOfCharacters = elToArrayOfCharacters.join(""); ///change back to a string

    return joinElToArrayOfCharacters;
  });

  ///populate table header row
  formatKeyNames.forEach((el) => {
    const createTh = document.createElement("th");
    createTh.textContent = `${el}`;
    grabHeaderRow.appendChild(createTh);
  });

  //deconstruct
  const { id, firstName, lastName, picture, ...upDatedPlayerArg } = playerArg;

  console.log(playerArg);
  console.log(upDatedPlayerArg);

  for (let key in upDatedPlayerArg) {
    const createTd = document.createElement("td");
    createTd.textContent = upDatedPlayerArg[key];
    grabDataTbodyRow.appendChild(createTd);
  }

  ul(formatKeyNames, upDatedPlayerArg);
};

export default table;
