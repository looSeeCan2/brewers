// ///call back function table: the parameter here is recieving the clickedPlayer from click.js
// const table = (playerArg) => {
//   console.log(playerArg);
//   const grabTr = document.getElementById("header-row");

//   // Object.keys
//   const objKey = Object.keys(playerArg);
//   console.log(objKey);

//   objKey.forEach((el, index) => {
//     console.log(el);
//   });
//   ///destructure object
//   // return ;
// };

// export default table;

const table = (playerArg) => {
  console.log(playerArg);
  const grabTr = document.getElementById("header-row");

  // Clear existing content (if any)
  grabTr.innerHTML = "";

  // Object.keys to get player property names
  const objKeys = Object.keys(playerArg);

  // Create header cells for each property
  objKeys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    grabTr.appendChild(th);
  });

  // Create a new row for player data
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");

  // Fill in the data for each property
  objKeys.forEach((key) => {
    const td = document.createElement("td");
    td.textContent = playerArg[key];
    tr.appendChild(td);
  });

  // Append the new row to the table body
  tbody.appendChild(tr);
  document.getElementById("data-table").appendChild(tbody);
};

export default table;
