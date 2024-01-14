// ///call back function table: the parameter here is recieving the clickedPlayer from click.js
//   // return ;
// };

const table = (playerArg) => {
  console.log(playerArg);
  const grabHeaderRow = document.getElementById("header-row");
  const grabDataTbodyRow = document.getElementById("data-tbody-row");

  ///make you clear out the section
  grabHeaderRow.innerHTML = "";
  grabDataTbodyRow.innerHTML = "";

  ///dont have to use this, but jsut practicing
  const objKeysArray = Object.keys(playerArg);
  console.log(objKeysArray);

  ///slice. I only need primaryPosition and on
  const sliceObjKeysArray = objKeysArray.slice(4, 11);
  console.log(sliceObjKeysArray);

  sliceObjKeysArray.forEach((el) => {
    const createTh = document.createElement("th");
    createTh.textContent = `${el}`;
    grabHeaderRow.appendChild(createTh);
  });

  //destruct
  const { id, firstName, lastName, picture, ...upDatedPlayerArg } = playerArg;

  console.log(playerArg);
  console.log(upDatedPlayerArg);

  for (let key in upDatedPlayerArg) {
    const createTd = document.createElement("td");
    createTd.textContent = upDatedPlayerArg[key];
    grabDataTbodyRow.appendChild(createTd);
  }
};

export default table;
