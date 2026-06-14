import { DirectConnectionStyles } from "@/components/connection/direct/direct-connection.styles";
import { type ConnectionInstance } from "@/components/connection/direct/direct-connection.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { MaterialTypescaleStyles } from "@/styles";
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
    MaterialTypescaleStyles,
    DirectConnectionStyles
  ]

  @property({
    type: Object,
    attribute: "connection-instance"
  })
  connectionInstance: ConnectionInstance = {} as ConnectionInstance;

  override render(): TemplateResult {

    const buttonId = `button-direct-connection-${this.connectionInstance.method}-${this.connectionInstance.text}`;
    const labelId = buttonId.replace("button", "label");

    return html`
      <md-filled-tonal-icon-button
        id="${buttonId}"
        aria-labelledby="${labelId}"
        href="${this.connectionInstance.href}"
        target="_blank"
        @click=${() => window.open(this.connectionInstance.href, "_blank")}
        type="button"
        >
        <md-icon>${this.connectionInstance.mdIcon}</md-icon>
      </md-filled-tonal-icon-button>
      <span
        id="${labelId}"
        class="direct-connection-label"
        >
        ${this.connectionInstance.text}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "direct-connection": DirectConnection;
  }
}