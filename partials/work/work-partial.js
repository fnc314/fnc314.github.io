import { LitElement, css, html } from "lit-element";
import WorkJson from "./work.json" with { type: "json" };

export class WorkPartial extends LitElement {
  static get styles() {
    return css`
      :root {

      }

      article {
        height: 100%;
        position: relative;
        border-radius: 16px;
        display: grid;
        grid-template-areas:
          "title"
          "content";
        grid-template-rows: 10% auto;
        --md-elevation-level: 4;
      }

      .article-header {
        grid-area: title;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5rem 0;
      }

      .article-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .article-body {
        padding: 0 2rem;
        overflow-y: scroll;
        grid-area: content;
      }

      details {
        margin: 0.5rem 0;

        h2 {
          display: inline-block;
        }

        .work-summary {
          margin: 0;
          padding: 0.5rem 1rem 0.5rem 1.5rem;
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

  #renderEmploymentInfo({ employer, role, date: { start, end }, summary }) {
    return summary.length ?
      html`
        <details>
          <summary>
            <h2 class="md-typescale-title-small">${employer} | ${role} | ${start} - ${end}</h2>
          </summary>
          ${summary.map(s => html`<p class="work-summary">${s.item}</p>`)}
        </details>
      ` :
      html`
        <h2 class="md-typescale-title-small">${employer} | ${role} | ${start} - ${end}</h2>
      `;
  }

  render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <md-elevation></md-elevation>
        <h1 class="article-header md-typescale-title-medium">Work Experience</h1>
        <section class="article-body">
          ${WorkJson.experience.map(exp => this.#renderEmploymentInfo(exp))}
        </section>
      </article>
    `;
  }
}

window.customElements.define("work-partial", WorkPartial);