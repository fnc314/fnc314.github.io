import { type MaterialScheme } from "@/styles/material-styles";
import { type CSSResult } from "lit";
export type ColorSchemeRoles = "background" | "error" | "errorContainer" | "inverseOnSurface" | "inversePrimary" | "inverseSurface" | "onBackground" | "onError" | "onErrorContainer" | "onPrimary" | "onPrimaryContainer" | "onPrimaryFixed" | "onPrimaryFixedVariant" | "onSecondary" | "onSecondaryContainer" | "onSecondaryFixed" | "onSecondaryFixedVariant" | "onSurface" | "onSurfaceVariant" | "onTertiary" | "onTertiaryContainer" | "onTertiaryFixed" | "onTertiaryFixedVariant" | "outline" | "outlineVariant" | "primary" | "primaryContainer" | "primaryFixed" | "primaryFixedDim" | "scrim" | "secondary" | "secondaryContainer" | "secondaryFixed" | "secondaryFixedDim" | "shadow" | "surface" | "surfaceBright" | "surfaceContainer" | "surfaceContainerHigh" | "surfaceContainerHighest" | "surfaceContainerLow" | "surfaceContainerLowest" | "surfaceDim" | "surfaceTint" | "surfaceVariant" | "tertiary" | "tertiaryContainer" | "tertiaryFixed" | "tertiaryFixedDim";
export type ColorSubValue = `${"A" | "B" | "C" | "D" | "E" | "F" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"}`;
export type ColorValue = `${ColorSubValue}${ColorSubValue}`;
export type ColorString = `#${string}`;
export type MaterialSchemeNames = "light" | "light-medium-contrast" | "light-high-contrast" | "dark" | "dark-medium-contrast" | "dark-high-contrast";
export type ThemeJsonSchemes = Record<MaterialSchemeNames, Record<ColorSchemeRoles, ColorString>>;
export declare function jsonIsThemeJsonSchemes(json: unknown): json is ThemeJsonSchemes;
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
export declare const PhotoJsonFile: PhotosJson;
export declare const readScheme: (jsonSchema: object) => CSSResult;
export declare function keyTransform(jsonKey: string, rgb: string): CSSResult;
