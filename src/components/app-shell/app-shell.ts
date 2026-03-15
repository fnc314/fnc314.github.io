import { SettingsDialog } from "@/components/dialogs/settings/settings-dialog";
import Connections from "@/data/connections.json" with { type: "json" };
import { settingsService } from "@/services/settings";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { FAB_STYLE, FabConfig, FabConfigChange } from "@/types/settings/fab-settings";
import "@material/web/button/text-button";
import "@material/web/dialog/dialog";
import { type MdDialog } from "@material/web/dialog/dialog";
import "@material/web/divider/divider";
import "@material/web/fab/fab";
import { MdFab } from "@material/web/fab/fab";
import "@material/web/icon/icon";
import { MdIcon } from "@material/web/icon/icon";
import "@material/web/list/list";
import "@material/web/list/list-item";
import { css, html, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("app-shell")
export class AppShell extends LitElement {

  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        /* This allows the body's grid layout to apply to our slotted children */
        display: contents;
        --md-fab-container-height: 4rem;
        --md-fab-container-width: 4rem;
        --md-fab-large-container-height: 4rem;
        --md-fab-large-container-width: 6rem;
        --md-fab-small-container-height: 3rem;
        --md-fab-small-container-width: 3rem;
        --md-fab-label-text-font: var(--md-ref-typeface-brand);
        --md-fab-label-text-size: 1rem;
        --md-dialog-container-color: var(--md-sys-color-surface-container-high);
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

  private onFabChangeBind = this.onFabChange.bind(this);

  private onFabChange(
    fab: "settings" | "connect",
    fabConfig: FabConfig,
  ) {
    console.error(`${fab} fab settings changed to ${JSON.stringify(fabConfig, null, 1)}`);

    const changedFab: MdFab = fab === "settings" ? this.settingsFab : this.connectFab;
    const otherFabSettings = settingsService.loadSettings().fab[fab === "settings" ? "connect" : "settings"];
    const fabLabel: string = `${fab.charAt(0).toUpperCase()}${fab.slice(1)}`

    const left = fabConfig.position.startsWith("START") ? "1rem" : "unset";
    const right = fabConfig.position.startsWith("END") ? "1rem" : "unset";
    const bottom = fabConfig.position.endsWith("BOTTOM") ? "1rem" :
      otherFabSettings.style !== FAB_STYLE.ICON_ONLY_SMALL ?
        "calc(var(--md-fab-container-height) + 1.5rem)" :
        "calc(var(--md-fab-small-container-height) + 1.5rem)";

    changedFab.style.bottom = bottom;
    changedFab.style.left = left;
    changedFab.style.right = right;
    changedFab.label = fabConfig.style === FAB_STYLE.ICON_AND_TEXT || fabConfig.style === FAB_STYLE.TEXT_ONLY ? fabLabel : "";
    changedFab.size = fabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium";
    (changedFab.querySelector("md-icon") as MdIcon).style.display =
      fabConfig.style === FAB_STYLE.TEXT_ONLY ? "none" : "contents";
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

  private fabSettingsChange = ((event: FabConfigChange) => this.onFabChangeBind("settings", event.detail.newFabConfig)).bind(this);

  private fabChangeConnect = ((event: FabConfigChange) => this.onFabChangeBind( "connect", event.detail.newFabConfig)).bind(this);

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    const appSettings = settingsService.loadSettings();
    this.onFabChangeBind("settings", appSettings.fab.settings);
    this.onFabChangeBind("connect", appSettings.fab.connect);
  }

  protected override connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      "fab.connect.change",
      this.fabChangeConnect
    );
    document.addEventListener(
      "fab.settings.change",
      this.fabSettingsChange
    );
  }

  protected override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      "fab.settings.change",
      this.fabSettingsChange
    );
    document.removeEventListener(
      "fab.connect.change",
      this.fabChangeConnect
    );
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
        @click=${() => this.settingsDialog.showDialog()}
      >
        <md-icon id="settings-fab-icon" slot="icon">settings</md-icon>
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
