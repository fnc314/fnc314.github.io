import { type CSSResult } from "lit";
export type MaterialSchemeName = "light" | "lightMediumContrast" | "lightHighContrast" | "dark" | "darkMediumContrast" | "darkHighContrast";
export type MaterialScheme = Record<MaterialSchemeName, CSSResult>;
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
export interface ColorSchemeConfigs {
    name: ColorScheme;
    contrast: ColorSchemeContrast;
    persist: boolean;
    theme: ThemeName;
}
export type ColorSchemeRoles = "background" | "error" | "errorContainer" | "inverseOnSurface" | "inversePrimary" | "inverseSurface" | "onBackground" | "onError" | "onErrorContainer" | "onPrimary" | "onPrimaryContainer" | "onPrimaryFixed" | "onPrimaryFixedVariant" | "onSecondary" | "onSecondaryContainer" | "onSecondaryFixed" | "onSecondaryFixedVariant" | "onSurface" | "onSurfaceVariant" | "onTertiary" | "onTertiaryContainer" | "onTertiaryFixed" | "onTertiaryFixedVariant" | "outline" | "outlineVariant" | "primary" | "primaryContainer" | "primaryFixed" | "primaryFixedDim" | "scrim" | "secondary" | "secondaryContainer" | "secondaryFixed" | "secondaryFixedDim" | "shadow" | "surface" | "surfaceBright" | "surfaceContainer" | "surfaceContainerHigh" | "surfaceContainerHighest" | "surfaceContainerLow" | "surfaceContainerLowest" | "surfaceDim" | "surfaceTint" | "surfaceVariant" | "tertiary" | "tertiaryContainer" | "tertiaryFixed" | "tertiaryFixedDim";
export type ColorSubValue = `${"A" | "B" | "C" | "D" | "E" | "F" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"}`;
export type ColorValue = `${ColorSubValue}${ColorSubValue}`;
export type ColorString = `#${string}`;
type IsHex<T extends string, Count extends any[] = []> = T extends `${ColorSubValue}${infer Rest}` ? IsHex<Rest, [...Count, any]> : T extends "" ? Count["length"] extends 8 ? true : false : false;
export type ValidateRGBA<T extends string> = T extends `#${infer Rest}` ? IsHex<Rest> extends true ? T : "Error: Must be # followed by exactly 8 hex digits" : "Error: Must start with #";
export declare const setRGBA: <T extends string>(color: T & ValidateRGBA<T>) => T & ValidateRGBA<T>;
export type MaterialSchemeNames = "light" | "light-medium-contrast" | "light-high-contrast" | "dark" | "dark-medium-contrast" | "dark-high-contrast";
export type ThemeJsonSchemes = Record<MaterialSchemeNames, Record<ColorSchemeRoles, ColorString>>;
export interface PhotoJson {
    src: string;
    figcaption: string;
    alt: string;
}
export interface ThemeConfig {
    themePhoto: PhotoJson;
    json: ThemeJsonSchemes;
    materialSchemes: MaterialScheme;
}
export declare const THEME_NAMES: {
    readonly chicago: "chicago";
    readonly inter: "inter";
    readonly red: "red";
    readonly sunset: "sunset";
};
export type ThemeName = (typeof THEME_NAMES)[keyof typeof THEME_NAMES];
export type PhotosJson = Record<ThemeName, PhotoJson>;
export type ThemeConfigs = Record<ThemeName, ThemeConfig>;
export { type MaterialSymbol } from "material-symbols";
