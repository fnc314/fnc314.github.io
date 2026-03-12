import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { css, html, LitElement } from "lit-element";
import { customElement, property } from "lit/decorators.js";

export type ProfileConnection = {
  method: string;
  manner: "direct" | "website" | "document";
  connection: string | string[];
  icon: string;
};

export const makeProfileConnection: (
  method: string,
  manner: "direct" | "website" | "document",
  connection: string | string[],
  icon: string,
) => ProfileConnection = (method, manner, connection, icon) => ({
  method,
  manner,
  connection,
  icon,
});

@customElement("profile-connections")
export class ProfileConnections extends LitElement {
  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        display: block;
        container: profile-connections-root / size;
      }
    `,
  ];

  @property({ type: Array })
  connections: ProfileConnection[] = [];

  override render() {
    return html`
      <profile-section .sectionTitle=${"Connections"}>
        <ul slot="section-grid-content">
          ${this.connections.map(
            (connection) => html`<li>${connection.icon}</li>`,
          )}
        </ul>
      </profile-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "profile-connections": ProfileConnections;
  }
}
