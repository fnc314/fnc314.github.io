import { ConnectionArtifactStyles } from "@/lib/connection/artifact/artifact-connection.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { type ArtifactConnectionData, type ArtifactConnectionType } from "@fnc314/packages.types";
import "@material/web/iconbutton/filled-icon-button";
import "iconify-icon";
import { type CSSResult, type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";
export { type ArtifactConnectionData, type ArtifactConnectionType } from "@fnc314/packages.types";

export const TAG_NAME_CONNECTION_ARTIFACT: string = "artifact-connection";

/**
 * A wrapper for `md-filled-icon-button` used to link to `.pdf` and `Google Doc`
 *   artifacts
 *
 * @property {ArtifactConnectionType} artifactConnectionType - The type of the connection
 * @property {ArtifactConnectionData} artifactConnectionData - The particular data driving widget variation
 *
 * @export
 * @class ArtifactConnection
 * @typedef {ArtifactConnection}
 * @extends {UIAwareElement}
 */
@customElement(TAG_NAME_CONNECTION_ARTIFACT)
export class ArtifactConnection extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles: CSSResult[] = [TextStyles, ConnectionArtifactStyles];

  @property({ type: String })
  artifactConnectionType: ArtifactConnectionType = "" as ArtifactConnectionType;

  @property({ type: Object })
  artifactConnectionData: ArtifactConnectionData = {} as ArtifactConnectionData;

  override render(): TemplateResult {
    return html`
      <md-filled-icon-button
        href=${this.artifactConnectionData.href}
        target="_blank"
        @click=${() => window.open(this.artifactConnectionData.href, "_blank")}
        type="button"
        title=${this.artifactConnectionData.title}
        aria-label=${this.artifactConnectionData.title}
      >
        <iconify-icon
          width="none"
          height="none"
          icon=${this.artifactConnectionData.iconifyIcon}
        ></iconify-icon>
      </md-filled-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME_CONNECTION_ARTIFACT]: ArtifactConnection;
  }
}
