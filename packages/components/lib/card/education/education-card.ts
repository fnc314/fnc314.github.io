import { BENTO_BOX_TYPES } from "@/lib/bento-layout/bento-layout.types";
import "@/lib/card/bento/bento-card";
import { EducationCardStyles } from "@/lib/card/education/education-card.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { EducationJsonData } from "@fnc314/packages.data";
import { type EducationInstitutionRecord } from "@fnc314/packages.types";
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

/**
 * @summary EducationCard - A card component displaying education history.
 *
 * @element education-card
 */
@customElement("education-card")
export class EducationCard extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
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

  @state({})
  _educationJsonData: EducationInstitutionRecord[] = EducationJsonData

  override render() {
    const listItems = html`
      ${
        this._educationJsonData.map(
          (edu: EducationInstitutionRecord) => html`
            <li>
              <education-institution .institute=${edu}></education-institution>
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
        .spreadContent=${true}
        .bentoCardTitle=${"Education"}
        .bentoTag=${BENTO_BOX_TYPES.education}
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
