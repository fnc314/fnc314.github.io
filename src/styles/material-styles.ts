import { CSSResult } from "lit-element";

export { styles as MaterialTypescaleStyles } from "@material/web/typography/md-typescale-styles.js";

export type MaterialSchemeName =
  | "light"
  | "lightMediumContrast"
  | "lightHighContrast"
  | "dark"
  | "darkMediumContrast"
  | "darkHighContrast";
export type MaterialTheme = Record<MaterialSchemeName, CSSStyleSheet>;
export type MaterialScheme = Record<MaterialSchemeName, CSSResult>;

