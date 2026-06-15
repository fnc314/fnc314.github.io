import "@/components/card/bento/bento-card";
import { EducationCardStyles } from "@/components/card/education/education-card.styles";
import EducationJson from "@/data/education.json" with { type: "json" };
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { cssPropertyDataImage } from "@fnc314/design-tokens";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary EducationCard - A card component displaying education history.
 *
 * @element education-card
 */
@customElement("education-card")
export class EducationCard extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    EducationCardStyles
  ];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override render() {
    const listItems = html`
      ${
        EducationJson.education.map(
          (edu) => html`
            <li>
              <img
                src=${cssPropertyDataImage(
                  this.darkMode ? edu.designToken.dark : edu.designToken.light
                )}
                alt=${`Logo for ${edu.institute}`}
              />
              <h3 class="md-typescale-title-medium">${edu.institute}</h3>
              <span class="md-typescale-body-medium">${edu.location}</span>
              <h4 class="md-typescale-title-small">${edu.degree}</h4>
              <time class="md-typescale-body-small" datetime="${edu.graduationDate.value}">${edu.graduationDate.label}</time>
            </li>
          `,
        )
      }
    `;
    return html`
      <bento-card
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Education"}
      >
        <section>
          <ul>
            ${listItems}
          </ul>
        </section>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "education-card": EducationCard;
  }
}
