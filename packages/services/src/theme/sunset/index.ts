import { jsonIsThemeJsonSchemes, readScheme } from "@/lib/theme/utils";
import { Photos } from "@fnc314/packages.data";
import JsonTheme from "@fnc314/packages.design-tokens/themes/sunset/sunset.scheme.mtb.json" with { type: "json" };
import { type ThemeConfig, type ThemeJsonSchemes } from "@fnc314/packages.types";

const json = jsonIsThemeJsonSchemes(JsonTheme) ? JsonTheme: ({} as ThemeJsonSchemes);

export const SunsetThemeConfig: ThemeConfig = {
  themePhoto: Photos.sunset,
  json,
  materialSchemes: {
    light: readScheme(json.light),
    lightMediumContrast: readScheme(json.lightMediumContrast),
    lightHighContrast: readScheme(json.lightHighContrast),
    dark: readScheme(json.dark),
    darkMediumContrast: readScheme(json.darkMediumContrast),
    darkHighContrast: readScheme(json.darkHighContrast),
  },
};
