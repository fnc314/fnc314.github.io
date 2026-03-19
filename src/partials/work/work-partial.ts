import "@/components/work-experience/work-experience";
import WorkJson from "@/data/work.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";

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
  summary: {item: string}[];
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

  resume: Record<string, Record<"format" | "href" | "text", string>>;
}

const data = WorkJson as WorkData;

@customElement("work-partial")
export class WorkPartial extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
      }

      article {
        box-sizing: border-box;
        display: grid;
        grid-template-areas:
          "title"
          "content"
          ;
        gap: 1rem;
        grid-template-rows: min-content auto;
        height: min-content;
        min-height: 100%;
        padding-inline: 1rem;
      }

      partial-header {
        grid-area: title;
        margin: unset;
      }

      .article-body {
        grid-area: content;
        display: flex;
        flex-direction: column;

        h2,
        h3,
        p {
          margin: unset;
        }
      }
    `,
  ];

  override render() {
    return html`
      <article>
        <partial-header .headingText=${"Work Experience"}></partial-header>
        <div class="article-body">
          ${data.experiences.map(
            (exp) => html`
              <work-experience
                .isNested="${false}"
                experience-org="${exp.employer}"
                experience-role="${exp.role}"
                .dateStart="${exp.dates.start}"
                .dateEnd="${exp.dates.end}"
                .jobs="${exp.jobs}"
              ></work-experience>
            `,
          )}
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
