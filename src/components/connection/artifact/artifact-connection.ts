import { ConnectionArtifactStyles } from "@/components/connection/artifact/artifact-connection.styles";
import { type ArtifactConnectionData, type ArtifactConnectionType } from "@/components/connection/artifact/artifact-connection.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles";
import { cssPropertyDataImage } from "@fnc314/design-tokens";
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
    const imgSrc = cssPropertyDataImage(
      this.darkMode ? this.artifactConnectionData.designToken.dark : this.artifactConnectionData.designToken.light
    );
    return html`
      <md-filled-icon-button
        href="${this.artifactConnectionData.href}"
        target="_blank"
        @click=${() => window.open(this.artifactConnectionData.href, "_blank")}
        type="button"
        title=${this.artifactConnectionData.title}
        >
          <img
            loading="lazy"
            src=${imgSrc}
            alt="${this.artifactConnectionType} Logo"
          />
        </md-filled-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "artifact-connection": ArtifactConnection;
  }
}