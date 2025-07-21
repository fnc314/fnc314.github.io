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
        display: grid;
        grid-template-rows: [title] 10% [content] auto;
        --md-elevation-level: 4;
      }

      .article-title {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .article-body {
        padding: 0 1rem;

        p {
          margin: unset;
          padding: 1rem;
        }
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
        <section class="article-title">
          <h1 class="md-typescale-title-medium">CodePartial</h1>
        </section>
      </article>
    `;
  }
}

window.customElements.define("code-partial", CodePartial);