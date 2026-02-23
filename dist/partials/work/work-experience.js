var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, property } from "@lit/reactive-element/decorators.js";
import { css, html, LitElement, nothing } from "lit-element";
let WorkExperience = class WorkExperience extends LitElement {
    constructor() {
        super(...arguments);
        this.isNested = false;
        this.experienceRole = "";
        this.experienceOrg = "";
        this.dateStart = { stamp: "", text: "" };
        this.dateEnd = { stamp: "", text: "" };
        this.summaries = [];
        this.jobs = [];
    }
    static { this.styles = css `
    :host {
      display: block;
      /* For contextual layout */
      container-type: inline-size;

      h2, h3, p {
        margin: unset;
      }
    }

    /* --- SHARED BASE --- */
    h2 { font-size: 1.4rem; font-weight: 600; color: var(--md-sys-color-on-surface, inherit); }
    h3 { font-size: 1.1rem; font-weight: 600; }
    time {
      font-style: italic;
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
    }

    .nested-experiences {
      gap: 1rem;
      margin-block-start: 0.5rem;
      padding-inline-start: 1rem;
      border-inline-start: 2px solid var(--md-sys-color-outline-variant, #e0e0e0);
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
        grid-template-columns: 17rem 1fr;
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
          }
          /* Role */
          > h2 {
            grid-column: 2;
            grid-row: 1;
          }
          /* Org */
          > p:nth-child(2) {
            grid-column: 2;
            grid-row: 2;
            opacity: 0.7;
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
  `; }
    render() {
        const info = html `
        <hgroup class="experience-info">
          ${this.isNested ? html `<h3>${this.experienceRole}</h3>` : html `<h2>${this.experienceRole}</h2>`}
          <p>${this.experienceOrg}</p>
          <p>
            <time
              class=${this.isNested ? "time-nested" : "time"}
              datetime="${this.dateStart.stamp}">${this.dateStart.text}</time> -
            <time
              class=${this.isNested ? "time-nested" : "time"}
              datetime="${this.dateEnd.stamp}">${this.dateEnd.text}</time>
          </p>
        </hgroup>
      `;
        const content = this.jobs.length ?
            html `
          <div class="nested-experiences">
            ${this.jobs.map(job => html `
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
            html `
          <ul class="nested-summary">
            ${this.summaries.map(summary => html `
              <li>${summary.item}</li>
            `)}
          </ul>
        `
            :
                nothing;
        return this.isNested ?
            html `
          <div class="experience-container">
            ${info}
            ${summaries}
          </div>
        ` :
            html `
          <section class="experience-container">
            ${info}
            ${content}
          </section>
        `;
    }
};
__decorate([
    property({ type: Boolean, attribute: "is-nested" })
], WorkExperience.prototype, "isNested", void 0);
__decorate([
    property({ type: String, attribute: "experience-role" })
], WorkExperience.prototype, "experienceRole", void 0);
__decorate([
    property({ type: String, attribute: "experience-org" })
], WorkExperience.prototype, "experienceOrg", void 0);
__decorate([
    property({ type: Object, attribute: "date-start" })
], WorkExperience.prototype, "dateStart", void 0);
__decorate([
    property({ type: Object, attribute: "date-end" })
], WorkExperience.prototype, "dateEnd", void 0);
__decorate([
    property({ type: Array, attribute: "summaries" })
], WorkExperience.prototype, "summaries", void 0);
__decorate([
    property({ type: Array, attribute: "jobs" })
], WorkExperience.prototype, "jobs", void 0);
WorkExperience = __decorate([
    customElement("work-experience")
], WorkExperience);
export { WorkExperience };
//# sourceMappingURL=work-experience.js.map