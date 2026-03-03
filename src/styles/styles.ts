import { css, CSSResult } from "lit";
import { MaterialSchemes } from "./material-styles";

export const onThemeChange = (event: MediaQueryListEvent) => {
  MaterialCSSStyleSheet.replaceSync(
    event.matches ? MaterialSchemes.light.cssText : MaterialSchemes.dark.cssText
  );
};

export const MaterialCSSStyleSheet: CSSStyleSheet = MaterialSchemes.dark.styleSheet!;

export const Breakpoints: CSSResult = css`
  :host {
    --breakpoint-compact-width-max: 600px;
    --breakpoint-medium-width-max: 900px;
    --breakpoint-large-width-max: 1200px;
    --breakpoint-expanded-width-max: 1800px;
  }
`;