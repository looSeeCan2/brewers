// import brewersData from "../brewers-data.js";
import data from "../helpers/data.js";
/**
 * @type {Array <object>}
 * there may be a better place for this variable. except I get an error when I place it anywhere else than top level or non async function
 */
const brewersData = await data("./brewers-data.json");
/**@customElement */
export default class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * initializes custom element data
   * probably did not have to do this. just for practice
   * cant pass argument to the connected callback
   * dataset attributes are limited to string values
   */
  connectedCallback() {
    Object.keys(brewersData[0]).map((keys) => {
      this.dataset.header += `${keys},`;
    });

    /**
     * initialized table headers from dataset attributes
     */
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/index.css" />
    
    <table>
        <thead>
          <tr id="header-row">
        ${Object.keys(brewersData[0])
          .map((keys) => `<th>${keys.toUpperCase()}</th>`)
          .join("")}
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
  }

  /**
   * @param {Array <object>} data
   * the if in the for loop adds the appropriate img tag and src attribute to the td
   */

  set tableValues(data) {
    const tableBody = this.shadowRoot.querySelector("tbody");

    data.forEach((object) => {
      const tableBodyRow = document.createElement("tr");

      for (const key in object) {
        const tableBodyRowData = document.createElement("td");
        if (key === "picture") {
          const imgElement = document.createElement("img");
          imgElement.setAttribute("src", object[key]);
          tableBodyRowData.appendChild(imgElement);
        } else {
          tableBodyRowData.innerHTML = object[key];
        }

        tableBodyRow.appendChild(tableBodyRowData);
      }

      tableBody.appendChild(tableBodyRow);
    });
  }
}

/**
 * TODO: don't forget to commit . had no internet at work
 */
