import Table from "./src/components/Table.js";
import data from "./src/helpers/data.js";

customElements.define("my-table", Table);

const brewersData = await data("./brewers-data.json");
console.log(brewersData);
const table = document.getElementById("my-table");

table.tableValues = brewersData;
