import { SettingsDialog } from "@/components/dialogs/settings/settings-dialog";
import Connections from "@/data/connections.json" with { type: "json" };
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { type MdDialog } from "@material/web/dialog/dialog";
import { css, html, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, query, state } from "lit/decorators.js";

// Imports for side-effects to register the components
import { settingsService } from "@/services/settings";
import { AppSettings } from "@/types/settings";
import { FAB_STYLE, FabSettings } from "@/types/settings/fab-settings";
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
        bottom: 1rem;

        &.settings {
          left: 1rem;
        }

        &.connect {
          right: 1rem;
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

  @state()
  private appSettings: AppSettings = settingsService.loadSettings();

  private onFabChangeBind = this.onFabChange.bind(this);

  private onFabChange(
    fab: "settings" | "connect",
    fabSettings: FabSettings,
  ) {
    console.error(`${fab} fab settings changed to ${fabSettings}`);
    const left = fabSettings.position.startsWith("START") ? "1rem" : "unset";
    const right = fabSettings.position.startsWith("END") ? "1rem" : "unset";
    const bottom = fabSettings.position.endsWith("BOTTOM") ? "1rem" : "calc(var(--md-fab-container-height) + 1.5rem)";
    switch (fab) {
      case "settings":
        this.settingsFab.style.bottom = bottom;
        this.settingsFab.style.left = left;
        this.settingsFab.style.right = right;
        this.settingsFab.label = fabSettings.style === FAB_STYLE.ICON_AND_TEXT ? "Settings" : "";
        break;
      case "connect":
        this.connectFab.style.bottom = bottom;
        this.connectFab.style.left = left;
        this.connectFab.style.right = right;
        this.connectFab.label = fabSettings.style === FAB_STYLE.ICON_AND_TEXT ? "Connect" : "";
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
    this.appSettings = settingsService.loadSettings();
    this.onFabChangeBind("settings", this.appSettings.fab.settings);
    this.onFabChangeBind("connect", this.appSettings.fab.connect);
  }

  override render() {
    return html`
      <slot></slot>

      <settings-dialog id="settings-dialog"></settings-dialog>

      <md-fab
        id="fab-settings"
        class="settings"
        size="medium"
        variant="surface"
        aria-label="Settings"
        @click=${() =>
          this.settingsDialog.showDialog().then(() => {
            this.settingsDialog.addEventListener(
              "fab.connect.position.change",
              (event: Event) =>
                this.onFabChangeBind(
                  "connect",
                  { ...this.appSettings.fab.connect, position: (event as CustomEvent).detail.position }
                )
            );
            this.settingsDialog.addEventListener(
              "fab.settings.position.change",
              (event: Event) =>
                this.onFabChangeBind(
                  "settings",
                  { ...this.appSettings.fab.settings, position: (event as CustomEvent).detail.position }
                )
            );
            this.settingsDialog.addEventListener(
              "fab.settings.style.change",
              (event: Event) =>
                this.onFabChangeBind(
                  "settings",
                  { ...this.appSettings.fab.settings, style: (event as CustomEvent).detail.style }
                )
            );
            this.settingsDialog.addEventListener(
              "fab.connect.style.change",
              (event: Event) =>
                this.onFabChangeBind(
                  "connect",
                  { ...this.appSettings.fab.connect, style: (event as CustomEvent).detail.style }
                )
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
        size="medium"
        variant="primary"
        aria-label="Connect"
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
