import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/text-button.js";
import "@material/web/dialog/dialog.js";
import "@material/web/divider/divider.js";
import "@material/web/elevation/elevation.js";
import "@material/web/fab/fab.js";
import "@material/web/icon/icon.js";
import "@material/web/list/list-item.js";
import "@material/web/list/list.js";
import "@material/web/radio/radio.js";
import "@material/web/select/outlined-select.js";
import "@material/web/select/select-option.js";
import "@material/web/tabs/primary-tab.js";
import "@material/web/tabs/tabs.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "material-symbols/index.css";
import "./components/index.js";
import "./partials/index.js";
import { configsService } from "./services/configs/configs-service.js";
import "./services/index.js";
import { themeService } from "./services/theme/theme-service.js";
import { MaterialCSSStyleSheet, onThemeChange, updateMaterialCSSStyleSheet } from "./styles/styles.js";
import { Routes } from "./types/components/nav/routes.js";
import "./types/index.js";
import { colorSchemeConfigsToMaterialSchemeName } from "./types/index.js";

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onThemeChange);

const domLoadedListener = () => {
  document.removeEventListener("DOMContentLoaded", domLoadedListener);

  if (typescaleStyles.styleSheet) {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }
  document.adoptedStyleSheets.push(MaterialCSSStyleSheet);

  if (window.location.hash === "") {
    window.history.replaceState(null, "", `${window.location.href}#${Routes.PROFILE}`);
  }

  const matScheme =
    themeService.currentThemeConfig().materialSchemes[
      colorSchemeConfigsToMaterialSchemeName(configsService.loadConfigs().colorScheme)
    ];
  updateMaterialCSSStyleSheet(matScheme);

  document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
};

document.addEventListener("DOMContentLoaded", domLoadedListener);
