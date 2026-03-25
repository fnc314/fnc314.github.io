import { ConfigsDialog, FormContent } from "@/components/dialogs/configs/configs-dialog";
import { ConnectDialog } from "@/components/dialogs/connect/connect-dialog";
import { FabMenu } from "@/components/fab-menu/fab-menu";
import { configsService } from "@/services/configs";
import { themeService } from "@/services/theme";
import { MaterialTypescaleStyles } from "@/styles/material-styles";
import { updateMaterialCSSStyleSheet } from "@/styles/styles";
import { AppConfigsChange, type AppConfigs } from "@/types/configs/app-configs";
import { FAB_STYLE, FabConfigChange, fabPositionClass, type FabConfig } from "@/types/configs/fab-configs";
import { ColorSchemeConfigChange, colorSchemeConfigsToMaterialSchemeName, CONFIG_COLOR_SCHEME_NAMES } from "@/types/theme/color-scheme-configs";
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
        --md-fab-icon-size: var(--md-icon-size);
        --md-fab-large-icon-size: calc(1.5 * var(--md-icon-size));
        --md-fab-small-icon-size: calc(0.75 * var(--md-icon-size));

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
        pointer-events: auto;
        cursor: unset;
        z-index: 1;
        position: sticky;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        display: grid;
        padding-inline: 1rem;
        grid-template-rows: min-content;
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
          "StartTop    . EndTop"
          "StartBottom . EndBottom"
          ;
        gap: 1rem;

        md-fab {
          z-index: 2;
        }

        fab-menu,
        md-fab {
          align-self: end;
          grid-area: unset;
          justify-self: unset;
          transition:
            grid-area 0.2s ease-in-out,
            justify-self 0.2s ease-in-out;

          md-icon {
            line-height: unset;
          }

          .fab.extended {
            padding-inline: 1rem;
          }

        }

        .StartTop {
          grid-area: StartTop;
          justify-self: start;
        }

        .StartBottom {
          grid-area: StartBottom;
          justify-self: start;
        }

        .EndTop {
          grid-area: EndTop;
          justify-self: end;
        }

        .EndBottom {
          grid-area: EndBottom;
          justify-self: end;
        }
      }
    `
  ];

  @state()
  private appConfigs: AppConfigs = configsService.loadConfigs();

  @state()
  private _uiModeIcon: "dark_mode" | "light_mode" | "routine" = this.uiModeIcon(this.appConfigs.colorScheme);

  @query("#configs-dialog")
  private configsDialog!: ConfigsDialog;

  @query("#fab-menu")
  private fabMenu!: FabMenu;

  @state()
  private settingsFabConfig: FabConfig = this.appConfigs.fab.settings;

  @query("#connect-dialog")
  private connectDialog!: ConnectDialog;

  @query("#fab-connect")
  private connectFab!: MdFab;

  @state()
  private connectFabConfig: FabConfig = this.appConfigs.fab.connect;

  @state()
  private _openDialogCount = 0;

  private onFabChangeBind = this.onFabChange.bind(this);

  private onFabChange(
    fab: "settings" | "connect",
    fabConfig: FabConfig,
  ) {
    console.info(`FabConfig Change:\n${JSON.stringify({ fab, fabConfig }, null, 1)}`);

    // similar logic means this flag can be helpful
    const isSettings: boolean = fab === "settings";
    // target MdFab/FabMenu
    const changedFab: MdFab | FabMenu = isSettings ? this.fabMenu : this.connectFab;

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

    if (isSettings) {
      (changedFab as FabMenu).icon = fabConfig.style === FAB_STYLE.TEXT_ONLY ? "" : "settings";
    } else {
      const fabIcon = changedFab.querySelector("md-icon") as MdIcon;
      if (fabIcon) {
        fabIcon.style.display = fabConfig.style === FAB_STYLE.TEXT_ONLY ? "none" : "contents";
      }
    }

    changedFab.classList.add(
      fabPositionClass(fabConfig.position)
    );
  }

  private onFabConfigBind = (event: FabConfigChange) =>
    this.onFabChangeBind(event.detail.fab, event.detail.newFabConfig);

  protected override async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    super.firstUpdated(_changedProperties);
    this.appConfigs = configsService.loadConfigs();
    this._uiModeIcon = this.uiModeIcon(this.appConfigs.colorScheme);
    this.connectFabConfig = this.appConfigs.fab.connect;
    this.settingsFabConfig = this.appConfigs.fab.settings;
    this.onFabChangeBind("settings", this.settingsFabConfig);
    this.onFabChangeBind("connect", this.connectFabConfig);
  }

  protected override async update(changedProperties: PropertyValues): Promise<void> {
    super.update(changedProperties);
    await this.updateComplete;
    const label: HTMLSpanElement | null | undefined = this.connectFab.shadowRoot?.querySelector("span.label");
    if (label) {
      label.style.paddingInlineStart = this.connectFabConfig.style === FAB_STYLE.ICON_AND_TEXT ? "0.5rem" : "0";
    }
    const button: HTMLButtonElement | null | undefined = this.connectFab.shadowRoot?.querySelector("button");
    if (button) {
      button.style.paddingInline = "1rem";
    }
  }

  private onColorSchemeChange = (event: ColorSchemeConfigChange) => {
    this._uiModeIcon = this.uiModeIcon(event.detail);
    const themeConfig = themeService.currentThemeConfig();
    updateMaterialCSSStyleSheet(
      themeConfig.materialSchemes[colorSchemeConfigsToMaterialSchemeName(event.detail)]
    );
    document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
  };

  private onAppConfigsChange = (event: Event) => {
    this.appConfigs = (event as AppConfigsChange).detail.appConfigs;
  };

  override connectedCallback() {
    super.connectedCallback();
    configsService.addEventListener(
      "app-configs.change",
      this.onAppConfigsChange
    );

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

  private uiModeIcon(colorScheme: AppConfigs["colorScheme"]): "dark_mode" | "light_mode" | "routine" {
    switch (colorScheme.name) {
      case CONFIG_COLOR_SCHEME_NAMES.DARK:
        return "dark_mode";
      case CONFIG_COLOR_SCHEME_NAMES.LIGHT:
        return "light_mode";
      case CONFIG_COLOR_SCHEME_NAMES.SYSTEM:
        return "routine";
    }
  }

  private _handleDialogOpened() {
    this._openDialogCount++;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  private _handleDialogClosed() {
    this._openDialogCount--;
    if (this._openDialogCount === 0) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }

  private _onFabMenuItemClick(formContent: FormContent) {
    this.fabMenu.open = false;
    this.configsDialog.showDialog(formContent);
  }

  override render() {
    return html`
      <slot name="app-nav"></slot>
      <slot name="app-content"></slot>

      <configs-dialog
        id="configs-dialog"
        @opened=${this._handleDialogOpened}
        @closed=${this._handleDialogClosed}
      ></configs-dialog>

      <connect-dialog
        id="connect-dialog"
        @opened=${this._handleDialogOpened}
        @closed=${this._handleDialogClosed}
      ></connect-dialog>

      <section class="fab-container">

        <fab-menu
          id="fab-menu"
          .size=${this.settingsFabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium"}
          .icon=${"settings"}
          .variant=${"surface"}
          .direction=${this.settingsFabConfig.position.startsWith("START") ? "start" : "end"}
          >
            <fab-menu-item
              slot="menu-items"
              .icon=${"settings"}
              .label=${"Settings Button"}
              @click=${() => this._onFabMenuItemClick("button-settings")}
              >
            </fab-menu-item>
            <fab-menu-item
              slot="menu-items"
              .icon=${"person_add"}
              .label=${"Connect Button"}
              @click=${() => this._onFabMenuItemClick("button-connect")}
              >
            </fab-menu-item>
            <fab-menu-item
              slot="menu-items"
              .icon=${this._uiModeIcon}
              .label=${"UI Mode"}
              @click=${() => this._onFabMenuItemClick("ui-mode")}
              >
            </fab-menu-item>
        </fab-menu>

        <md-fab
          id="fab-connect"
          class="connect"
          .size=${this.connectFabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium"}
          .variant=${"primary"}
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
