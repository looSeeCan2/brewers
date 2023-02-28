import { brewersData } from "./brewersData.js";

// get the table body element
const tableBody = document.getElementById("table-body");

/// I couldnt add the brewersData to a json file, because it was not in the right syntax, the key needs to
/// be in quatations. I want to see if I can put all the keys in quatations with some type of loop method

const quataitons = brewersData.map((player) => {
  let quotes = {};
  for (let key in player) {
    quotes[`"${key}"`] = player[key]; /// creating a new key with the key from the player object and surrounding it with quotes = adding the value of the player
  }
  return quotes;
});
console.table(quataitons);

let noQuotes = {};
quataitons.forEach((player) => {
  console.log(player);
  /// turn it back into no quotes

  console.log(noQuotes);
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${player["id"]}</td>
  `;
});

// loop through the data and create table rows
// brewersData.forEach((player) => {
//   const row = document.createElement("tr");
//   row.innerHTML = `
//     <td>${player.id}</td>
//     <td><a target="_blank" href="${player.stats}">${player.firstName}</a></td>
//     <td>${player.lastName}</td>
//     <td><img src="${player.picture}"></td>
//     <td>${player.primaryPosition}</td>
//     <td>${player.batSide}</td>
//     <td>${player.throwSide}</td>
//     <td>${player.number}</td>
//     <td>${player.birthCity}</td>
//     <td>${player.birthStateProvince}</td>
//     <td>${player.birthCountry}</td>
//     `;
//   tableBody.appendChild(row);
// });

/// a simple spread operator example
const arr1 = [1, 2, 3];
console.log(arr1); /// log the array
console.log(...arr1); /// spread the array
console.log([...arr1]); /// spread in array
console.log({ ...arr1 }); /// spread in object

/// if I spread the above arr1 in an object, it is the same as below
const objArr1 = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(objArr1);
