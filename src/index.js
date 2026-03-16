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
import "./components/index.js";
import "./partials/index.js";
import { Routes } from "./partials/nav/routes.js";
import "./services/index.js";
import { configsService } from "./services/index.js";
import { MaterialSchemes } from "./styles/material-styles.js";
import { MaterialCSSStyleSheet, onThemeChange, updateMaterialCSSStyleSheet } from "./styles/styles.js";
import "./types/index.js";
import { colorSchemeSettingsToMaterialSchemeName } from "./types/index.js";

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", onThemeChange);

onThemeChange(
  new MediaQueryListEvent(
    "change",
    {
    matches: window.matchMedia("(prefers-color-scheme: dark)").matches,
      media: "(prefers-color-scheme: dark)"
    }
  )
);

const domLoadedListener = (event) => {
  document.removeEventListener("DOMContentLoaded", domLoadedListener);

  document.adoptedStyleSheets.push(
    typescaleStyles.styleSheet,
    MaterialCSSStyleSheet,
  );

  if (window.location.hash === "") {
    window.location.replace(
      `${window.location.href}#${Routes.PROFILE}`
    )
  }

  const matScheme = MaterialSchemes[
    colorSchemeSettingsToMaterialSchemeName(
      configsService.loadSettings().colorScheme
    )
  ];
  updateMaterialCSSStyleSheet(matScheme);
};

document.addEventListener("DOMContentLoaded", domLoadedListener);
