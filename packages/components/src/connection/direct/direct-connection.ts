import { DirectConnectionStyles } from "@/lib/connection/direct/direct-connection.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { AnalyticsService } from "@fnc314/packages.services";
import { type ConnectionInstance } from "@fnc314/packages.types";
import "@material/web/iconbutton/filled-tonal-icon-button";
import "iconify-icon";
import { type CSSResult, type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export { type ConnectionInstance } from "@fnc314/packages.types";

export const TAG_NAME_CONNECTION_DIRECT: string = "direct-connection";

/**
 * Represents a subset of content in `connections.json` as
 *   outlined in {@link @fnc314/packages.types!ConnectionInstance}
 *
 * @property {ConnectionInstance} connectionInstance - The data driving the widget variation
 * @class DirectConnection
 * @typedef {DirectConnection}
 * @extends {UIAwareElement}
 */
@customElement(TAG_NAME_CONNECTION_DIRECT)
export class DirectConnection extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles: CSSResult[] = [TextStyles, DirectConnectionStyles];

  @property({
    type: Object,
    attribute: "connection-instance",
  })
  connectionInstance: ConnectionInstance = {} as ConnectionInstance;

  private _handleClick() {
    const isPhone = this.connectionInstance.href.startsWith("tel:");
    AnalyticsService.trackContact(isPhone ? "phone" : "email", this.connectionInstance.href);
    window.open(this.connectionInstance.href, "_blank");
  }

  override render(): TemplateResult {
    return html`
      <md-filled-icon-button
        href="${this.connectionInstance.href}"
        target="_blank"
        @click=${() => this._handleClick()}
        type="button"
        title=${this.connectionInstance.title}
        aria-label=${this.connectionInstance.title}
      >
        <iconify-icon
          width="none"
          height="none"
          icon=${this.connectionInstance.iconifyIcon}
        ></iconify-icon>
      </md-filled-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME_CONNECTION_DIRECT]: DirectConnection;
  }
}
