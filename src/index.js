import "@material/web/all.js";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "./partials/index.js";
import { MaterialCSSStyleSheet, onThemeChange } from "./styles/styles.js";

window
  .matchMedia("(prefers-color-scheme: light)")
  .addEventListener("change", onThemeChange);

document.adoptedStyleSheets.push(...[MaterialCSSStyleSheet, typescaleStyles.styleSheet]);