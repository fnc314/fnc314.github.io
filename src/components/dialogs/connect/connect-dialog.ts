import Connections from "@/data/connections.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { MdDialog } from "@material/web/dialog/dialog";
import { css, html, LitElement, TemplateResult } from "lit-element";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { customElement, query } from "lit/decorators.js";

@customElement("connect-dialog")
export class ConnectDialog extends LitElement {
  static override styles= [
    MaterialTypescaleStyles,
    css`
      :host {
        --md-dialog-icon-size: 3rem;
        --md-dialog-icon-color: var(--md-sys-color-primary);
        --md-dialog-icon-font: var(--md-ref-typeface-brand);
        --md-dialog-container-color: var(--md-sys-color-surface-container-highest);
        --md-dialog-container-shape: var(--md-sys-shape-corner-medium);
        --md-dialog-headline-color: var(--md-sys-color-primary);

        --md-text-button-container-shape: var(--md-sys-shape-corner-small);
        --md-text-button-label-text-color: var(--md-sys-color-on-surface-variant);

        --md-list-container-color: var(--md-sys-color-surface-container-highest);

        --md-list-item-label-text-size: var(--md-sys-typescale-body-large-size);
        --md-list-item-label-text-font: var(--md-ref-typeface-brand);
        --md-list-item-label-text-weight: 700;

        --md-list-item-supporting-text-color: var(--md-sys-color-primary);

        --md-list-item-hover-label-text-color: var(--md-sys-color-on-surface-variant);
        --md-list-item-hover-state-layer-color: var(--md-sys-color-primary);
        --md-list-item-hover-state-layer-opacity: 0.12;
        --md-list-item-pressed-state-layer-color: var(--md-sys-color-primary);
        --md-list-item-pressed-state-layer-opacity: 0.12;

        --md-list-item-leading-icon-size: 2rem;
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
            cursor: pointer;
            list-style-type: none;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: var(--md-sys-color-primary);
            padding-inline: 0.25rem;
            border-radius: var(--md-sys-shape-corner-small);

            h3 {
              display: inline-block;
              font-family: var(--md-ref-typeface-brand);
            }

            md-icon {
              transition: transform 0.2s ease-in-out;
              transform: rotate(-90deg);
            }

            &:focus, &:focus-within, &:hover {
              background-color: color(
                from var(--md-sys-color-primary) srgb r g b / .12
              );
              transition: background-color 0.1s ease-in-out;

              h3 {
                text-decoration: underline;
                transition: text-decoration 0.2s ease-in-out;
              }
            }
          }

          &::details-content {
            opacity: 0;
            transition:
              opacity 0.2s ease-in-out,
              content-visibility 0.2s ease-in-out allow-discrete;
          }

          &[open] {

            &::details-content {
              opacity: 1;
            }

            md-icon {
              transform: rotate(0deg);
            }
          }

          md-list {
            --md-icon-size: var(--md-list-item-leading-image-width);
            padding-block: unset;

            md-list-item {
              [slot="start"] {
                color: var(--md-sys-color-error);
              }
              [slot="overline"] {
                color: var(--md-sys-color-primary);
              }
              [slot="headline"] {
                font-family: var(--md-ref-typeface-brand);
              }

              &:hover, &:focus, &:focus-within {
                border-radius: var(--md-sys-shape-corner-small);
              }
            }

            img {
              width: var(--md-list-item-leading-image-width);
              height: var(--md-list-item-leading-image-height);
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
                ${unsafeHTML(conn.html.start)}
                ${unsafeHTML(conn.html.overline)}
                ${unsafeHTML(conn.html.text)}
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
            Connections.connections.map((connection, index) => html`
              <details .open=${index === 0} .name=${"connection"}>
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