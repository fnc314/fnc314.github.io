import PhotoJsonFileImport from "@/data/photo.json" with { type: "json" };
import { MaterialScheme } from "@/styles/material-styles";
import { css, CSSResult, unsafeCSS } from "lit-element";

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
  | "tertiaryFixedDim"
  ;

export type ColorSubValue = `${"A" | "B" | "C" | "D" | "E" | "F" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"}`
export type ColorValue = `${ColorSubValue}${ColorSubValue}`;

export type ColorString = `#${string}`

export type MaterialSchemeNames = "light" | "light-medium-contrast" | "light-high-contrast" | "dark" | "dark-medium-contrast" | "dark-high-contrast";

export type ThemeJsonSchemes = Record<MaterialSchemeNames, Record<ColorSchemeRoles, ColorString>>

export function jsonIsThemeJsonSchemes(json: unknown): json is ThemeJsonSchemes {
  if (typeof json !== 'object' || json === null) {
    return false;
  }

  const correctKeys = Object.keys(json).every((key) => [
    "light", "light-medium-contrast", "light-high-contrast", "dark", "dark-medium-contrast", "dark-high-contrast"
  ].includes(key));

  if (!correctKeys) {
    return false;
  }

  const correctValues = Object.values(json).flatMap((value) => Object.values(value)).every((value) => {
    if (typeof value !== 'string') {
      return false;
    }
    return value.startsWith('#') && value.length === 7;
  });

  return correctValues;
}

export interface PhotoJson {
  src: string;
  figcaption: string;
  alt: string;
}

export interface ThemeConfig {
  themePhoto: PhotoJson;
  json: ThemeJsonSchemes;
  materialSchemes: MaterialScheme
}

export const THEME_NAMES = {
  chicago: "chicago" as const,
  inter: "inter" as const,
  red: "red" as const,
  // skyline: "skyline" as const,
  sunset: "sunset" as const,
} as const;

export type ThemeName = typeof THEME_NAMES[keyof typeof THEME_NAMES];

export type PhotosJson = Record<ThemeName, PhotoJson>;

export type ThemeConfigs = Record<ThemeName, ThemeConfig>;

export const PhotoJsonFile: PhotosJson = PhotoJsonFileImport;

export const readScheme = (jsonSchema: object) => css`
  :root {
    ${
      unsafeCSS(
        Object
          .entries(jsonSchema)
          .map(([colorRole, colorRGB]) => keyTransform(colorRole, colorRGB))
          .reduce(
            (acc, curr) => css`${acc}${curr}`,
            css``
          )
      )
    }
  }
`;

export function keyTransform(
  jsonKey: string,
  rgb: string
): CSSResult {
  const roleNameBase = jsonKey
    .split(/(?=[A-Z])/)
    .map((part) => part.toLowerCase())
    .join("-");

  return css`--md-sys-color-${unsafeCSS(roleNameBase)}: ${unsafeCSS(rgb)};`;
};
