import { ProfessionalConnectionStyles } from "@/lib/connection/professional/professional-connection.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { type ProfessionalConnectionJsonData, type ProfessionalConnectionType } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("professional-connection")
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
        <span>${this.professionalConnectionData.designToken.mask}</span>
      </md-filled-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "professional-connection": ProfessionalConnection;
  }
}
