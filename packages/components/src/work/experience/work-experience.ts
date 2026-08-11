import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { WorkExperienceStyles } from "@/lib/work/experience/work-experience.styles";
import { type Job, type WorkDate } from "@fnc314/packages.types";
import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export { type Job, type WorkDate } from "@fnc314/packages.types";

/**
 * @summary A component for displaying professional work experience entries.  Supports nesting
 *   for sub-roles or specific project assignments under a single employer.
 *
 * @property {boolean} [isNested=false] - Whether this is a nested instance
 * @property {string} [experienceRole=""] - The formal role from the {@link WorkExperience} instance
 * @property {string} [experienceOrg=""] - The employer formal name
 * @property {string} [experienceSummary=""] - An optional summary of the overall role
 * @property {WorkDate} [dateStart={ stamp: "", text: "" }] - A {@link @fnc314/packages.types!WorkDate} instance describing employment start date
 * @property {WorkDate} [dateEnd={ stamp: "", text: "" }] - A {@link @fnc314/packages.types!WorkDate} instance describing employment end date
 * @property {Array<{ item: string }>} [summaries=[]] - An array of `{ item: string }` objects describing the responsibilities
 * @property {Array<Job>} [jobs=[]] - An array of {@link @fnc314/packages.types!Job}s rendered as nested {@link WorkExperience} instances
 */
@customElement("work-experience")
export class WorkExperience extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, WorkExperienceStyles];

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
    item: string;
  }[] = [];

  /** A list of sub-jobs or project assignments to be rendered as nested experiences. */
  @property({ type: Array, attribute: "jobs" })
  jobs: Job[] = [];

  /**
   * Creates a {@link Record} of `string`: `boolean` relationships mapping
   *   material `md-typescale` classes to {@link isNested}
   *
   * @private
   * @param {boolean} forHeading A `boolean` toggling between `-headline-` and `-title-` styles
   * @returns {Record<string, boolean>} The {@link Record} passed into {@link classMap}
   */
  private getTypescaleClassMap(forHeading: boolean): Record<string, boolean> {
    return forHeading ?
      {
        "md-typescale-headline-small": this.isNested,
        "md-typescale-headline-medium": !this.isNested,
      } :
      {
        "md-typescale-title-small": this.isNested,
        "md-typescale-title-medium": !this.isNested,
      };
  }

  /** Renders the experience entry, conditionally applying styles based on nesting level. */
  override render() {
    const headerElement = this.isNested ?
      html`<h4 class=${classMap(this.getTypescaleClassMap(true))}>${this.experienceRole}</h4>` :
      html`<h3 class=${classMap(this.getTypescaleClassMap(true))}>${this.experienceRole}</h3>`;

    const org = html`
      <p class=${classMap(this.getTypescaleClassMap(false))}>${this.experienceOrg}</p>
    `;

    const currentDate = new Date();

    const currentMonth = `${currentDate.getMonth()}`.length === 2 ?
      `${currentDate.getMonth() + 1}` : `0${currentDate.getMonth() + 1}`

    const endDatetime: string = this.dateEnd.stamp.trim() === "" ?
      currentMonth :
      this.dateEnd.stamp;

    const dates = html`
      <p>
        <time
          class=${classMap(this.getTypescaleClassMap(false))}
          datetime=${this.dateStart.stamp}
          >${this.dateStart.text}</time
        >
        &mdash;
        <time
          class=${classMap(this.getTypescaleClassMap(false))}
          datetime=${endDatetime}
          >${this.dateEnd.text}</time
        >
      </p>
    `;

    const summary =
      this.experienceSummary.length ?
        html`
          <p class=${classMap(this.getTypescaleClassMap(false))}>
            ${unsafeHTML(this.experienceSummary)}
          </p>
        ` :
        html`${nothing}`;

    const info = html`
      <header class="experience-info">
        ${headerElement}
        ${org}
        ${dates}
        ${summary}
      </header>
    `;

    const content =
      this.jobs.length ?
        html`
          <div class="nested-experience">
            ${this.jobs.map(
              (job: Job) => html`
                <work-experience
                  .isNested=${true}
                  .dateStart=${job.dates.start}
                  .dateEnd=${job.dates.end}
                  .summaries=${job.summaries}
                  .experienceSummary=${job.summary ?? ""}
                  .experienceRole=${job.role}
                  .experienceOrg=${job.client}
                >
                </work-experience>
              `,
            )}
          </div>
        `
      : nothing;

    const summaries =
      this.summaries.length ?
        html`
          <ul class="nested-summary">
            ${this.summaries.map((summary) => {
              const contentArray = summary.item.split(" ");
              const newContent = [
                `<span class="first-word">${contentArray.at(0)}</span>`,
                ...contentArray.splice(1)
              ].join(" ");

              return html`<li class="md-typescale-body-medium">${unsafeHTML(newContent)}</li>`;
            })}
          </ul>
        ` :
        html`${nothing}`;

    return this.isNested ?
      html`<section class="experience-container">${info} ${summaries}</section>` :
      html`<article class="experience-container">${info} ${content} ${summaries}</article>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-experience": WorkExperience;
  }
}
