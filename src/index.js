import "@material/web/elevation/elevation.js";
import "@material/web/icon/icon.js";
import "@material/web/tabs/primary-tab.js";
import "@material/web/tabs/tabs.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "./partials/index.js";
import { Routes } from "./partials/nav/routes.js";
import { MaterialCSSStyleSheet, onThemeChange } from "./styles/styles.js";

document.adoptedStyleSheets.push(
  ...[MaterialCSSStyleSheet, typescaleStyles.styleSheet]
);

window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", onThemeChange);

onThemeChange(
  new MediaQueryListEvent(
    "change",
    {
      matches: window.matchMedia("(prefers-color-scheme: light)").matches
    }
  )
);

const domLoadedListener = (event) => {
  document.removeEventListener("DOMContentLoaded", domLoadedListener);
  if (window.location.hash === "") {
    window.location.replace(
      `${window.location.href}#${Routes.PROFILE}`
    )
  }
};

document.addEventListener("DOMContentLoaded", domLoadedListener);