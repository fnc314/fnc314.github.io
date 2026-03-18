import { MaterialScheme } from "@/styles/material-styles";
import { THEME_CONFIGS } from "@/themes/themes";
import { css, CSSResult, html, TemplateResult, unsafeCSS } from "lit-element";

export type ThemePhoto = {
  src: string;
  figcaption: string;
  alt: string;
};

export type ThemeConfig = {
  themePhoto: ThemePhoto;
  materialSchemes: MaterialScheme
};

export const THEME_NAMES = {
  chicago: "chicago" as const,
  inter: "inter" as const,
  red: "red" as const,
  // skyline: "skyline" as const,
  sunset: "sunset" as const,
} as const;

export type ThemeName = typeof THEME_NAMES[keyof typeof THEME_NAMES];

export type ThemeConfigs = Record<ThemeName, ThemeConfig>;

export const readScheme = (jsonSchema: object) => css`
  ${
    unsafeCSS(
      Object
        .entries(jsonSchema)
        .map(([colorRole, colorRGB]) => (keyTransform(colorRole, colorRGB)))
        .reduce(
          (acc, curr) => css`${acc}${curr}`,
          css``
        )
    )
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

  return css`
    :root {
      --md-sys-color-${unsafeCSS(roleNameBase)}: ${unsafeCSS(rgb)};
    }
  `;
};

export const themeToIcon: (slot: "leading-icon" | "start", theme: ThemeName) => TemplateResult = (
  slot: "leading-icon" | "start",
  theme: ThemeName
) => html`
  <img .slot=${slot} .src=${THEME_CONFIGS[theme].themePhoto.src} .alt=${THEME_CONFIGS[theme].themePhoto.alt} />
`;