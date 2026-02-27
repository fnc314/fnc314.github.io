import { MaterialSchemes } from "./material-styles.js";

export const onThemeChange = (event: MediaQueryListEvent) => {
  MaterialCSSStyleSheet.replaceSync(
    event.matches ? MaterialSchemes.light.cssText : MaterialSchemes.dark.cssText
  );
};

export const MaterialCSSStyleSheet: CSSStyleSheet = MaterialSchemes.dark.styleSheet!;