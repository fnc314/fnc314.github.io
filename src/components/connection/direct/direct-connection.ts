import { DirectConnectionStyles } from "@/components/connection/direct/direct-connection.styles";
import { type ConnectionInstance } from "@/components/connection/direct/direct-connection.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import "@material/web/iconbutton/filled-tonal-icon-button";
import { type CSSResult, type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Represents a subset of content in `connections.json` as
 *   outlined in {@link ConnectionInstance}
 *
 * @export
 * @class DirectConnection
 * @typedef {DirectConnection}
 * @extends {UIAwareElement}
 */
@customElement("direct-connection")
export class DirectConnection extends UIAwareElement {
  static override styles: CSSResult[] = [
    TextStyles,
    DirectConnectionStyles
  ]

  @property({
    type: Object,
    attribute: "connection-instance"
  })
  connectionInstance: ConnectionInstance = {} as ConnectionInstance;

  override render(): TemplateResult {

    const buttonId = `button-direct-connection-${this.connectionInstance.mdIcon}-${this.connectionInstance.text}`;

    return html`
      <md-filled-icon-button
        id="${buttonId}"
        href="${this.connectionInstance.href}"
        target="_blank"
        @click=${() => window.open(this.connectionInstance.href, "_blank")}
        type="button"
        title=${this.connectionInstance.title}
        aria-label=${this.connectionInstance.title}
        >
        <md-icon>${this.connectionInstance.mdIcon}</md-icon>
      </md-filled-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "direct-connection": DirectConnection;
  }
}