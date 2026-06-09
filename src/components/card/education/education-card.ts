import "@/components/card/bento/bento-card";
import { EducationCardStyles } from "@/components/card/education/education-card.styles";
import EducationJson from "@/data/education.json" with { type: "json" };
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary EducationCard - A card component displaying education history.
 *
 * @element education-card
 */
@customElement("education-card")
export class EducationCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [EducationCardStyles];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override render() {
    return html`
      <bento-card
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
                <h3 class="md-typescale-title-medium">${edu.institute}</h3>
                <time class="md-typescale-body-small" datetime="${edu.graduationDate.value}">${edu.graduationDate.label}</time>
                <h4 class="md-typescale-title-small">${edu.degree}</h4>
                <span class="md-typescale-body-medium">${edu.location}</span>
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
