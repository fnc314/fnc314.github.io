import { BENTO_BOX_TYPES } from "@/components/bento-layout/bento-layout.types";
import "@/components/card/bento/bento-card";
import { EducationCardStyles } from "@/components/card/education/education-card.styles";
import { type EducationInstitutionRecord, EducationJsonData } from "@/components/education/institution/education-institution.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

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
