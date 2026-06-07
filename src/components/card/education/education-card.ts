import "@/components/card/bento/bento-card";
import EducationJson from "@/data/education.json" with { type: "json" };
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { educationCardStyles } from "./education-card.styles";

/**
 * @summary EducationCard - A card component displaying education history.
 *
 * @element education-card
 */
@customElement("education-card")
export class EducationCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [educationCardStyles];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override render() {
    return html`
      <bento-card
        class="education-container"
        aria-labelledby="education-title"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
      >
        <h2 slot="header" id="education-title" class="md-typescale-title-large">Education</h2>
        <ul class="education-list">
          ${EducationJson.education.map(
            (edu) => html`
              <li class="education-item">
                <span class="md-typescale-title-medium">${edu.institute}</span>
                <span class="md-typescale-body-medium">${edu.location}</span>
                <span class="md-typescale-title-small">${edu.degree}</span>
                <span class="md-typescale-body-small">${edu.graduationDate.label}</span>
              </li>
            `,
          )}
        </ul>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "education-card": EducationCard;
  }
}
