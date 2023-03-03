//TODO: fetch the data.toJSON
const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
const fetchedData = await fetchData();

const table = document.createElement("table");
console.log(table);
table.innerHTML = `
  <thead>
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Picture</th>
      <th>Primary Position</th>
      <th>Bat Side</th>
      <th>Throw Side</th>
      <th>Number</th>
      <th>Birth City</th>
      <th>Birth State Province</th>
      <th>Birth Country</th>
    </tr>
  </thead>
`;
document.body.prepend(table);

const tableBody = document.createElement("tbody");
tableBody.className = "table-body";

console.log(tableBody);

/// fill the body

//prettier-ignore
fetchedData.forEach((player) => {
  const tBodyRow = document.createElement("tr");
  tBodyRow.innerHTML = `
    <td>${player.id}</td>
    <td>
      <a target="_blank"href="https://www.mlb.com/player/${player.firstName.toLowerCase()}-${player.lastName.toLowerCase()}-${player.id}">${player.firstName}</a>
    </td>
    <td>${player.lastName}</td>
    <td><img src="${player.picture}"></td>
    <td>${player.primaryPosition}</td>
    <td>${player.batSide}</td>
    <td>${player.throwSide}</td>
    <td>${player.number}</td>
    <td>${player.birthCity}</td>
    <td>${player.birthStateProvince}</td>
    <td>${player.birthCountry}</td>
  `;
  tableBody.appendChild(tBodyRow);
});

table.appendChild(tableBody);
