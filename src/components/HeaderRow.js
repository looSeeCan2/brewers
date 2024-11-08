export default class HederRow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    // const headers = this.dataset;
    // console.log(headers.headers);
    // console.log(this.getAttribute("data-headers"));

    this.setAttribute("data-headers", "testing");
  }
}
