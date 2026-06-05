import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { workCardStyles } from "./work-card.styles";
import { data as WorkJson } from "@/components/work-experience/work-experience.types";
import "@/components/card/bento/bento-card";
import "@/components/work-experience/work-experience";

/**
 * @summary WorkCard - A card component displaying work experience.
 *
 * @element work-card
 */
@customElement("work-card")
export class WorkCard extends LitElement {
  static override styles = [workCardStyles];

  override connectedCallback() {
    super.connectedCallback();
    this.id = "work";
  }

  override render() {
    return html`
      <bento-card class="work-container" aria-labelledby="work-title" scrollable>
        <h2 id="work-title" class="md-typescale-title-large">Work History</h2>
        ${WorkJson.experiences.map(
          (exp) => html`
            <work-experience
              .isNested="${false}"
              .experienceOrg="${exp.employer}"
              .experienceRole="${exp.role}"
              .experienceSummary="${exp.summary}"
              .dateStart="${exp.dates.start}"
              .dateEnd="${exp.dates.end}"
              .jobs="${exp.jobs}"
              .summaries="${exp.summaries ?? []}"
            ></work-experience>
          `,
        )}
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "work-card": WorkCard;
  }
}
