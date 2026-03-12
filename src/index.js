import "@material/web/dialog/dialog.js";
import "@material/web/elevation/elevation.js";
import "@material/web/fab/fab.js";
import "@material/web/icon/icon.js";
import "@material/web/tabs/primary-tab.js";
import "@material/web/tabs/tabs.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "./components/app-shell/app-shell.js";
import "./partials/index.js";
import { Routes } from "./partials/nav/routes.js";
import { MaterialSchemes } from "./styles/material-styles.js";
import { MaterialCSSStyleSheet, onThemeChange, updateMaterialCSSStyleSheet } from "./styles/styles.js";

document.adoptedStyleSheets.push(
  typescaleStyles.styleSheet,
  MaterialCSSStyleSheet
);

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

const onColorSchemeChange = (event) => {
  console.log(`ColorSchemeChange ${JSON.stringify(event.detail, null, 2)}`);
  updateMaterialCSSStyleSheet(MaterialSchemes[event.detail.colorScheme]);

  const permanent = Boolean(
    window.localStorage.getItem("permanentColorScheme") ?? "false"
  );

  if (permanent) {
    window.localStorage.setItem("colorSchemeChange", event.detail.colorScheme);
  }
};

document.addEventListener("colorschemechange", onColorSchemeChange);

const onPermanentColorScheme = (event) => {
  window.localStorage.setItem("permanentColorScheme", event.detail.permanent);
  if (!event.detail.permanent) {
    window.localStorage.removeItem("colorSchemeChange");
  }
};

document.addEventListener("permanentcolorscheme", onPermanentColorScheme);

const domLoadedListener = (event) => {
  document.removeEventListener("DOMContentLoaded", domLoadedListener);
  if (window.location.hash === "") {
    window.location.replace(
      `${window.location.href}#${Routes.PROFILE}`
    )
  }

  const darkModeToggle = window.localStorage.getItem("dark-mode-toggle") ?? "light";
  const colorSchemeChange = window.localStorage.getItem("colorSchemeChange");

  const matScheme = MaterialSchemes[
    colorSchemeChange || darkModeToggle
  ];
  updateMaterialCSSStyleSheet(matScheme);
};

document.addEventListener("DOMContentLoaded", domLoadedListener);