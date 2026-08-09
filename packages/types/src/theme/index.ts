import { type BreakpointLabel } from "@/lib/design-tokens";
import { type CSSResult } from "lit";

/** A convenient construct of `const` definitions used for managing theme and general UI style */
export const ThemeNames = {
  Themes: {
    Chicago: "chicago" as const,
    Downtown: "downtown" as const,
    Inter: "inter" as const,
    LeatherJacket: "leatherJacket" as const,
    Ponder: "ponder" as const,
    Red: "red" as const,
    RomanBus: "romanBus" as const,
    Skyline: "skyline" as const,
    Sunset: "sunset" as const,
  } as const,
  Scheme: {
    Dark: "dark" as const,
    Light: "light" as const,
    System: "system" as const,
  } as const,
  Contrast: {
    Normal: "normal" as const,
    Medium: "medium" as const,
    High: "high" as const,
  } as const,
  MaterialScheme: {
    Light: "light" as const,
    LightMediumContrast: "lightMediumContrast" as const,
    LightHighContrast: "lightHighContrast" as const,
    Dark: "dark" as const,
    DarkMediumContrast: "darkMediumContrast" as const,
    DarkHighContrast: "darkHighContrast" as const,
  } as const,
} as const;

export type MaterialSchemeName = (typeof ThemeNames.MaterialScheme)[keyof typeof ThemeNames.MaterialScheme];

export type MaterialScheme = Record<MaterialSchemeName, CSSResult>;

export type ColorScheme = (typeof ThemeNames.Scheme)[keyof typeof ThemeNames.Scheme];
export type ColorSchemeContrast = (typeof ThemeNames.Contrast)[keyof typeof ThemeNames.Contrast];

export interface ColorSchemeConfig {
  name: ColorScheme;
  contrast: ColorSchemeContrast;
  persist: boolean;
  theme: ThemeName;
}

export type ColorSchemeRoles =
  | "background"
  | "error"
  | "errorContainer"
  | "inverseOnSurface"
  | "inversePrimary"
  | "inverseSurface"
  | "onBackground"
  | "onError"
  | "onErrorContainer"
  | "onPrimary"
  | "onPrimaryContainer"
  | "onPrimaryFixed"
  | "onPrimaryFixedVariant"
  | "onSecondary"
  | "onSecondaryContainer"
  | "onSecondaryFixed"
  | "onSecondaryFixedVariant"
  | "onSurface"
  | "onSurfaceVariant"
  | "onTertiary"
  | "onTertiaryContainer"
  | "onTertiaryFixed"
  | "onTertiaryFixedVariant"
  | "outline"
  | "outlineVariant"
  | "primary"
  | "primaryContainer"
  | "primaryFixed"
  | "primaryFixedDim"
  | "scrim"
  | "secondary"
  | "secondaryContainer"
  | "secondaryFixed"
  | "secondaryFixedDim"
  | "shadow"
  | "surface"
  | "surfaceBright"
  | "surfaceContainer"
  | "surfaceContainerHigh"
  | "surfaceContainerHighest"
  | "surfaceContainerLow"
  | "surfaceContainerLowest"
  | "surfaceDim"
  | "surfaceTint"
  | "surfaceVariant"
  | "tertiary"
  | "tertiaryContainer"
  | "tertiaryFixed"
  | "tertiaryFixedDim";

export type ColorSubValue =
  `${"A" | "B" | "C" | "D" | "E" | "F" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"}`;

export type ColorValue = `${ColorSubValue}${ColorSubValue}`;

export type ColorString = `#${string}`;

// Recursive helper to check if a string consists only of N hex digits
export type IsHex<T extends string, Count extends any[] = []> =
  T extends `${ColorSubValue}${infer Rest}` ? IsHex<Rest, [...Count, any]>
  : T extends "" ?
    Count["length"] extends 8 ?
      true
    : false
  : false;

// The final validator constraint
export type ValidateRGBA<T extends string> =
  T extends `#${infer Rest}` ?
    IsHex<Rest> extends true ?
      T
    : "Error: Must be # followed by exactly 8 hex digits"
  : "Error: Must start with #";

// Helper function to enforce the type
export const setRGBA = <T extends string>(color: T & ValidateRGBA<T>) => color;

export type ThemeJsonSchemes = Record<MaterialSchemeName, Record<ColorSchemeRoles, ColorString>>;

export interface PhotoJson {
  src: string;
  figcaption: string;
  alt: string;
  srcSet: Record<BreakpointLabel | "thumb", string>;
}

export interface ThemeConfig {
  themePhoto: PhotoJson;
  json: ThemeJsonSchemes;
  materialSchemes: MaterialScheme;
}

export type ThemeName = (typeof ThemeNames.Themes)[keyof typeof ThemeNames.Themes];

export type PhotosJson = Record<ThemeName, PhotoJson>;

export type ThemeConfigs = Record<ThemeName, ThemeConfig>;

export { type MaterialSymbol } from "material-symbols";

export type ColorSchemeConfigChange = CustomEvent<ColorSchemeConfig>;
