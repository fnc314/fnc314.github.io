import { MaterialSchemes } from "./material-styles.js";
export const onThemeChange = (event) => {
    MaterialCSSStyleSheet.replaceSync(event.matches ? MaterialSchemes.light.cssText : MaterialSchemes.dark.cssText);
};
export const MaterialCSSStyleSheet = MaterialSchemes.dark.styleSheet;
