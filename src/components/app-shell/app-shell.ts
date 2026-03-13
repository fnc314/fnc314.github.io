import { SettingsDialog } from "@/components/dialogs/settings/settings-dialog";
import Connections from "@/data/connections.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type MdDialog } from "@material/web/dialog/dialog";
import { LitElement, PropertyValues, TemplateResult, css, html, nothing } from "lit";
import { customElement, query } from "lit/decorators.js";

// Imports for side-effects to register the components
import { settingsService } from "@/services";
import { FabPosition } from "@/types/settings/fab-settings";
import "@material/web/button/text-button";
import "@material/web/dialog/dialog";
import "@material/web/divider/divider";
import "@material/web/fab/fab";
import { MdFab } from "@material/web/fab/fab";
import "@material/web/icon/icon";
import "@material/web/list/list";
import "@material/web/list/list-item";

@customElement("app-shell")
export class AppShell extends LitElement {

  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        /* This allows the body's grid layout to apply to our slotted children */
        display: contents;
        --md-fab-container-height: 4rem;
        --md-fab-label-text-font: var(--md-ref-typeface-brand);
        --md-dialog-container-color: var(--md-sys-color-surface-container-highest);
        --md-list-container-color: var(--md-sys-color-surface-container-highest);
        --md-list-item-container-shape: var(--md-sys-shape-corner-large);
      }

      md-fab {
        position: fixed;
        z-index: 1; /* Ensure it floats above other content */
        bottom: 0.5rem;

        &.settings {
          left: 0.5rem;
        }

        &.connect {
          right: 0.5rem;
        }
      }

      md-dialog {
        [slot="headline"] {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }
    `,
  ];

  @query("#settings-dialog")
  private settingsDialog!: SettingsDialog;

  @query("#fab-settings")
  private settingsFab!: MdFab;

  @query("#connect-dialog")
  private connectDialog!: MdDialog;

  @query("#fab-connect")
  private connectFab!: MdFab;

  private connectFabPositionChangeListener: (event: Event) => void =
    (event: Event) => this.onFabPositionChange.bind(this)("connect", (event as CustomEvent).detail.position);

  private settingsFabPositionChangeListener: (event: Event) => void =
    (event: Event) => this.onFabPositionChange.bind(this)("settings", (event as CustomEvent).detail.position);

  private onFabPositionChange(
    fab: "settings" | "connect",
    position: FabPosition
  ) {
    console.error(`${fab} fab position changed to ${position}`);
    const left = position.startsWith("START") ? "0.5rem" : "unset";
    const right = position.startsWith("END") ? "0.5rem" : "unset";
    const bottom = position.endsWith("BOTTOM") ? "0.5rem" : "calc(var(--md-fab-container-height) + 1rem)";
    switch (fab) {
      case "settings":
        this.settingsFab.style.bottom = bottom;
        this.settingsFab.style.left = left;
        this.settingsFab.style.right = right;
        break;
      case "connect":
        this.connectFab.style.bottom = bottom;
        this.connectFab.style.left = left;
        this.connectFab.style.right = right;
        break;
    }
  }

  private renderConnectionsList(): TemplateResult {
    return html`
      ${
        Object.values(Connections.connections).map((connection, index) => html`
          <md-list-item
            type="link"
            .href=${connection.href}
            target="_blank"
            >
            <div slot="overline">${connection.method.charAt(0).toUpperCase() + connection.method.slice(1)}</div>
            ${connection.text}
          </md-list-item>
          ${
            index === Object.values(Connections.connections).length - 1
              ? nothing
              : html`
                <md-divider></md-divider>
              `
          }
        `)
      }
    `;
  }

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    const appSettings = settingsService.loadSettings();
    this.onFabPositionChange("settings", appSettings.fab.settings.position);
    this.onFabPositionChange("connect", appSettings.fab.connect.position);
  }

  override render() {
    return html`
      <slot></slot>

      <settings-dialog id="settings-dialog"></settings-dialog>

      <md-fab
        id="fab-settings"
        class="settings"
        label="Settings"
        size="medium"
        variant="surface"
        aria-label="Site Settings"
        @click=${() =>
          this.settingsDialog.showDialog().then(() => {
            this.settingsDialog.addEventListener(
              "fab.connect.position.change",
              this.connectFabPositionChangeListener
            );
            this.settingsDialog.addEventListener(
              "fab.settings.position.change",
              this.settingsFabPositionChangeListener
            );
          })
        }
      >
        <md-icon slot="icon">settings</md-icon>
      </md-fab>

      <md-dialog id="connect-dialog">
        <div slot="headline">
          <h2 class="md-typescale-headline-large">Connect</h2>
        </div>
        <div slot="content">
          <md-list>
            ${this.renderConnectionsList()}
          </md-list>
        </div>
        <div slot="actions">
          <md-text-button @click=${() => this.connectDialog.close()}>Close</md-text-button>
        </div>
      </md-dialog>

      <md-fab
        id="fab-connect"
        class="connect"
        label="Connect"
        size="small"
        variant="primary"
        @click=${() => this.connectDialog.show()}
        >
        <md-icon slot="icon">person_add</md-icon>
      </md-fab>

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-shell": AppShell;
  }
}
