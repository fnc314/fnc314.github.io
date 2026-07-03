import { ConnectionArtifactStyles } from "@/lib/connection/artifact/artifact-connection.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { type ArtifactConnectionData, type ArtifactConnectionType } from "@fnc314/packages.types";
import "@material/web/iconbutton/filled-icon-button";
import { type CSSResult, type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("artifact-connection")
export class ArtifactConnection extends UIAwareElement {
  static override styles: CSSResult[] = [
    TextStyles,
    ConnectionArtifactStyles,
  ];

  @property({ type: String })
  artifactConnectionType: ArtifactConnectionType = "" as ArtifactConnectionType

  @property({ type: Object })
  artifactConnectionData: ArtifactConnectionData = {} as ArtifactConnectionData;

  override render(): TemplateResult {
    // const imgSrc = readCSSProperty(
    //   this.darkMode ? this.artifactConnectionData.designToken.dark : this.artifactConnectionData.designToken.light
    // );
    const cacheBustingUrl = `${this.artifactConnectionData.href}?t=${Date.now()}`;
    return html`
      <md-filled-icon-button
        href="${cacheBustingUrl}"
        target="_blank"
        @click=${() => window.open(cacheBustingUrl, "_blank")}
        type="button"
        title=${this.artifactConnectionData.title}
        aria-label=${this.artifactConnectionData.title}
        >
        <md-icon>
          ${this.artifactConnectionData.mdIcon}
        </md-icon>
        </md-filled-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "artifact-connection": ArtifactConnection;
  }
}