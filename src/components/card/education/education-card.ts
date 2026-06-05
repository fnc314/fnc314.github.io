import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { educationCardStyles } from "./education-card.styles";
import EducationJson from "@/data/education.json" with { type: "json" };
import "@/components/card/bento/bento-card";

/**
 * @summary EducationCard - A card component displaying education history.
 *
 * @element education-card
 */
@customElement("education-card")
export class EducationCard extends LitElement {
  static override styles = [educationCardStyles];

  override render() {
    return html`
      <bento-card class="education-container" aria-labelledby="education-title" scrollable>
        <h2 id="education-title" class="md-typescale-title-large">Education</h2>
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
