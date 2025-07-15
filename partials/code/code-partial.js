import { LitElement, html, css } from "lit-element";

export class CodePartial extends LitElement {
  static get styles() {
    return css`
      :root {

      }
      article {
        height: 100%;
        position: relative;
        border-radius: 16px;
        --md-elevation-level: 4;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <md-elevation></md-elevation>
        <h1>CodePartial</h1>
      </article>
    `;
  }
}

window.customElements.define("code-partial", CodePartial);