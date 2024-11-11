import Table from "./src/components/Table.js";
import brewersData from "./src/brewers-data.js";

const data = await brewersData();

console.log(data[0]);
customElements.define("my-table", Table);

const table = document.getElementById("my-table");
console.log(table);

table.tableValues = data;

// table.connectedCallback(data[0]);

// ///create the data attributes using the object
// const table = document.createElement("table");
// console.log(table);
// table.innerHTML = `
//   <thead>
//     <tr>
//       <th>Id</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Picture</th>
//       <th>Primary Position</th>
//       <th>Bat Side</th>
//       <th>Throw Side</th>
//       <th>Number</th>
//       <th>Birth City</th>
//       <th>Birth State Province</th>
//       <th>Birth Country</th>
//     </tr>
//   </thead>
// `;
// document.body.prepend(table);

// const tableBody = document.createElement("tbody");
// tableBody.className = "table-body";

// console.log(tableBody);

// /// fill the body

// //prettier-ignore
// fetchedData.forEach((player) => {
//   const tBodyRow = document.createElement("tr");
//   tBodyRow.innerHTML = `
//     <td>${player.id}</td>
//     <td>
//       <a target="_blank"href="https://www.mlb.com/player/${player.firstName.toLowerCase()}-${player.lastName.toLowerCase()}-${player.id}">${player.firstName}</a>
//     </td>
//     <td>${player.lastName}</td>
//     <td><img src="${player.picture}"></td>
//     <td>${player.primaryPosition}</td>
//     <td>${player.batSide}</td>
//     <td>${player.throwSide}</td>
//     <td>${player.number}</td>
//     <td>${player.birthCity}</td>
//     <td>${player.birthStateProvince}</td>
//     <td>${player.birthCountry}</td>
//   `;
//   tableBody.appendChild(tBodyRow);
// });

// table.appendChild(tableBody);
