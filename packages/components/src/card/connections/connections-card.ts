import { ConnectionsCardStyles, DL_DIV_COLUMN_COUNT } from "@/lib/card/connections/connections-card.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/lib/styles";
import { Connections } from "@fnc314/packages.data";
import { type ArtifactConnectionData, type ArtifactConnectionType, BENTO_BOX_TYPES, type ConnectionInstance, type ProfessionalConnectionJsonData } from "@fnc314/packages.types";
import { type TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("connections-card")
export class ConnectionsCard extends UIAwareElement {

  static override styles = [
    TextStyles,
    ConnectionsCardStyles
  ]

  @property({ type: Boolean })
  expanded = true;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  private contactsDefinitionList(): TemplateResult {
    const directConnectionsCount = Object.entries(Connections.direct).length;
    const directConnectionsColSpan = Math.floor(DL_DIV_COLUMN_COUNT / directConnectionsCount);
    const contact = html`
      <div>
        <dt class="md-typescale-title-large">Contact</dt>
        ${
          Object.entries(Connections.direct).map(
            ([_, instance]: [string, ConnectionInstance]) =>
              html`
                <dd style="grid-column: span ${directConnectionsColSpan}">
                  <direct-connection
                    .connectionInstance=${instance}>
                  </direct-connection>
                </dd>
              `
          )
        }
      </div>
    `;

    const socialConnectionsCount = Object.entries(Connections.social).length;
    const socialConnectionsColSpan = Math.floor(DL_DIV_COLUMN_COUNT / socialConnectionsCount);
    const network = html`
      <div>
        <dt class="md-typescale-title-large">Network</dt>
        ${Object.entries(Connections.social).map(
          ([type, data]: [string, ProfessionalConnectionJsonData]) => html`
            <dd style="grid-column: span ${socialConnectionsColSpan}">
              <professional-connection
                .professionalConnectionType=${type}
                .professionalConnectionData=${data}
              >
              </professional-connection>
            </dd>
          `,
        )}
      </div>
    `;

    const resumeConnectionsCount = Object.entries(Connections.resume).length;
    const resumeConnectionsColSpan = Math.floor(DL_DIV_COLUMN_COUNT / resumeConnectionsCount);
    const resume = html`
      <div>
        <dt class="md-typescale-title-large">Resume</dt>
        ${Object.entries(Connections.resume).map(
          ([name, data]: [string, ArtifactConnectionData]) => html`
            <dd style="grid-column: span ${resumeConnectionsColSpan}">
              <artifact-connection
                .artifactConnectionType=${name as ArtifactConnectionType}
                .artifactConnectionData=${data}
              >
              </artifact-connection>
            </dd>
          `,
        )}
      </div>
    `;

    return html`
      <dl>
        ${contact}
        ${network}
        ${resume}
      </dl>
    `;
  }

  override render() {
    return html`
      <bento-card
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Connections"}
        .bentoTag=${BENTO_BOX_TYPES.connections}
      >
        <article>
          ${this.contactsDefinitionList()}
        </article>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "connections-card": ConnectionsCard
  }
}