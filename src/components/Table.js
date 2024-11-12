import brewersData from "../brewers-data.js";

//there may be a better place for this variable. except I get an error when I place it anywhere else than top level or non async function
const data = await brewersData();

export default class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    ///cant pass aragument to the connected callback.
    ///keys of the object to values of data-header attribute
    ///i dont think I have to do this part. but I just wanted to add them to the dataset for the component
    ///remember that dataset attributes are limited to string values.
    console.log(Object.keys(data[0]));
    Object.keys(data[0]).map((keys) => {
      console.log(keys[0].toLocaleUpperCase());
      this.dataset.header += `${keys},`;
    });

    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/index.css" />
    
    <table>
        <thead>
          <tr id="header-row">
        ${Object.keys(data[0])
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
   * @param {any} data
   */

  set tableValues(data) {
    const tbody = this.shadowRoot.querySelector("tbody");

    data.forEach((object) => {
      console.log(object);
      const tbodyRow = document.createElement("tr");
      for (const key in object) {
        const tdElement = document.createElement("td");
        if (key === "picture") {
          const imgElement = document.createElement("img");
          imgElement.setAttribute("src", object[key]);
          tdElement.appendChild(imgElement);
        } else {
          tdElement.innerHTML = object[key];
        }

        tbodyRow.appendChild(tdElement);
      }

      tbody.appendChild(tbodyRow);
    });
  }
}
