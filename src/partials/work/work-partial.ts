import { LitElement, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";
import { ParialHeadingStyles } from "../../styles/partial-styles.js";
import "./work-experience.js";
import WorkJson from "./work.json" with { type: "json" };

interface WorkDate {
  stamp: string;
  text: string;
}

interface Job {
  role: string;
  client: string;
  dates: {
    start: WorkDate;
    end: WorkDate;
  };
  summary: { item: string }[];
}

interface Experience {
  employer: string;
  role: string;
  dates: {
    start: WorkDate;
    end: WorkDate;
  };
  jobs: Job[];
}

interface WorkData {
  experiences: Experience[];
}

const data = WorkJson as WorkData;

@customElement("work-partial")
export class WorkPartial extends LitElement {
  static override styles = [
    ParialHeadingStyles,
    css`
      :host {

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

  override render() {
    return html`
      <article
        class="md-typescale-body-medium"
        >
        <header>
          <md-elevation></md-elevation>
          <h1 class="article-header md-typescale-title-medium">Work Experience</h1>
        </header>
        <div class="article-body dark">
          ${data.experiences.map(exp => html`
            <work-experience .isNested="${false}" experience-org="${exp.employer}" experience-role="${exp.role}" .dateStart="${exp.dates.start}" .dateEnd="${exp.dates.end}" .jobs="${exp.jobs}"></work-experience>
          `)}
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-partial": WorkPartial;
  }
}