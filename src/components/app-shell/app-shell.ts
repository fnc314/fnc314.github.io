import { ConfigsDialog, FormContent } from "@/components/dialogs/configs/configs-dialog";
import { ConnectDialog } from "@/components/dialogs/connect/connect-dialog";
import { FabMenu } from "@/components/fab-menu/fab-menu";
import "@/components/fab-menu/fab-menu-item";
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
import "@material/web/icon/icon.js";
import { MdIcon } from "@material/web/icon/icon.js";
import "@material/web/list/list";
import "@material/web/list/list-item";
import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, query, state } from "lit/decorators.js";

@customElement("app-shell")
export class AppShell extends LitElement {
  /**
   * The core layout component for the application.
   * Handles theme switching, FAB configurations, and navigation slotting.
   * Uses Material Design 3 tokens and components.
   */

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

  /** The current global application configuration state. */
  @state()
  private appConfigs: AppConfigs = configsService.loadConfigs();

  /** The icon associated with the current color scheme mode. */
  @state()
  private _uiModeIcon: "dark_mode" | "light_mode" | "routine" = this.uiModeIcon(this.appConfigs.colorScheme);

  /** Reference to the configuration dialog. */
  @query("#configs-dialog")
  private configsDialog!: ConfigsDialog;

  /** Reference to the FAB menu component. */
  @query("#fab-menu")
  private fabMenu!: FabMenu;

  /** The configuration for the settings FAB. */
  @state()
  private settingsFabConfig: FabConfig = this.appConfigs.fab.settings;

  /** Reference to the connect dialog. */
  @query("#connect-dialog")
  private connectDialog!: ConnectDialog;

  /**
   * Reference to the connect FAB.
   * This is an MdFab component.
   * @query("#fab-connect")
   */
  @query("#fab-connect")
  private connectFab!: MdFab;

  @state()
  private connectFabConfig: FabConfig = this.appConfigs.fab.connect;

  @state()
  private _openDialogCount = 0;

  private onFabChangeBind = this.onFabChange.bind(this);

  /**
   * Updates the state and DOM representation of a FAB when its configuration changes.
   *
   * @param fab - Which FAB is being updated ('settings' or 'connect').
   * @param fabConfig - The new configuration settings for the FAB.
   */
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

    if (fab === "settings") {
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

  /**
   * Lifecycle method called after the first update.
   * Initializes state from the configuration service and applies initial FAB positions.
   *
   * @param _changedProperties - Map of changed properties.
   */
  protected override async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
    super.firstUpdated(_changedProperties);
    this.appConfigs = configsService.loadConfigs();
    this._uiModeIcon = this.uiModeIcon(this.appConfigs.colorScheme);
    this.connectFabConfig = this.appConfigs.fab.connect;
    this.settingsFabConfig = this.appConfigs.fab.settings;
    this.onFabChangeBind("settings", this.settingsFabConfig);
    this.onFabChangeBind("connect", this.connectFabConfig);
  }

  /**
   * Lifecycle method called after every update.
   * Performs manual Shadow DOM adjustments for specific Material Web component styles
   * that cannot be easily reached via CSS Custom Properties.
   *
   * @param changedProperties - Map of changed properties.
   */
  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    const label: HTMLSpanElement | null | undefined = this.connectFab.shadowRoot?.querySelector("span.label");
    if (label) {
      label.style.paddingInlineStart = this.connectFabConfig.style === FAB_STYLE.ICON_AND_TEXT ? "0.5rem" : "0";
    }
    const button: HTMLButtonElement | null | undefined = this.connectFab.shadowRoot?.querySelector("button");
    if (button) {
      button.style.paddingInline = "1rem";
    }
  }

  /**
   * Event handler for color scheme changes.
   * Updates the UI icon, Material theme variables, and meta theme color.
   * @param event - The color scheme configuration change event.
   */
  private onColorSchemeChange = (event: ColorSchemeConfigChange) => {
    this._uiModeIcon = this.uiModeIcon(event.detail);
    const themeConfig = themeService.currentThemeConfig();
    updateMaterialCSSStyleSheet(
      themeConfig.materialSchemes[colorSchemeConfigsToMaterialSchemeName(event.detail)]
    );
    document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
  };

  /**
   * Syncs the component state with the global application configuration.
   * @param event - AppConfigsChange event.
   */
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

  /**
   * Maps a color scheme name to a Material icon name.
   * @param colorScheme - The current color scheme configuration.
   * @returns The string identifier for the MdIcon.
   */
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

  /** Tracks open dialogs to manage body scroll locking. */
  private _handleDialogOpened() {
    this._openDialogCount++;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  /** Tracks closed dialogs to manage body scroll restoration. */
  private _handleDialogClosed() {
    this._openDialogCount--;
    if (this._openDialogCount === 0) {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }

  /**
   * Handles clicks on FAB menu items.
   * Closes the menu and opens the configuration dialog with the requested content.
   * @param formContent - The type of configuration form to display.
   */
  private _onFabMenuItemClick(formContent: FormContent) {
    this.fabMenu.open = false;
    this.configsDialog.showDialog(formContent);
  }

  /**
   * Generates the label string for a FAB based on its configuration style.
   *
   * @param fab - The FAB identifier.
   * @param config - The FAB configuration.
   * @returns The label string or an empty string if the style is icon-only.
   */
  private _getFabLabel(fab: string, config: FabConfig) {
    const showLabel = config.style === FAB_STYLE.ICON_AND_TEXT || config.style === FAB_STYLE.TEXT_ONLY;
    return showLabel ? `${fab.charAt(0).toUpperCase()}${fab.slice(1)}` : "";
  }

  /**
   * Renders the application shell.
   * Includes navigation and content slots, global dialogs, and floating action buttons.
   */
  override render() {
    const settingsLabel = this._getFabLabel("settings", this.settingsFabConfig);
    const connectLabel = this._getFabLabel("connect", this.connectFabConfig);

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
          class=${fabPositionClass(this.settingsFabConfig.position)}
          .size=${this.settingsFabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium"}
          .icon=${this.settingsFabConfig.style === FAB_STYLE.TEXT_ONLY ? "" : "settings"}
          .variant=${"surface"}
          .label=${settingsLabel}
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
          class="connect ${fabPositionClass(this.connectFabConfig.position)}"
          .size=${this.connectFabConfig.style === FAB_STYLE.ICON_ONLY_SMALL ? "small" : "medium"}
          .variant=${"primary"}
          .label=${connectLabel}
          aria-label=${this._getFabLabel("connect", { ...this.connectFabConfig, style: FAB_STYLE.TEXT_ONLY })}
          @click=${() => this.connectDialog.showDialog()}
          >
          <md-icon slot="icon" style=${this.connectFabConfig.style === FAB_STYLE.TEXT_ONLY ? "display: none" : "display: contents"}>person_add</md-icon>
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
