import { PhotoJsonFile, type ThemeConfig, ThemeJsonSchemes, jsonIsThemeJsonSchemes, readScheme } from "@/types/theme/theme";
import JsonTheme from "./inter.material3-expressive-theme.json" with { type: "json" };

export const InterThemeConfig: ThemeConfig = {
  themePhoto: PhotoJsonFile.inter,
  json: jsonIsThemeJsonSchemes(JsonTheme.schemes) ? JsonTheme.schemes : {} as ThemeJsonSchemes,
  materialSchemes: {
    light: readScheme(JsonTheme.schemes.light),
    lightMediumContrast: readScheme(JsonTheme.schemes["light-medium-contrast"]),
    lightHighContrast: readScheme(JsonTheme.schemes["light-high-contrast"]),
    dark: readScheme(JsonTheme.schemes.dark),
    darkMediumContrast: readScheme(JsonTheme.schemes["dark-medium-contrast"]),
    darkHighContrast: readScheme(JsonTheme.schemes["dark-high-contrast"]),
  }
}