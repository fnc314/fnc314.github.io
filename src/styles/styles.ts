import { MaterialSchemes } from "./material-styles.js";

export const onThemeChange = (event: MediaQueryListEvent) => {
  MaterialCSSStyleSheet.replaceSync(
    event.matches ? MaterialSchemes.dark.cssText : MaterialSchemes.light.cssText
  );
};

export const MaterialCSSStyleSheet: CSSStyleSheet = MaterialSchemes.dark.styleSheet!;