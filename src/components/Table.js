import brewersData from "../brewers-data.js";

//there may be a better place for this variable. except I get an error when I place it anywhere else than top level or non async function
const data = await brewersData();

export default class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    ///cant pass aragu
    ///keys of the object to values of data-header attribute
    ///i dont think I have to do this part. but I just wanted to add them to the dataset for the component
    ///remember that dataset attributes are limited to string values.
    console.log(Object.keys(data[0]));
    Object.keys(data[0]).map((keys) => {
      console.log(keys);
      this.dataset.header += `${keys},`;
    });

    ///TODO: finish the body. I should do the setter, but whats the difference? Use a setter if the content is dynamic
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/index.css" />
    
    <table>
        <thead>
          <tr id="header-row">
        ${Object.keys(data[0])
          .map((keys) => `<th>${keys}</th>`)
          .join("")}
          </tr>
        </thead>
        <tbody>
          <tr>
          </tr>
        </tbody>
      </table>
    `;
  }

  /**
   * @param {any} data
   */

  /// I need an array of: <td>`${value}`</td> to append to the <tr></tr>
  set tableValues(data) {
    const tbody = this.shadowRoot.querySelector("tbody");

    // const tbodyRow = this.shadowRoot.querySelector("tbody tr");
    // console.log(tbodyRow);

    data.forEach((value) => {
      console.log(value);
      const tbodyRow = document.createElement("tr");
      for (const key in value) {
        const tdElement = document.createElement("td");
        tdElement.textContent = value[key];

        tbodyRow.appendChild(tdElement);
      }

      tbody.appendChild(tbodyRow);
    });
  }
}
