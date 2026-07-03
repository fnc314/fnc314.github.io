import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { WorkExperienceStyles } from "@/lib/work/experience/work-experience.styles";
import { type Job, type WorkDate } from "@fnc314/packages.types";
import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * @summary A component for displaying professional work experience entries.  Supports nesting
 *   for sub-roles or specific project assignments under a single employer.
 *
 * @property {boolean} [isNested=false] - Whether this is a nested instance
 * @property {string} [experienceRole=""] - The formal role from the {@link WorkExperience} instance
 * @property {string} [experienceOrg=""] - The employer formal name
 * @property {string} [experienceSummary=""] - An optional summary of the overall role
 * @property {WorkDate} [dateStart={ stamp: "", text: "" }] - A {@link WorkDate} instance describing employment start date
 * @property {WorkDate} [dateEnd={ stamp: "", text: "" }] - A {@link WorkDate} instance describing employment end date
 * @property {Array<{ item: string }>} [summaries=[]] - An array of `{ item: string }` objects describing the responsibilities
 * @property {Array<Job>} [jobs=[]] - An array of {@link Job}s rendered as nested {@link WorkExperience} instances
 */
@customElement("work-experience")
export class WorkExperience extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    WorkExperienceStyles
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

  /**
   * A list of summary points describing achievements or responsibilities.
   * @typedef {Object} WorkExperienceSummaryItem
   * @property {string} item - The summary text
   */
  @property({ type: Array, attribute: "summaries" })
  summaries: {
    /**
     * AUTO-DOC'd WITH GEMINI
     * The description of the responsibility or achievement.
     */
    item: string
  }[] = [];

  /** A list of sub-jobs or project assignments to be rendered as nested experiences. */
  @property({ type: Array, attribute: "jobs" })
  jobs: Job[] = [];

  /** Renders the experience entry, conditionally applying styles based on nesting level. */
  override render() {
    const headerRole = this.isNested
      ? html`<h4 class="md-typescale-headline-small">${this.experienceRole}</h4>`
      : html`<h3 class="md-typescale-headline-medium">${this.experienceRole}</h3>`;

    const org = html`
      <p class=${this.isNested ? "md-typescale-label-medium" : "md-typescale-label-large"}>${this.experienceOrg}</p>
    `;

    const dates = html`
      <p>
        <time
          class=${this.isNested ? "md-typescale-label-medium" : "md-typescale-label-large"}
          datetime="${this.dateStart.stamp}"
          >${this.dateStart.text}</time
        >
        &mdash;
        <time
          class=${this.isNested ? "md-typescale-label-medium" : "md-typescale-label-large"}
          datetime="${this.dateEnd.stamp}"
          >${this.dateEnd.text}</time
        >
      </p>
    `;

    const summary = this.experienceSummary.length
      ? html`
          <p class=${this.isNested ? "md-typescale-label-medium" : "md-typescale-label-large"}>
            ${unsafeHTML(this.experienceSummary)}
          </p>
        `
      : nothing;

    const info = html`<header class="experience-info">${headerRole} ${org} ${dates} ${summary}</header>`;

    const content = this.jobs.length
      ? html`
          <div class="nested-experience">
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
      ? html`<section class="experience-container">${info} ${summaries}</section>`
      : html`<section class="experience-container">${info} ${content} ${summaries}</section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-experience": WorkExperience;
  }
}
