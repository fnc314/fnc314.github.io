import { ProfessionalConnectionStyles } from "@/lib/connection/professional/professional-connection.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { type ProfessionalConnectionJsonData, type ProfessionalConnectionType } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export { type ProfessionalConnectionJsonData, type ProfessionalConnectionType } from "@fnc314/packages.types";

export const TAG_NAME_CONNECTION_PROFESSIONAL: string = "professional-connection";

/**
 * Box for links to LinkedIn, GitHub, and Medium
 *
 * @property {ProfessionalConnectionType} professionalConnectionType - To where the link directs
 * @property {ProfessionalConnectionData} professionalConnectionData - Data driving widget variation
 *
 * @export
 * @class ProfessionalConnection
 * @typedef {ProfessionalConnection}
 * @extends {UIAwareElement}
 * @tag <professional-connection>
 */
@customElement(TAG_NAME_CONNECTION_PROFESSIONAL)
export class ProfessionalConnection extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles: CSSResult[] = [TextStyles, ProfessionalConnectionStyles];

  @property({ type: String })
  professionalConnectionType: ProfessionalConnectionType = "" as ProfessionalConnectionType;

  @property({ type: Object })
  professionalConnectionData: ProfessionalConnectionJsonData = {} as ProfessionalConnectionJsonData;

  override render(): TemplateResult {
    return html`
      <md-filled-icon-button
        href="${this.professionalConnectionData.href}"
        target="_blank"
        @click=${() => window.open(this.professionalConnectionData.href, "_blank")}
        type="button"
        title=${this.professionalConnectionData.title}
        aria-label=${this.professionalConnectionData.title}
      >
        ${this.professionalConnectionData.designToken.mask}
      </md-filled-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME_CONNECTION_PROFESSIONAL]: ProfessionalConnection;
  }
}
