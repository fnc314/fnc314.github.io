import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { connectCardStyles } from "./connect-card.styles";
import Connections from "@/data/connections.json" with { type: "json" };
import "@/components/card/bento/bento-card";

/**
 * @summary ConnectCard - A card component displaying contact/connection links.
 *
 * @element connect-card
 */
@customElement("connect-card")
export class ConnectCard extends LitElement {
  static override styles = [connectCardStyles];

  override render() {
    return html`
      <bento-card class="connect-container" aria-labelledby="connect-title" scrollable>
        <h2 id="connect-title" class="md-typescale-title-large">Let's Connect</h2>
        <div class="connections-list">
          ${Connections.connections.map(
            (category) => html`
              <span class="md-typescale-title-small" style="margin-top: var(--spacing-margin-xs); color: var(--md-sys-color-secondary)">
                ${category.label}
              </span>
              ${Object.values(category.connections).map(
                (conn) => html`
                  <a href=${conn.href} target="_blank" rel="noopener noreferrer" class="connection-link md-typescale-body-medium">
                    ${unsafeHTML(conn.text)}
                  </a>
                `,
              )}
            `,
          )}
        </div>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "connect-card": ConnectCard;
  }
}
