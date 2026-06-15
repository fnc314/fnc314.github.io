import { type CSSResult } from "lit";
export type MaterialSchemeName = "light" | "lightMediumContrast" | "lightHighContrast" | "dark" | "darkMediumContrast" | "darkHighContrast";
export type MaterialScheme = Record<MaterialSchemeName, CSSResult>;
