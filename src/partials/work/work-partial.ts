import WorkJson from "@/data/work.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { LitElement, css, html } from "lit-element";
import { customElement } from "lit/decorators.js";
import "./work-experience";

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
      }

      article {
        display: grid;
        grid-template-areas:
          "title"
          "content"
          "footer"
          ;
        gap: 1rem;
        grid-template-rows: auto 1fr auto;
      }

      partial-header {
        grid-area: title;
        margin-inline: 1rem;
      }

      .article-body {
        padding-inline: 1rem;
        grid-area: content;

        h2,
        h3,
        p {
          margin: unset;
        }
      }

      footer {
        grid-area: footer;

        ul {
          list-style-type: none;
          padding: unset;
          margin: unset;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          justify-content: center;
          align-items: center;
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
        <footer>
          <ul>
            ${
              Object.values(
                data.resume
              ).map((resume) => html`
                <li>
                  <a .href=${resume.href} target="_blank">
                    ${resume.text}
                  </a>
                </li>
              `)
            }
          </ul>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-partial": WorkPartial;
  }
}
