import { css, CSSResult } from "lit";
import { MaterialSchemes } from "./material-styles";

export const onThemeChange = (event: MediaQueryListEvent) => {
  const css = event.matches ? MaterialSchemes.dark : MaterialSchemes.light;
  updateMaterialCSSStyleSheet(css);
  console.log(
    `onThemeChange ${JSON.stringify({matches: event.matches, media: event.media, css}, null, 2)}`,
  );
};

export const updateMaterialCSSStyleSheet = (result: CSSResult) => {
  MaterialCSSStyleSheet.replaceSync(result.cssText);
};

export const MaterialCSSStyleSheet: CSSStyleSheet = MaterialSchemes.light.styleSheet!;

export const Breakpoints: CSSResult = css`
  :host {
    --breakpoint-compact-width-max: 600px;
    --breakpoint-medium-width-max: 900px;
    --breakpoint-large-width-max: 1200px;
    --breakpoint-expanded-width-max: 1800px;
  }
`;
