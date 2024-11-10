import fetchData from "../fetchdata.js";

const data = await fetchData();

export default class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    ///keys of the object to values of data-header attribute
    ///i dont think I have to do this part. but I just wanted to add them to the dataset for the component
    console.log(Object.keys(data[0]));
    Object.keys(data[0]).map((keys) => {
      console.log(keys);
      this.dataset.header += `${keys},`;
    });

    ///TODO: finish the body
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
          
        </tbody>
      </table>
    `;
  }
}
