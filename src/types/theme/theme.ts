import PhotoJsonFileImport from "@/data/photo.json" with { type: "json" };
import { type MaterialScheme } from "@/styles/material-styles";
import { type CSSResult, css, unsafeCSS } from "lit";

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

export type ColorSubValue =
  `${"A"|"B"|"C"|"D"|"E"|"F"|"0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"}`;

export type ColorValue = `${ColorSubValue}${ColorSubValue}`;

export type ColorString = `#${string}`;

// Recursive helper to check if a string consists only of N hex digits
type IsHex<T extends string, Count extends any[] = []> =
  T extends `${ColorSubValue}${infer Rest}`
    ? IsHex<Rest, [...Count, any]>
    : T extends ""
      ? Count["length"] extends 8 ? true : false
      : false;

// The final validator constraint
export type ValidateRGBA<T extends string> =
  T extends `#${infer Rest}`
    ? IsHex<Rest> extends true
      ? T
      : "Error: Must be # followed by exactly 8 hex digits"
    : "Error: Must start with #";

// Helper function to enforce the type
export const setRGBA = <T extends string>(color: T & ValidateRGBA<T>) => color;

export type MaterialSchemeNames =
  | "light"
  | "light-medium-contrast"
  | "light-high-contrast"
  | "dark"
  | "dark-medium-contrast"
  | "dark-high-contrast"
  ;

export type ThemeJsonSchemes=Record<MaterialSchemeNames, Record<ColorSchemeRoles, ColorString>>;

/**
 * Checks if the provided JSON conforms to the expected theme schemes structure
 * @param json - Input of an unknown type, ideally conforming to a Material 3 JSON scheme
 * @returns A boolean indicating whether the input JSON matches the expected structure of {@link ThemeJsonSchemes}
 */
export function jsonIsThemeJsonSchemes(json: unknown): json is ThemeJsonSchemes {
  if (typeof json !== "object" || json === null) {
    return false;
  }

  const correctKeys = Object.keys(json).every((key) =>
    [
      "light",
      "light-medium-contrast",
      "light-high-contrast",
      "dark",
      "dark-medium-contrast",
      "dark-high-contrast",
    ].includes(key),
  );

  if (!correctKeys) {
    return false;
  }

  const correctValues = Object.values(json)
    .flatMap((value) => Object.values(value as Record<string, unknown>))
    .every((value) => {
      if (typeof value!=="string") {
        return false;
      }
      return value.startsWith("#") && value.length === 7;
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
  materialSchemes: MaterialScheme;
}

export const THEME_NAMES={
  chicago: "chicago" as const,
  inter: "inter" as const,
  red: "red" as const,
  // skyline: "skyline" as const,
  sunset: "sunset" as const,
} as const;

export type ThemeName = (typeof THEME_NAMES)[keyof typeof THEME_NAMES];

export type PhotosJson = Record<ThemeName, PhotoJson>;

export type ThemeConfigs = Record<ThemeName, ThemeConfig>;

export const PhotoJsonFile: PhotosJson = PhotoJsonFileImport;

/**
 * Reads a `.json` defined object and produces a {@link lit!CSSResult}
 *
 * @param {object} jsonSchema
 * @returns {lit!CSSResult} A {@link lit!CSSResult} of the provided {@link jsonSchema}
 */
export const readScheme = (jsonSchema: object) => css`
  :root {
    ${unsafeCSS(
        Object.entries(jsonSchema)
          .map(
            ([colorRole, colorRGB]: [string, string]) => keyTransform(colorRole, colorRGB)
          )
          .reduce(
            (acc, curr) => css`${acc}${curr}`,
            unsafeCSS(""),
          ),
      )
    }
  }
`;

/**
 * Converts {@link jsonKey} and corresponding {@link rgb} value into a CSS custom property
 *   via {@link lit!css} and {@link lit!unsafeCSS} functions
 * @param jsonKey - The key from the JSON scheme, e.g., "primaryContainer"
 * @param rgb - The RGB color value from the JSON scheme, e.g., "#FF0000"
 * @returns {lit!CSSResult} - A CSSResult containing the custom property definition, e.g., "--md-sys-color-primary-container: #FF0000;"
 */
export function keyTransform(jsonKey: string, rgb: string): CSSResult {
  const roleNameBase: string = jsonKey
    .split(/(?=[A-Z])/)
    .map((part) => part.toLowerCase())
    .join("-");

  return css`
    /* stylelint-disable-next-line custom-property-pattern, value-keyword-case */
    --md-sys-color-${unsafeCSS(roleNameBase)}: POSTCSS_LIT_1;
    /* stylelint-disable-next-line custom-property-pattern, value-keyword-case */
    --oklch-md-sys-color-${unsafeCSS(roleNameBase)}: oklch(from ${unsafeCSS(rgb)} l c h);
  `;
}
