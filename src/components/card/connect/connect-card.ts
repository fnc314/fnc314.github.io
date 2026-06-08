import "@/components/card/bento/bento-card";
import Connections from "@/data/connections.json" with { type: "json" };
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { connectCardStyles } from "./connect-card.styles";

/**
 * @summary ConnectCard - A card component displaying contact/connection links.
 *
 * @element connect-card
 */
@customElement("connect-card")
export class ConnectCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [connectCardStyles];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override render() {
    return html`
      <bento-card
        class="connect-container"
        aria-labelledby="connect-title"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
      >
        <h2 slot="header" id="connect-title" class="md-typescale-title-large">Let's Connect</h2>
        <dl class="connections-list">
          ${Connections.connections.map(
            (category) => html`
              <dt class="connection-label">
                <h3 class="md-typescale-title-small">
                  ${category.label}
                </h3>
              </dt>
              ${Object.values(category.connections).map(
                (conn) => html`
                  <dd>
                    ${unsafeHTML(conn.start)}
                    <a href=${conn.href} target="_blank" rel="noopener noreferrer" class="connection-link md-typescale-body-medium">
                      ${unsafeHTML(conn.text)}
                    </a>
                  </dd>
                `,
              )}
            `,
          )}
        </dl>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "connect-card": ConnectCard;
  }
}
