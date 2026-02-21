import { LitElement, css, html } from "lit-element";
import CodeJson from "./code.json" with { type: "json" };

export class CodePartial extends LitElement {
  static get styles() {
    return css`
      :root {

      }

      article {
        container-type: inline-size;
        height: 100%;
        position: relative;
        border-radius: 16px;
        display: grid;
        grid-template-areas:
          "title"
          "content";
        grid-template-rows: auto 1fr;
        --md-elevation-level: 4;

        h1 {
          text-align: center;
        }
      }

      .article-title {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .article-body {
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30cqw, 1fr));
        grid-auto-rows: minmax(30cqw, 1fr);
        gap: 2rem;

        .code-widget {
          aspect-ratio: 1 / 1;
          padding: 1rem;
          position: relative;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          --md-elevation-level: 5;

          a {
            text-decoration: none;
            text-align: center;
          }

          p {
            margin: unset;
            padding: 1rem;
            word-wrap: break-word;
          }
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

  #renderCodeWidget({ name, url, description }) {
    return html`
      <div class="code-widget">
        <md-elevation></md-elevation>
        <a target="_blank" href="${url}">
          <h2 class="md-typescale-title-small">${name}</h2>
        </a>
        <p class="md-typescale-body-small">${description}</p>
      </div>
    `;
  }

  render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <md-elevation></md-elevation>
        <h1 class="md-typescale-title-medium">Code Projects</h1>
        <section class="article-body">
          ${CodeJson.projects.map(p => this.#renderCodeWidget(p))}
        </section>
      </article>
    `;
  }
}

window.customElements.define("code-partial", CodePartial);