import { MaterialSchemes } from "./material-styles.js";
export const onThemeChange = (event) => {
    MaterialCSSStyleSheet.replaceSync(event.matches ? MaterialSchemes.dark.cssText : MaterialSchemes.light.cssText);
};
export const MaterialCSSStyleSheet = MaterialSchemes.dark.styleSheet;
