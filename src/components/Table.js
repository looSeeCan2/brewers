import fetchData from "../fetchdata.js";

const data = await fetchData();

export default class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // const headers = this.dataset;
    // console.log(headers.headers);
    // console.log(this.getAttribute("data-headers"));

    this.shadowRoot.innerHTML = `
      <table>
        <thead>
          <tr id="header-row"></tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    //TODO:return cells and append to tr
    ///map thru data to grab keys from first object for header values

    const headerRow = this.shadowRoot.querySelector("#header-row");

    const headerData = data[0];
    console.log(headerData);

    for (let key in headerData) {
      console.log(key);
      this.setAttribute("data-headers", "test, test");
    }

    // console.log(cells);
    // headerRow.append(...cells);
  }
}
