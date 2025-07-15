import { LitElement, html, css } from "lit-element";

export class FooterPartial extends LitElement {
  static get styles() {
    return css`
      .footer-partial {
        display: flex;
        justify-content: center;
        align-items: center;
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
      <div class="footer-partial">
        <a href="mailto:fnc314@fnc314.com">Email Me!</a>
      </div>
    `;
  }
}

window.customElements.define("footer-partial", FooterPartial)