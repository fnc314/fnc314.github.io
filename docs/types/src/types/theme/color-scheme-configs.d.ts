import { type MaterialSchemeName } from "@/styles/material-styles";
import { type ThemeName } from "@/types/theme/theme";
import { type TemplateResult } from "lit";
export declare const CONFIG_COLOR_SCHEME_NAMES: {
    readonly DARK: "DARK";
    readonly LIGHT: "LIGHT";
    readonly SYSTEM: "SYSTEM";
};
export declare const CONFIG_COLOR_CONTRAST_NAMES: {
    readonly NORMAL: "NORMAL";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
};
export type ColorScheme = (typeof CONFIG_COLOR_SCHEME_NAMES)[keyof typeof CONFIG_COLOR_SCHEME_NAMES];
export type ColorSchemeContrast = (typeof CONFIG_COLOR_CONTRAST_NAMES)[keyof typeof CONFIG_COLOR_CONTRAST_NAMES];
export declare const colorSchemeContrastToIcon: (slot: "start" | "leading-icon", contrast: ColorSchemeContrast) => TemplateResult;
export interface ColorSchemeConfigs {
    name: ColorScheme;
    contrast: ColorSchemeContrast;
    persist: boolean;
    theme: ThemeName;
}
export declare const colorSchemeConfigsToMaterialSchemeName: (colorSchemeSettings: ColorSchemeConfigs) => MaterialSchemeName;
export type ColorSchemeConfigChange = CustomEvent<ColorSchemeConfigs>;
