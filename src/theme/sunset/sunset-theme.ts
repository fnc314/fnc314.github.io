import { jsonIsThemeJsonSchemes, PhotoJsonFile, readScheme, ThemeJsonSchemes, type ThemeConfig } from "@/types/theme/theme";
import JsonTheme from "./sunset.material3-expressive-theme.json" with { type: "json" };

export const SunsetThemeConfig: ThemeConfig = {
  themePhoto: PhotoJsonFile.sunset,
  json: jsonIsThemeJsonSchemes(JsonTheme.schemes) ? JsonTheme.schemes : {} as ThemeJsonSchemes,
  materialSchemes: {
    light: readScheme(JsonTheme.schemes.light),
    lightMediumContrast: readScheme(JsonTheme.schemes["light-medium-contrast"]),
    lightHighContrast: readScheme(JsonTheme.schemes["light-high-contrast"]),
    dark: readScheme(JsonTheme.schemes.dark),
    darkMediumContrast: readScheme(JsonTheme.schemes["dark-medium-contrast"]),
    darkHighContrast: readScheme(JsonTheme.schemes["dark-high-contrast"]),
  }
};