import { SettingsDialog } from "@/components/dialogs/settings/settings-dialog";
import Connections from "@/data/connections.json" with { type: "json" };
import { settingsService } from "@/services/settings";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { FAB_STYLE, FabSettings } from "@/types/settings/fab-settings";
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
        --md-fab-small-container-height: 3rem;
        --md-fab-small-container-width: 3rem;
        --md-fab-label-text-font: var(--md-ref-typeface-brand);
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
    fabSettings: FabSettings,
  ) {
    console.error(`${fab} fab settings changed to ${JSON.stringify(fabSettings, null, 1)}`);
    const left = fabSettings.position.startsWith("START") ? "1rem" : "unset";
    const right = fabSettings.position.startsWith("END") ? "1rem" : "unset";
    const bottom = fabSettings.position.endsWith("BOTTOM") ? "1rem" :
      fabSettings.style !== FAB_STYLE.ICON_ONLY_SMALL ?
        "calc(var(--md-fab-container-height) + 1.5rem)" :
        "calc(var(--md-fab-small-container-height) + 1.5rem)";

    const fabElement: MdFab = fab === "settings" ? this.settingsFab : this.connectFab;
    const fabLabel: string = `${fab.charAt(0).toUpperCase()}${fab.slice(1)}`
    fabElement.style.bottom = bottom;
    fabElement.style.left = left;
    fabElement.style.right = right;
    fabElement.label = fabSettings.style === FAB_STYLE.ICON_AND_TEXT || fabSettings.style === FAB_STYLE.TEXT_ONLY ? fabLabel : "";
    fabElement.size = fabSettings.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium";
    (fabElement.querySelector("md-icon") as MdIcon).style.display =
      fabSettings.style === FAB_STYLE.TEXT_ONLY ? "none" : "contents";
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
    this.onFabChangeBind("settings", appSettings.fab.settings);
    this.onFabChangeBind("connect", appSettings.fab.connect);
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
                  { ...settingsService.loadSettings().fab.connect, position: (event as CustomEvent).detail.position }
                )
            );
            this.settingsDialog.addEventListener(
              "fab.settings.position.change",
              (event: Event) =>
                this.onFabChangeBind(
                  "settings",
                  { ...settingsService.loadSettings().fab.settings, position: (event as CustomEvent).detail.position }
                )
            );
            this.settingsDialog.addEventListener(
              "fab.settings.style.change",
              (event: Event) =>
                this.onFabChangeBind(
                  "settings",
                  { ...settingsService.loadSettings().fab.settings, style: (event as CustomEvent).detail.style }
                )
            );
            this.settingsDialog.addEventListener(
              "fab.connect.style.change",
              (event: Event) =>
                this.onFabChangeBind(
                  "connect",
                  { ...settingsService.loadSettings().fab.connect, style: (event as CustomEvent).detail.style }
                )
            );
          })
        }
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
