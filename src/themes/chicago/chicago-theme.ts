import { PhotoJsonFile, readScheme, type ThemeConfig } from "@/types/configs/theme-configs";
import JsonTheme from "./chicago.material3-expressive-theme.json" with { type: "json" };

export const ChicagoThemeConfig: ThemeConfig = {
  themePhoto: PhotoJsonFile.chicago,
  materialSchemes: {
    light: readScheme(JsonTheme.schemes.light),
    lightMediumContrast: readScheme(JsonTheme.schemes["light-medium-contrast"]),
    lightHighContrast: readScheme(JsonTheme.schemes["light-high-contrast"]),
    dark: readScheme(JsonTheme.schemes.dark),
    darkMediumContrast: readScheme(JsonTheme.schemes["dark-medium-contrast"]),
    darkHighContrast: readScheme(JsonTheme.schemes["dark-high-contrast"]),
  }
};