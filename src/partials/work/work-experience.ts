import { css, html, LitElement, nothing } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import { ThemeColors } from "./../../styles/partial-styles.js";

@customElement("work-experience")
export class WorkExperience extends LitElement {
  static override styles = [
    ThemeColors,
    css`
      :host {
        display: block;
        /* For contextual layout */
        container-type: inline-size;

        h2, h3, p {
          margin: unset;
        }
      }

      /* --- SHARED BASE --- */
      h2 { font-size: 1.4rem; font-weight: 600; }
      h3 { font-size: 1.1rem; font-weight: 600; }
      time {
        font-weight: 600;
        font-family: monospace;
        opacity: 0.8;
      }

      .nested-experiences {
        display: flex;
        flex-direction: column;
      }
      .nested-experience {
        display: flex;
        flex-direction: column;
      }
      .nested-summary {
        padding-inline: 1.5rem;
        margin-block: unset;
        grid-row: 3;
        grid-column: 2;

        li {
          list-style-type: square;
          margin-block-start: 0.25rem;
          margin-block-end: 0.5rem;
        }
      }

      .time {
        font-size: 1rem;
      }

      .time-nested {
        font-size: 0.85rem;
      }

      /* --- LAYOUT: CONTEXTUAL (Grid / Container Query) --- */
      .experience-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-block: 0.5rem;
      }

      .experience-info,
      .nested-experience-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        > h2, > h3 {
          color: var(--md-sys-color-tertiary);
        }

        /* ORG */
        > p:nth-child(2) {
          font-style: italic;
        }

        /* Dates */
        > p:last-child {
          color: var(--md-sys-color-secondary);
        }
      }

      .nested-experiences {
        gap: 1rem;
        margin-block-start: 0.5rem;
        padding-inline-start: 1rem;
        border-inline-start: 2px solid var(--md-sys-color-primary);
      }

      .nested-experience-container {
        display: grid;
        grid-template-columns: subgrid;
      }

      @container (min-inline-size: 600px) {
        div.experience-container {
          gap: 0.5rem 1.5rem;
        }
        .experience-container {
          display: grid;
          grid-template-columns: minmax(35ch, min-content) 1fr;
          gap: 0.5rem 1.5rem;
          align-items: baseline;

          .experience-info {
            display: contents;

            /* Dates */
            > p:last-child {
              grid-column: 1;
              grid-row: 1;
              text-align: end;
              position: sticky;
              inset-block-start: 0;
              color: var(--md-sys-color-secondary);
            }
            /* Role */
            > h2, > h3 {
              grid-column: 2;
              grid-row: 1;
              color: var(--md-sys-color-tertiary);
            }
            /* Org */
            > p:nth-child(2) {
              grid-column: 2;
              grid-row: 2;
              opacity: 0.7;
              font-style: italic;
            }
          }

          /* Nested content */
          .nested-experiences {
            container-type: inline-size;
            grid-column: auto / span 2;
            grid-row: 3;
            border-inline-start: none;
            padding-inline-start: 0;
            display: grid;
            grid-template-columns: subgrid;
          }
        }
      }
    `
  ];

    @property({ type: Boolean, attribute: "is-nested" })
    isNested = false;

    @property({ type: String, attribute: "experience-role" })
    experienceRole = "";

    @property({ type: String, attribute: "experience-org" })
    experienceOrg = "";

    @property({ type: Object, attribute: "date-start" })
    dateStart: { stamp: string, text: string } = { stamp: "", text: "" };

    @property({ type: Object, attribute: "date-end" })
    dateEnd: { stamp: string, text: string } = { stamp: "", text: "" };

    @property({ type: Array, attribute: "summaries" })
    summaries: { item: string }[] = [];

    @property({ type: Array, attribute: "jobs" })
    jobs: {
      role: string,
      client: string,
      dates: {
        start: { stamp: string, text: string },
        end: { stamp: string, text: string }
      },
      summary: { item: string }[]
    }[] = []

    override render() {
      const info = html`
        <header class="experience-info">
          ${this.isNested ? html`<h3>${this.experienceRole}</h3>` : html`<h2>${this.experienceRole}</h2>`}
          <p>${this.experienceOrg}</p>
          <p>
            <time
              class=${this.isNested ? "time-nested" : "time"}
              datetime="${this.dateStart.stamp}">${this.dateStart.text}</time> -
            <time
              class=${this.isNested ? "time-nested" : "time"}
              datetime="${this.dateEnd.stamp}">${this.dateEnd.text}</time>
          </p>
        </header>
      `;
      const content = this.jobs.length ?
        html`
          <div class="nested-experiences">
            ${this.jobs.map(job => html`
              <work-experience
                .isNested="${true}"
                .dateStart=${job.dates.start}
                .dateEnd=${job.dates.end}
                .summaries=${job.summary}
                experience-role="${job.role}"
                experience-org="${job.client}"
                >
                </work-experience>
            `)}
          </div>
        ` :
        nothing;
      const summaries = this.summaries.length ?
        html`
          <ul class="nested-summary">
            ${this.summaries.map(summary => html`
              <li>${summary.item}</li>
            `)}
          </ul>
        `
         :
        nothing;
      return this.isNested ?
        html`
          <div class="experience-container">
            ${info}
            ${summaries}
          </div>
        ` :
        html`
          <section class="experience-container">
            ${info}
            ${content}
          </section>
        `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-experience": WorkExperience;
  }
}