import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/text-button.js";
import "@material/web/dialog/dialog.js";
import "@material/web/divider/divider.js";
import "@material/web/elevation/elevation.js";
import "@material/web/fab/fab.js";
import "@material/web/icon/icon.js";
import "@material/web/labs/card/elevated-card.js";
import "@material/web/labs/card/filled-card.js";
import "@material/web/labs/card/outlined-card.js";
import "@material/web/list/list-item.js";
import "@material/web/list/list.js";
import "@material/web/radio/radio.js";
import "@material/web/select/outlined-select.js";
import "@material/web/select/select-option.js";
import "@material/web/tabs/primary-tab.js";
import "@material/web/tabs/tabs.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "material-symbols/outlined.css";
import "material-symbols/sharp.css";
import "./components/app-shell/app-shell";
import "./components/blog/blog-post";
import "./components/code/code-project";
import "./components/dialog/configs/configs-dialog";
import "./components/dialog/connect/connect-dialog";
import "./components/dialog/step-up/step-up-dialog";
import "./components/fab-menu/fab-menu";
import "./components/fab-menu/fab-menu-item";
import "./components/info-section/info-section";
import "./components/nav/nav-component";
import "./components/partial-header/partial-header";
import "./components/word/word-cloud";
import "./components/word/word-tag";
import "./components/work-experience/work-experience";
import "./partials/blog/blog-partial";
import "./partials/code/code-partial";
import "./partials/info/info-partial";
import "./partials/work/work-partial";
import "./services/configs/configs-service";
import { configsService } from "./services/configs/configs-service";
import "./services/router/router-service";
import "./services/storage/storage-service";
import "./services/theme/theme-service";
import { themeService } from "./services/theme/theme-service.js";
import { MaterialCSSStyleSheet, onThemeChange, updateMaterialCSSStyleSheet } from "./styles/styles.js";
import "./types/components/blog/blog-post";
import "./types/components/code/code-project";
import "./types/components/dialog/connect-dialog";
import "./types/components/nav/routes";
import { ROUTES } from "./types/components/nav/routes.js";
import "./types/components/word/word-cloud";
import "./types/components/work-experience/work-experience";
import "./types/configs/app-configs";
import "./types/configs/fab-configs";
import "./types/theme/color-scheme-configs";
import { colorSchemeConfigsToMaterialSchemeName } from "./types/theme/color-scheme-configs";
import "./types/theme/theme";

const domLoadedListener = () => {
  document.removeEventListener("DOMContentLoaded", domLoadedListener);

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onThemeChange);

  if (typescaleStyles.styleSheet) {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }
  document.adoptedStyleSheets.push(MaterialCSSStyleSheet);

  if (window.location.hash === "") {
    window.history.replaceState(null, "", `${window.location.href}#${ROUTES.INFO}`);
  }

  const matScheme =
    themeService.currentThemeConfig().materialSchemes[
      colorSchemeConfigsToMaterialSchemeName(configsService.loadConfigs().colorScheme)
    ];
  updateMaterialCSSStyleSheet(matScheme);

  document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
};

document.addEventListener("DOMContentLoaded", domLoadedListener);
