import { ProfessionalConnectionStyles } from "@/components/connection/professional/professional-connection.styles";
import { type ProfessionalConnectionJsonData, type ProfessionalConnectionType } from "@/components/connection/professional/professional-connection.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { readCSSProperty } from "@fnc314/packages.design-tokens";
import { type CSSResult, type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("professional-connection")
export class ProfessionalConnection extends UIAwareElement {
  static override styles: CSSResult[] = [
    TextStyles,
    ProfessionalConnectionStyles,
  ];

  @property({ type: String })
  professionalConnectionType: ProfessionalConnectionType = "" as ProfessionalConnectionType;

  @property({ type: Object })
  professionalConnectionData: ProfessionalConnectionJsonData = {} as ProfessionalConnectionJsonData;

  override render(): TemplateResult {
    const imgSrc = readCSSProperty(
      this.darkMode ? this.professionalConnectionData.designToken.dark : this.professionalConnectionData.designToken.light
    );
    return html`
      <md-filled-icon-button
        href="${this.professionalConnectionData.href}"
        target="_blank"
        @click=${() => window.open(this.professionalConnectionData.href, "_blank")}
        type="button"
        title=${this.professionalConnectionData.title}
        aria-label=${this.professionalConnectionData.title}
      >
        <img
          loading="lazy"
          src=${imgSrc}
          alt="${this.professionalConnectionType} Logo"
        />
      </md-filled-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "professional-connection": ProfessionalConnection;
  }
}