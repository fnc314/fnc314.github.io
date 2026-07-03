import { configsService } from "@/lib/configs";
import { THEME_CONFIGS, themeService } from "@/lib/theme";
import { CONFIG_COLOR_CONTRAST_NAMES, CONFIG_COLOR_SCHEME_NAMES, type ColorSchemeConfigs, type ColorSchemeContrast, type MaterialSchemeName, type ThemeJsonSchemes } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult, css, html, nothing, unsafeCSS } from "lit";

export const colorSchemeContrastToIcon: (
  slot: "start" | "leading-icon",
  contrast: ColorSchemeContrast,
) => TemplateResult = (slot: "start" | "leading-icon", contrast: ColorSchemeContrast) => {
  switch (contrast) {
    case CONFIG_COLOR_CONTRAST_NAMES.NORMAL:
      return html`<md-icon slot=${slot}>exposure_zero</md-icon>`;
    case CONFIG_COLOR_CONTRAST_NAMES.MEDIUM:
      return html`<md-icon slot=${slot}>exposure_plus_1</md-icon>`;
    case CONFIG_COLOR_CONTRAST_NAMES.HIGH:
      return html`<md-icon slot=${slot}>exposure_plus_2</md-icon>`;
    default:
      return html`${nothing}`;
  }
};

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
      if (typeof value !== "string") {
        return false;
      }
      return value.startsWith("#") && value.length === 7;
    });

  return correctValues;
}

/**
 * Converts typtical `JSON` keys in `lowerPascalCase` into `CSS` appropriate
 *   `lower-kebab-case`
 *
 * @param {string} jsonKey The key of a `JSON` object, expected in `lowerPascalCase`
 * @returns {string} The same {@link jsonKey} but in `lower-kebab-case`
 */
const formatJsonKey: (jsonKey: string) => string = (jsonKey: string) =>
  jsonKey
    .split(/(?=[A-Z])/)
    .map((part) => part.toLowerCase())
    .join("-");

/**
 * Takes the provided {@link CSSResult} and massages the underlying text with
 *   a snippet provided by Gemini.  The intent is to remove redundant spaces and,
 *   soon, the comments left for the linter.
 *
 * @param {CSSResult} inputCSS The newly crafted {@link CSSResult} from a `JSON` file
 * @returns {CSSResult} The same {@link CSSResult} with empty lines removed
 */
const sanitizeCSS: (inputCSS: CSSResult) => CSSResult = (inputCSS: CSSResult) => {
  const sortedVariableRows = inputCSS.cssText.split(/\r?\n/)
    .map((line) => {
      const normalized = line.trim().replace(/\u00A0/g, " ");
      return normalized.trim() === "" ? "" : normalized;
    })
    .filter((line) => line.length > 0 && line.startsWith("--"))
    .sort((var1: string, var2: string) => {
      if (var1.startsWith("--md") && var2.startsWith("--ok")) {
        return -1;
      } else if (var1.startsWith("--ok") && var2.startsWith("--md")) {
        return 1;
      } else {
        return 0;
      }
    })
    .toSorted();

  const mdRows = [
    ...sortedVariableRows.filter((line: string) => line.startsWith("--md"))
  ].join("\n");
  const okRows = [
    ...sortedVariableRows.filter((line: string) => line.startsWith("--ok"))
  ].join("\n");

  return css`
    :root {
      ${unsafeCSS(mdRows)};
    }

    :root {
      ${unsafeCSS(okRows)};
    }
  `;
}

/**
 * Reads a `.json` defined object and produces a {@link lit!CSSResult}
 *
 * @param {object} jsonSchema
 * @returns {lit!CSSResult} A {@link lit!CSSResult} of the provided {@link jsonSchema}
 */
export const readScheme: (jsonSchema: object) => CSSResult = (jsonSchema: object) => {
  const colorMapper: ([colorRole, colorRGB]: [string, string]) => CSSResult =
    ([colorRole, colorRGB]: [string, string]) => keyTransform(colorRole, colorRGB);

  const transformedJson: CSSResult = Object.entries(jsonSchema).map(colorMapper).reduce(
    (acc, curr) => css`${acc}${curr}`,
    unsafeCSS("")
  );

  return sanitizeCSS(transformedJson);
};

/**
 * Converts {@link jsonKey} and corresponding {@link rgb} value into a CSS custom property
 *   via {@link lit!css} and {@link lit!unsafeCSS} functions
 * @param jsonKey - The key from the JSON scheme, e.g., "primaryContainer"
 * @param rgb - The RGB color value from the JSON scheme, e.g., "#FF0000"
 * @returns {lit!CSSResult} - A CSSResult containing the custom property definition, e.g., "--md-sys-color-primary-container: #FF0000;"
 */
export function keyTransform(jsonKey: string, rgb: string): CSSResult {
  const cssColorName = unsafeCSS(formatJsonKey(jsonKey));
  const cssColor = unsafeCSS(rgb);

  return css`
    /* stylelint-disable-next-line custom-property-pattern, value-keyword-case */
    --md-sys-color-${cssColorName}: ${cssColor};
    /* stylelint-disable-next-line custom-property-pattern, value-keyword-case */
    --oklch-md-sys-color-${cssColorName}: oklch(from ${cssColor} l c h);
  `;
}

export const colorSchemeConfigsToMaterialSchemeName: (colorSchemeSettings: ColorSchemeConfigs) => MaterialSchemeName = (
  colorSchemeSettings: ColorSchemeConfigs
): MaterialSchemeName => {
  const variant = colorSchemeSettings.name !== CONFIG_COLOR_SCHEME_NAMES.SYSTEM
    ? colorSchemeSettings.name.toLowerCase()
    : (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? CONFIG_COLOR_SCHEME_NAMES.DARK
      : CONFIG_COLOR_SCHEME_NAMES.LIGHT
    ).toLowerCase();

  const contrast = colorSchemeSettings.contrast === CONFIG_COLOR_CONTRAST_NAMES.NORMAL
    ? ""
    : colorSchemeSettings.contrast.charAt(0) + colorSchemeSettings.contrast.slice(1).toLowerCase() + "Contrast";

  return `${variant}${contrast}` as MaterialSchemeName;
};

export const onThemeChange: (event: MediaQueryListEvent) => void = (event: MediaQueryListEvent) => {
  const name = event.matches ? CONFIG_COLOR_SCHEME_NAMES.DARK : CONFIG_COLOR_SCHEME_NAMES.LIGHT;

  const appSettings = configsService.loadConfigs();
  const colorScheme = {
    ...appSettings.colorScheme,
    name,
  };
  configsService.saveConfigs({
    ...appSettings,
    colorScheme,
  });

  updateMaterialCSSStyleSheet(
    themeService.currentThemeConfig().materialSchemes[colorSchemeConfigsToMaterialSchemeName(colorScheme)],
  );

  document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
};

export const updateMaterialCSSStyleSheet: (result: CSSResult) => void = (result: CSSResult) =>
  MaterialCSSStyleSheet.replaceSync(result.cssText);

export const MaterialCSSStyleSheet: CSSStyleSheet = THEME_CONFIGS.sunset.materialSchemes.light.styleSheet!;