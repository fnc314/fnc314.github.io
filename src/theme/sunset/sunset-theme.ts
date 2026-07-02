import {
  jsonIsThemeJsonSchemes,
  readScheme
} from "@/types/theme";
import { Photos } from "@fnc314/packages.data";
import JsonTheme from "@fnc314/packages.design-tokens/themes/sunset/sunset.mtb.json" with { type: "json" };
import {
  type ThemeConfig,
  type ThemeJsonSchemes,
} from "@fnc314/packages.types";

export const SunsetThemeConfig: ThemeConfig = {
  themePhoto: Photos.sunset,
  json: jsonIsThemeJsonSchemes(JsonTheme.schemes) ? JsonTheme.schemes : ({} as ThemeJsonSchemes),
  materialSchemes: {
    light: readScheme(JsonTheme.schemes.light),
    lightMediumContrast: readScheme(JsonTheme.schemes["light-medium-contrast"]),
    lightHighContrast: readScheme(JsonTheme.schemes["light-high-contrast"]),
    dark: readScheme(JsonTheme.schemes.dark),
    darkMediumContrast: readScheme(JsonTheme.schemes["dark-medium-contrast"]),
    darkHighContrast: readScheme(JsonTheme.schemes["dark-high-contrast"]),
  },
};
