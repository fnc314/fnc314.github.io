import Connections from "@/data/connections.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { MdDialog } from "@material/web/dialog/dialog";
import { css, html, LitElement, TemplateResult } from "lit-element";
import { customElement, query } from "lit/decorators.js";

@customElement("connect-dialog")
export class ConnectDialog extends LitElement {
  static override styles= [
    MaterialTypescaleStyles,
    css`
      :host {
        --md-dialog-icon-size: 3rem;

        --md-list-container-color: var(--md-sys-color-surface-container-high);

        --md-list-item-label-text-size: var(--md-sys-typescale-body-large-size);
      }

      md-dialog {
        min-width: calc(100dvw - 10rem);
        max-width: calc(100dvw - 2rem);
        max-height: calc(100dvh - 10rem);
      }

      .connect-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 1rem;

        details {
          summary {
            list-style-type: none;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;


            h3 {
              display: inline-block;
              font-family: var(--md-ref-typeface-brand);
            }

            md-icon {
              transition: transform 0.2s ease-in-out;
              transform: rotate(-90deg);
            }

            &:focus, &:focus-within, &:hover {
              h3 {
                text-decoration: underline;
              }
            }
          }

          &::details-content {
            opacity: 0;
            transition:
              opacity 0.4s,
              content-visibility 0.4s allow-discrete;
          }

          &[open] {

            &::details-content {
              opacity: 1;
            }

            md-icon {
              transform: rotate(0deg);
            }
          }
        }
      }

    `,
  ]

  @query("#connect-dialog")
  private _mdDialog!: MdDialog;

  showDialog(): Promise<void> {
    return this._mdDialog.show();
  }

  #rederConnections(connection: typeof Connections.connections[number]): TemplateResult {
    return html`
      <md-list>
        <md-divider></md-divider>
        ${
          Object.values(connection.connections).map((conn) => html`
            <md-list-item
              type="link"
              href=${conn.href}
              target="_blank"
              >
                <div slot="start" .innerHTML=${conn.icon}></div>
                <div slot="overline">${conn.method.charAt(0).toUpperCase() + conn.method.slice(1)}</div>
                ${conn.text}
            </md-list-item>
            <md-divider></md-divider>
          `)
        }
      </md-list>
    `;
  }

  override render() {
    return html`
      <md-dialog id="connect-dialog">
        <md-icon slot="icon">contact_page</md-icon>
        <div slot="headline">
          <h2 class="md-typescale-headline-medium">Let's Connect</h2>
        </div>
        <div slot="content" class="connect-content">
          ${
            Connections.connections.map((connection) => html`
            <details open>
              <summary>
                <h3 class="md-typescale-title-medium">
                  ${connection.label}
                </h3>
                <md-icon>expand_circle_down</md-icon>
              </summary>
              ${this.#rederConnections(connection)}
            </details>
            `)
          }
        </div>
        <div slot="actions">
          <md-text-button @click=${() => this._mdDialog.close()}>Close</md-text-button>
        </div>
      </md-dialog>
    `;
  }
}