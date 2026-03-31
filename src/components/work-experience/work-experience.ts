import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type Job, type WorkDate } from "@/types/components/work-experience/work-experience";
import { css, html, LitElement, nothing } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { customElement, property } from "lit/decorators.js";

/**
 * A component for displaying professional work experience entries.
 * Supports nesting for sub-roles or specific project assignments under a single employer.
 *
 * @property isNested=false - Whether this is a nested instance
 * @property experienceRole="" - The formal role from the {@link WorkExperience} instance
 * @property experienceOrg="" - The employer formal name
 * @property experienceSummary="" - An optional summary of the overall role
 * @property dateStart={ stamp: "", text: "" } - A {@link WorkDate} instance describing employment start date
 * @property dateEnd={ stamp: "", text: "" } - A {@link WorkDate} instance describing employment end date
 * @property summaries=[] - An array of `{ item: string }` objects describing the responsibilities
 * @property jobs=[] - An array of {@link Job}s rendered as nested {@link WorkExperience} instances
 */
@customElement("work-experience")
export class WorkExperience extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        /* For contextual layout */
        container-type: inline-size;
        box-sizing: border-box;
        width: 100%;

        h2,
        h3,
        p {
          margin: unset;
        }
      }

      /* --- SHARED BASE --- */
      h2,
      h3 {
        font-weight: var(--md-ref-typeface-weight-bold);
        font-family: var(--md-ref-typeface-brand);
      }

      time {
        opacity: 0.8;
        font-weight: var(--md-ref-typeface-weight-bold);
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
        grid-row: 4;
        grid-column: 2;

        li {
          list-style-type: circle;
          list-style-position: outside;
          margin-block: 0.5rem;
        }

        span.first-word {
          font-family: var(--md-ref-typeface-brand);
          font-weight: var(--md-ref-typeface-weight-bold);
          font-size: 120%;
          color: var(--md-sys-color-on-surface-variant);
        }

        pre {
          display: inline;
        }
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

        > h2,
        > h3 {
          color: var(--md-sys-color-primary);
        }

        /* ORG */
        > p:nth-child(2) {
          font-style: italic;
          color: var(--md-sys-color-tertiary);
        }

        /* Dates */
        > p:nth-child(3) {
          color: var(--md-sys-color-on-surface);
        }

        /* Summary */
        > p:nth-child(4) {
          color: var(--md-sys-color-on-surface-variant);
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
          gap: 0.5rem 1rem;
        }
        .experience-container {
          display: grid;
          grid-template-columns: minmax(20ch, max-content) 1fr;
          gap: 0.5rem 1rem;
          align-items: baseline;

          .experience-info {
            display: contents;

            /* Role */
            > h2,
            > h3 {
              grid-column: 2;
              grid-row: 1;
              color: var(--md-sys-color-primary);
            }

            /* Org */
            > p:nth-child(2) {
              grid-column: 2;
              grid-row: 2;
              font-style: italic;
              color: var(--md-sys-color-tertiary);
            }

            /* Dates */
            > p:nth-child(3) {
              grid-column: 1;
              grid-row: 1;
              text-align: end;
              inset-block-start: 0;
              color: var(--md-sys-color-on-surface);
            }

            /* Summary */
            > p:nth-child(4) {
              grid-column-start: 2;
              grid-column-end: -1;
              grid-row-start: 3;
              grid-row-end: 4;
              color: var(--md-sys-color-on-surface-variant);
              font-style: italic;
            }
          }

          /* Nested content */
          .nested-experiences {
            container-type: inline-size;
            grid-column: auto / span 2;
            grid-row: 4;
            border-inline-start: none;
            padding-inline-start: 0;
            display: grid;
            grid-template-columns: subgrid;
          }
        }
      }
    `,
  ];

  /** If true, adjusts font sizes and layout for a nested appearance. */
  @property({ type: Boolean, attribute: "is-nested" })
  isNested = false;

  /** The title of the professional role or project. */
  @property({ type: String, attribute: "experience-role" })
  experienceRole = "";

  /** The name of the organization or client. */
  @property({ type: String, attribute: "experience-org" })
  experienceOrg = "";

  @property({ type: String, attribute: "experience-summary" })
  experienceSummary = "";

  /** Start date information including machine-readable stamp and display text. */
  @property({ type: Object, attribute: "date-start" })
  dateStart: WorkDate = { stamp: "", text: "" };

  /** End date information including machine-readable stamp and display text. */
  @property({ type: Object, attribute: "date-end" })
  dateEnd: WorkDate = { stamp: "", text: "" };

  /** A list of summary points describing achievements or responsibilities. */
  @property({ type: Array, attribute: "summaries" })
  summaries: { item: string }[] = [];

  /** A list of sub-jobs or project assignments to be rendered as nested experiences. */
  @property({ type: Array, attribute: "jobs" })
  jobs: Job[] = [];

  /** Renders the experience entry, conditionally applying styles based on nesting level. */
  override render() {
    const headerRole = this.isNested
      ? html`<h3 class="md-typescale-headline-medium">${this.experienceRole}</h3>`
      : html`<h2 class="md-typescale-headline-large">${this.experienceRole}</h2>`;

    const headerOrg = this.isNested
      ? html`<p class="md-typescale-title-medium">${this.experienceOrg}</p>`
      : html`<p class="md-typescale-title-large">${this.experienceOrg}</p>`;

    const headerDates = this.isNested
      ? html`
          <p>
            <time
              class="md-typescale-label-medium"
              datetime="${this.dateStart.stamp}"
              >${this.dateStart.text}</time
            >
            -
            <time
              class="md-typescale-label-medium"
              datetime="${this.dateEnd.stamp}"
              >${this.dateEnd.text}</time
            >
          </p>
        `
      : html`
          <p>
            <time
              class="md-typescale-label-large"
              datetime="${this.dateStart.stamp}"
              >${this.dateStart.text}</time
            >
            -
            <time
              class="md-typescale-label-large"
              datetime="${this.dateEnd.stamp}"
              >${this.dateEnd.text}</time
            >
          </p>
        `;

    const orgSummary = this.experienceSummary.length
      ? this.isNested
        ? html`<p class="md-typescale-label-medium">${unsafeHTML(this.experienceSummary)}</p>`
        : html`<p class="md-typescale-label-large">${unsafeHTML(this.experienceSummary)}</p>`
      : nothing;

    const info = html`
      <header class="experience-info">${headerRole} ${headerOrg} ${headerDates} ${orgSummary}</header>
    `;

    const content = this.jobs.length
      ? html`
          <div class="nested-experiences">
            ${this.jobs.map(
              (job) => html`
                <work-experience
                  .isNested="${true}"
                  .dateStart=${job.dates.start}
                  .dateEnd=${job.dates.end}
                  .summaries=${job.summaries}
                  .experienceSummary=${job.summary ?? ""}
                  .experienceRole="${job.role}"
                  .experienceOrg="${job.client}"
                >
                </work-experience>
              `,
            )}
          </div>
        `
      : nothing;

    const summaries = this.summaries.length
      ? html`
          <ul class="nested-summary">
            ${this.summaries.map((summary) => {
              const contentArray = summary.item.split(" ");
              const newContent = contentArray
                .map((word, index) => {
                  if (index === 0) {
                    return `<span class="first-word">${word}</span>`;
                  } else {
                    return word;
                  }
                })
                .join(" ");
              return html`<li class="md-typescale-body-medium">${unsafeHTML(newContent)}</li>`;
            })}
          </ul>
        `
      : nothing;

    return this.isNested
      ? html`<div class="experience-container">${info} ${summaries}</div>`
      : html`<section class="experience-container">${info} ${content}</section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-experience": WorkExperience;
  }
}
