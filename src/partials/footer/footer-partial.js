import { LitElement, css, html } from "lit-element";

export class FooterPartial extends LitElement {
  static get styles() {
    return [
      css`
        :host {
        }

        .footer-partial {
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            color: var(--md-sys-color-on-surface);
          }
        }
      `
    ];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <footer class="footer-partial">
        <a href="mailto:fnc314@fnc314.com">Email Me!</a>
      </footer>
    `;
  }
}

window.customElements.define("footer-partial", FooterPartial)