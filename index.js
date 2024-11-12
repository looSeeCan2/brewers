import Table from "./src/components/Table.js";
import brewersData from "./src/brewers-data.js";

customElements.define("my-table", Table);

const data = await brewersData();

const table = document.getElementById("my-table");

table.tableValues = data;
