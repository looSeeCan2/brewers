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
    const cells = data.map((object) => {
      console.table(object);
    });
    // this.setAttribute("data-headers", "testing");
  }
}
