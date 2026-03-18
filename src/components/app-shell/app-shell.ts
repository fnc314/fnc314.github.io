import { ConfigsDialog } from "@/components/dialogs/configs/configs-dialog";
import { ConnectDialog } from "@/components/dialogs/connect/connect-dialog";
import { appConfigsSchemeTheme, configsService } from "@/services/configs";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { AppConfigs } from "@/types/configs/app-configs";
import { ColorSchemeConfigChange, colorSchemeConfigsToMaterialSchemeName } from "@/types/configs/color-scheme-configs";
import { FAB_STYLE, FabConfig, FabConfigChange, fabPositionClass } from "@/types/configs/fab-configs";
import "@material/web/button/text-button";
import "@material/web/dialog/dialog";
import "@material/web/divider/divider";
import "@material/web/fab/fab";
import { MdFab } from "@material/web/fab/fab";
import "@material/web/icon/icon";
import { MdIcon } from "@material/web/icon/icon";
import "@material/web/list/list";
import "@material/web/list/list-item";
import { css, html, LitElement, PropertyValues } from "lit";
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
        cursor: unset;
        z-index: 1;
        position: sticky;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        display: grid;
        padding-inline: 1rem;
        grid-template-rows: repeat(2, 4rem);
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
          "StartTop    . EndTop"
          "StartBottom . EndBottom"
          ;
        gap: 1rem;

        md-fab {
          z-index: 2;
          align-self: end;
          grid-area: unset;
          justify-self: unset;
          transition:
            grid-area 0.2s ease-in-out,
            justify-self 0.2s ease-in-out;

          md-icon {
            line-height: unset;
          }

          &.StartTop {
            grid-area: StartTop;
            justify-self: start;
          }

          &.StartBottom {
            grid-area: StartBottom;
            justify-self: start;
          }

          &.EndTop {
            grid-area: EndTop;
            justify-self: end;
          }

          &.EndBottom {
            grid-area: EndBottom;
            justify-self: end;
          }
        }
      }
    `
  ];

  @state()
  private appConfigs: AppConfigs = configsService.loadConfigs();


  @query("#configs-dialog")
  private configsDialog!: ConfigsDialog;

  @query("#fab-settings")
  private settingsFab!: MdFab;

  @state()
  private settingsFabConfig: FabConfig = this.appConfigs.fab.settings;

  @query("#connect-dialog")
  private connectDialog!: ConnectDialog;

  @query("#fab-connect")
  private connectFab!: MdFab;

  @state()
  private connectFabConfig: FabConfig = this.appConfigs.fab.connect;

  private onFabChangeBind = this.onFabChange.bind(this);

  private onFabChange(
    fab: "settings" | "connect",
    fabConfig: FabConfig,
  ) {
    console.info(`FabConfig Change:\n${JSON.stringify({ fab, fabConfig }, null, 1)}`);

    // similar logic means this flag can be helpful
    const isSettings: boolean = fab === "settings";
    // target FAB
    const changedFab: MdFab = isSettings ? this.settingsFab : this.connectFab;

    // remove positioning class
    changedFab.classList.remove(
      fabPositionClass(
        (isSettings ? this.settingsFabConfig : this.connectFabConfig).position
      )
    );

    if (isSettings) {
      this.settingsFabConfig = fabConfig;
    } else {
      this.connectFabConfig = fabConfig;
    }

    const fabLabel: string = `${fab.charAt(0).toUpperCase()}${fab.slice(1)}`
    changedFab.label = fabConfig.style === FAB_STYLE.ICON_AND_TEXT || fabConfig.style === FAB_STYLE.TEXT_ONLY ? fabLabel : "";
    changedFab.ariaLabel = fabLabel;

    changedFab.size = fabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium";
    (changedFab.querySelector("md-icon") as MdIcon).style.display =
      fabConfig.style === FAB_STYLE.TEXT_ONLY ? "none" : "contents";

    changedFab.classList.add(
      fabPositionClass(fabConfig.position)
    );
  }

  private onFabConfigBind = ((event: FabConfigChange) =>
    this.onFabChangeBind(event.detail.fab, event.detail.newFabConfig)).bind(this);

  protected override async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    super.firstUpdated(_changedProperties);
    this.appConfigs = configsService.loadConfigs();
    this.connectFabConfig = this.appConfigs.fab.connect;
    this.settingsFabConfig = this.appConfigs.fab.settings;
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
      appConfigsSchemeTheme().materialSchemes[colorSchemeConfigsToMaterialSchemeName(event.detail)]
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
      <slot name="app-nav"></slot>
      <slot name="app-content"></slot>

      <configs-dialog id="configs-dialog"></configs-dialog>

      <connect-dialog id="connect-dialog"></connect-dialog>

      <section class="fab-container">

        <md-fab
          id="fab-settings"
          class="settings"
          .size=${this.settingsFabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium"}
          variant="surface"
          aria-label="Settings"
          @click=${() => this.configsDialog.showDialog()}
          >
          <md-icon slot="icon">settings</md-icon>
        </md-fab>

        <md-fab
          id="fab-connect"
          class="connect"
          .size=${this.connectFabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium"}
          variant="primary"
          aria-label="Connect"
          @click=${() => this.connectDialog.showDialog()}
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
