import "@/components/card/bento/bento-card";
import { ConnectCardStyles } from "@/components/card/connect/connect-card.styles";
import { type ArtifactConnectionData, ArtifactConnectionJson, type ArtifactConnectionType } from "@/components/connection/artifact/artifact-connection.types";
import "@/components/connection/direct/direct-connection";
import { type ConnectionInstance, DirectConnections } from "@/components/connection/direct/direct-connection.types";
import { type ProfessionalConnectionJsonData, type ProfessionalConnectionType, ProfessionalConnections } from "@/components/connection/professional/professional-connection.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary ConnectCard - A card component displaying contact/connection links.
 *
 * @element connect-card
 */
@customElement("connect-card")
export class ConnectCard extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    ConnectCardStyles
  ];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override render() {
    const directConnections = Object.entries(DirectConnections)
      .map(([method, instance]: [string, ConnectionInstance]) => html`
        <li>
          <direct-connection .connectionInstance=${instance}></direct-connection>
        </li>
      `);

    const professionalConnections = Object.entries(ProfessionalConnections)
      .map(([type, data]: [string, ProfessionalConnectionJsonData]) => html`
        <li>
          <professional-connection
            .professionalConnectionType=${type as ProfessionalConnectionType}
            .professionalConnectionData=${data}>
          </professional-connection>
        </li>
      `);

    const artifactConnections = Object.entries(ArtifactConnectionJson)
      .map(([name, data]: [string, ArtifactConnectionData]) => html`
        <li>
          <artifact-connection
            .artifactConnectionType=${name as ArtifactConnectionType}
            .artifactConnectionData=${data}>
          </artifact-connection>
        </li>
      `
      );

    return html`
      <bento-card
        class="connect-container"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Let's Connect"}
      >
        <ul>
          ${directConnections}
          ${professionalConnections}
          ${artifactConnections}
        </ul>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "connect-card": ConnectCard;
  }
}
