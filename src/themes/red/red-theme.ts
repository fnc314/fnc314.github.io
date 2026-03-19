import PhotoJson from "@/data/photo.json" with { type: "json" };
import { readScheme, type ThemeConfig } from "@/types/configs/theme-configs";
import ThemeJson from "./red.material3-expressive-theme.json" with { type: "json" };

export const RedThemeConfig: ThemeConfig = {
  themePhoto: PhotoJson.red,
  materialSchemes: {
    light: readScheme(ThemeJson.schemes.light),
    lightMediumContrast: readScheme(ThemeJson.schemes["light-medium-contrast"]),
    lightHighContrast: readScheme(ThemeJson.schemes["light-high-contrast"]),
    dark: readScheme(ThemeJson.schemes.dark),
    darkMediumContrast: readScheme(ThemeJson.schemes["dark-medium-contrast"]),
    darkHighContrast: readScheme(ThemeJson.schemes["dark-high-contrast"]),
  }
};