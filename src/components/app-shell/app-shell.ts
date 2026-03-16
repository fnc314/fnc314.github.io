import { ConfigsDialog } from "@/components/dialogs/configs/configs-dialog";
import Connections from "@/data/connections.json" with { type: "json" };
import { configsService } from "@/services/configs";
import { MaterialSchemes, MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { ColorSchemeConfigChange, colorSchemeSettingsToMaterialSchemeName } from "@/types/settings/color-scheme-settings";
import { FAB_STYLE, FabConfig, FabConfigChange, fabConfigToGrid } from "@/types/settings/fab-settings";
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
import { customElement, query, state } from "lit/decorators.js";

@customElement("app-shell")
export class AppShell extends LitElement {

  static override styles = [
    MaterialTypescaleStyles,
    css`
      :host {
        /* This allows the body's grid layout to apply to our slotted children */
        display: contents;
        container-type: inline-size;

        --md-fab-container-height: 4rem;
        --md-fab-container-width: 4rem;
        --md-fab-container-shape: var(--md-sys-shape-corner-large);
        --md-fab-large-container-height: 4rem;
        --md-fab-large-container-width: 6rem;
        --md-fab-large-container-shape: var(--md-sys-shape-corner-large);
        --md-fab-small-container-height: 3rem;
        --md-fab-small-container-width: 3rem;
        --md-fab-small-container-shape: var(--md-sys-shape-corner-medium);

        --md-dialog-container-color: var(--md-sys-color-surface-container-high);

        --md-list-container-color: var(--md-sys-color-surface-container-highest);
        --md-list-item-container-shape: var(--md-sys-shape-corner-large);
      }

      md-dialog {
        [slot="headline"] {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }

      .fab-container {
        z-index: 1;
        position: sticky;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        display: grid;
        padding-inline: 1rem;
        grid-template-rows:
          [top-start] var(--md-fab-large-container-height)
          [top-end bottom-start] var(--md-fab-large-container-height)
          [bottom-end]
          ;
        grid-template-columns:
          [start-start] 1fr
          [start-end empt-start] 1fr
          [empty-end end-start] 1fr
          [end-end]
          ;
        gap: 1rem;

        md-fab {
          z-index: 2;
          align-self: end;

          &.settings {

          }

          &.connect {

          }
        }
      }
    `,
  ];

  @query("#configs-dialog")
  private configsDialog!: ConfigsDialog;

  @query("#fab-settings")
  private settingsFab!: MdFab;

  @state()
  private settingsFabConfig: FabConfig = configsService.loadConfigs().fab.settings;

  @query("#connect-dialog")
  private connectDialog!: MdDialog;

  @query("#fab-connect")
  private connectFab!: MdFab;

  @state()
  private connectFabConfig: FabConfig = configsService.loadConfigs().fab.connect;

  private onFabChangeBind = this.onFabChange.bind(this);

  private onFabChange(
    fab: "settings" | "connect",
    fabConfig: FabConfig,
  ) {
    console.error(`FabConfig Change:\n${JSON.stringify({ fab, fabConfig }, null, 1)}`);

    // similar logic means this flag can be helpful
    const isSettings: boolean = fab === "settings";
    if (isSettings) {
      this.settingsFabConfig = fabConfig;
    } else {
      this.connectFabConfig = fabConfig;
    }
    // target FAB
    const changedFab: MdFab = isSettings ? this.settingsFab : this.connectFab;

    const fabLabel: string = `${fab.charAt(0).toUpperCase()}${fab.slice(1)}`
    changedFab.label = fabConfig.style === FAB_STYLE.ICON_AND_TEXT || fabConfig.style === FAB_STYLE.TEXT_ONLY ? fabLabel : "";
    changedFab.ariaLabel = fabLabel;

    changedFab.size = fabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium";
    (changedFab.querySelector("md-icon") as MdIcon).style.display =
      fabConfig.style === FAB_STYLE.TEXT_ONLY ? "none" : "contents";

    const { rowStart, rowEnd, columnStart, columnEnd } = fabConfigToGrid(fabConfig);
    changedFab.style.gridColumnStart = `${columnStart}`;
    changedFab.style.gridColumnEnd = `${columnEnd}`;
    changedFab.style.gridRowStart = `${rowStart}`;
    changedFab.style.gridRowEnd = `${rowEnd}`
    if (fabConfig.position === "END_BOTTOM" || fabConfig.position === "END_TOP") {
      changedFab.style.justifySelf = "end";
    } else {
      changedFab.style.justifySelf = "start";
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

  private onFabConfigBind = ((event: FabConfigChange) => this.onFabChangeBind(event.detail.fab, event.detail.newFabConfig)).bind(this);

  protected override async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    super.firstUpdated(_changedProperties);
    const appSettings = configsService.loadConfigs();
    this.connectFabConfig = appSettings.fab.connect;
    this.settingsFabConfig = appSettings.fab.settings;
    this.onFabChangeBind("settings", this.settingsFabConfig);
    this.onFabChangeBind("connect", this.connectFabConfig);
  }

  protected override async update(changedProperties: PropertyValues): Promise<void> {
    super.update(changedProperties);
    await this.updateComplete;
    [
      this.settingsFab, this.connectFab
    ].forEach((fab: MdFab) => {
      const label: HTMLSpanElement | null | undefined = fab.shadowRoot?.querySelector("span.label");
      if (label) {
        label.style.paddingInlineStart = "0.5rem";
      }
    });
  }

  private onColorSchemeChange = ((event: ColorSchemeConfigChange) => {
    updateMaterialCSSStyleSheet(
      MaterialSchemes[colorSchemeSettingsToMaterialSchemeName(event.detail)]
    )
  }).bind(this);

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      "fab.change",
      this.onFabConfigBind
    );

    document.addEventListener(
      "color_scheme.change",
      this.onColorSchemeChange
    );
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      "fab.change",
      this.onFabConfigBind
    );

    document.removeEventListener(
      "color_scheme.change",
      this.onColorSchemeChange
    );
  }

  override render() {
    return html`
      <slot></slot>

      <configs-dialog id="configs-dialog"></configs-dialog>

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

      <section class="fab-container">

        <md-fab
          id="fab-settings"
          class="settings"
          size="medium"
          variant="surface"
          aria-label="Settings"
          @click=${() => this.configsDialog.showDialog()}
          >
          <md-icon id="configs-fab-icon" slot="icon">settings</md-icon>
        </md-fab>

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

      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-shell": AppShell;
  }
}
