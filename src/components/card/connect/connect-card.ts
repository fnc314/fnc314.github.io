import "@/components/card/bento/bento-card";
import { ConnectCardStyles } from "@/components/card/connect/connect-card.styles";
import Connections from "@/data/connections.json" with { type: "json" };
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * @summary ConnectCard - A card component displaying contact/connection links.
 *
 * @element connect-card
 */
@customElement("connect-card")
export class ConnectCard extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [ConnectCardStyles];

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
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Let's Connect"}
      >
        ${
          Connections.connections.map(
            (category) => html`
              <section>
                <header>
                  <h3 class="md-typescale-title-small">${category.label}</h3>
                  <md-divider inset></md-divider>
                </header>
                <ul>
                  ${
                    Object.values(category.connections).map(
                      (conn) => html`
                        <li class="connection-list-item">
                          ${unsafeHTML(conn.start)}
                          <a
                            href=${conn.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="connection-link md-typescale-body-large"
                          >
                            ${unsafeHTML(conn.text)}
                          </a>
                        </li>
                      `
                    )
                  }
                </ul>
              </section>
            `
          )
        }
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "connect-card": ConnectCard;
  }
}
