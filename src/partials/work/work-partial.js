import { LitElement, css, html } from "lit-element";
import "./../../../dist/partials/work/work-experience.js";
import { ParialHeadingStyles, PartialArticleStyles } from "./../../../dist/styles/partial-styles";
import WorkJson from "./work.json" with { type: "json" };

export class WorkPartial extends LitElement {
  static get styles() {
    return [
      ParialHeadingStyles,
      PartialArticleStyles,
      css`
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
          grid-template-rows: auto 1fr;
          --md-elevation-level: 4;
        }

        header {
          grid-area: title;
        }

        .article-header {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .article-title {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .article-body {
          padding: 0 1rem;
          overflow-y: scroll;
          grid-area: content;

          h2, h3, p {
            margin: unset;
          }
        }
      `
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <header>
          <md-elevation></md-elevation>
          <h1 class="article-header md-typescale-title-medium">Work Experience</h1>
        </header>
        <div class="article-body">
          ${WorkJson.experiences.map(exp => html`
            <work-experience .isNested="${false}" experience-org="${exp.employer}" experience-role="${exp.role}" .dateStart="${exp.dates.start}" .dateEnd="${exp.dates.end}" .jobs="${exp.jobs}"></work-experience>
          `)}
        </div>
      </article>
    `;
  }
}

window.customElements.define("work-partial", WorkPartial);