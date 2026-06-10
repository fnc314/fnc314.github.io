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
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Education"}
      >
        <ul class="education-list">
          ${EducationJson.education.map(
            (edu) => html`
              <li class="education-item">
                <img
                  src=${`data:image/svg+xml;base64,${window.getComputedStyle(document.documentElement).getPropertyValue(edu.designToken)}`}
                  alt=${`Logo for ${edu.institute}`}
                />
                <h3 class="md-typescale-title-medium">${edu.institute}</h3>
                <span class="md-typescale-body-medium">${edu.location}</span>
                <h4 class="md-typescale-title-small">${edu.degree}</h4>
                <time class="md-typescale-body-small" datetime="${edu.graduationDate.value}">${edu.graduationDate.label}</time>
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
