import { jsonIsThemeJsonSchemes, readScheme } from "@/lib/theme/utils";
import { Photos } from "@fnc314/packages.data";
import JsonTheme from "@fnc314/packages.design-tokens/themes/leather-jacket/leather-jacket.mtb.json" with { type: "json" };
import { type ThemeConfig, type ThemeJsonSchemes } from "@fnc314/packages.types";

const json = jsonIsThemeJsonSchemes(JsonTheme.schemes) ? JsonTheme.schemes : ({} as ThemeJsonSchemes);

export const LeatherJacketThemeConfig: ThemeConfig = {
  themePhoto: Photos.leatherJacket,
  json,
  materialSchemes: {
    light: readScheme(json.light),
    lightMediumContrast: readScheme(json["light-medium-contrast"]),
    lightHighContrast: readScheme(json["light-high-contrast"]),
    dark: readScheme(json.dark),
    darkMediumContrast: readScheme(json["dark-medium-contrast"]),
    darkHighContrast: readScheme(json["dark-high-contrast"]),
  },
};
