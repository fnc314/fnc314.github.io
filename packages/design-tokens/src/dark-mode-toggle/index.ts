import { unsafeCSS } from "lit";
import { readCSSProperty } from "../read-css-property";

export const DarkModeToggleSvgs = {
  mode: {
    default: {
      empty: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-default-empty-icon-svg")
      ),
      filled: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-default-filled-icon-svg")
      ),
    },
    light: {
      empty: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-light-empty-icon-svg")
      ),
      filled: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-light-filled-icon-svg")
      ),
    },
    dark: {
      empty: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-dark-empty-icon-svg")
      ),
      filled: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-dark-filled-icon-svg")
      ),
    },
  },
  checkbox: {
    dark: unsafeCSS(
      readCSSProperty("--icons-components-ui-mode-toggle-check-box-dark-icon-svg")
    ),
    light: unsafeCSS(
      readCSSProperty("--icons-components-ui-mode-toggle-check-box-light-icon-svg")
    ),
  },
  remember: {
    checked: {
      dark: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-remember-checked-dark-icon-svg")
      ),
      light: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-remember-checked-light-icon-svg")
      ),
    },
    unchecked: {
      dark: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-remember-unchecked-dark-icon-svg")
      ),
      light: unsafeCSS(
        readCSSProperty("--icons-components-ui-mode-toggle-remember-unchecked-light-icon-svg")
      ),
    },
  }
};