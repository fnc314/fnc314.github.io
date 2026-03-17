import { MaterialSchemeName } from "@/styles/material-styles";
import { html } from "lit-element";
import { nothing, TemplateResult } from "lit-html";

export const CONFIG_COLOR_SCHEME_NAMES = {
  DARK: "DARK" as const,
  LIGHT: "LIGHT" as const,
  SYSTEM: "SYSTEM" as const,
} as const;

export const CONFIG_COLOR_CONTRAST_NAMES = {
  NORMAL: "NORMAL" as const,
  MEDIUM: "MEDIUM" as const,
  HIGH: "HIGH" as const,
} as const;

export type ColorScheme = typeof CONFIG_COLOR_SCHEME_NAMES[keyof typeof CONFIG_COLOR_SCHEME_NAMES];
export type ColorSchemeContrast = typeof CONFIG_COLOR_CONTRAST_NAMES[keyof typeof CONFIG_COLOR_CONTRAST_NAMES];

export const colorSchemeContrastToIcon: (slot: "start" | "leading-icon", contrast: ColorSchemeContrast) => TemplateResult =
  (slot: "start" | "leading-icon", contrast: ColorSchemeContrast) => {
    switch (contrast) {
      case CONFIG_COLOR_CONTRAST_NAMES.NORMAL:
        return html`<md-icon slot="${slot}">exposure_zero</md-icon>`;
      case CONFIG_COLOR_CONTRAST_NAMES.MEDIUM:
        return html`<md-icon slot="${slot}">exposure_plus_1</md-icon>`;
      case CONFIG_COLOR_CONTRAST_NAMES.HIGH:
        return html`<md-icon slot="${slot}">exposure_plus_2</md-icon>`;
      default:
        return html`${nothing}`;
    }
  }
export type ColorSchemeConfigs = {
  name: ColorScheme;
  contrast: ColorSchemeContrast;
  persist: boolean;
};

export const colorSchemeConfigsToMaterialSchemeName: (colorSchemeSettings: ColorSchemeConfigs) => MaterialSchemeName = (
  colorSchemeSettings: ColorSchemeConfigs
): MaterialSchemeName => {
  const variant = colorSchemeSettings.name !== CONFIG_COLOR_SCHEME_NAMES.SYSTEM ?
    colorSchemeSettings.name.toLowerCase() :
    (window.matchMedia("(prefers-color-scheme: dark)").matches ?
      CONFIG_COLOR_SCHEME_NAMES.DARK :
      CONFIG_COLOR_SCHEME_NAMES.LIGHT
    ).toLowerCase();

  const contrast =
      colorSchemeSettings.contrast === CONFIG_COLOR_CONTRAST_NAMES.NORMAL ?
      "" :
      colorSchemeSettings.contrast.charAt(0) + colorSchemeSettings.contrast.slice(1).toLowerCase() + "Contrast";

  return `${variant}${contrast}` as MaterialSchemeName;
};

export type ColorSchemeConfigChange = CustomEvent<ColorSchemeConfigs>;