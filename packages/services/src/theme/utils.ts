import { CONFIG_COLOR_CONTRAST_NAMES, type ColorSchemeContrast, type ThemeJsonSchemes } from "@fnc314/packages.types";
import { type CSSResult, type TemplateResult, css, html, nothing, unsafeCSS } from "lit";

/**
 * A convenience method to return {@link TemplateResult}s of `<md-icon>`
 *
 * @export
 * @param {ColorSchemeContrast} contrast - The particular {@link ColorSchemeContrast} chosen by the user
 * @param {("start" | "leading-icon")} [slot="start"] - Either `"start"` or `"leading-icon"` with `"start"` as default
 * @returns {TemplateResult}
 */
export function colorSchemeContrastToIcon(
  contrast: ColorSchemeContrast,
  slot: "start" | "leading-icon" = "start",
): TemplateResult {
  switch (contrast) {
    case CONFIG_COLOR_CONTRAST_NAMES.NORMAL:
      return html`<md-icon slot="${slot}">exposure_zero</md-icon>`;
    case CONFIG_COLOR_CONTRAST_NAMES.MEDIUM:
      return html`<md-icon slot="${slot}">exposure_plus_1</md-icon>`;
    case CONFIG_COLOR_CONTRAST_NAMES.HIGH:
      return html`<md-icon slot="${slot}">exposure_plus_2</md-icon>`;
    default:
      return html`${nothing}`;
  }
};

/**
 * Checks if the provided JSON conforms to the expected theme schemes structure
 *
 * @param json - Input of an unknown type, ideally conforming to a Material 3 JSON scheme
 * @returns A boolean indicating whether the input JSON matches the expected structure of {@link @fnc314/packages.types!ThemeJsonSchemes}
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
 * Takes the provided {@link CSSResult} and massages the underlying text with
 *   a snippet provided by Gemini.  The intent is to remove redundant spaces and,
 *   soon, the comments left for the linter.
 *
 * @param inputCSS - The newly crafted {@link CSSResult} from a `JSON` file
 * @returns - The same {@link CSSResult} with empty lines removed
 */
const sanitizeCSS: (inputCSS: CSSResult) => CSSResult = (inputCSS: CSSResult) => {
  const sortedVariableRows = inputCSS.cssText
    .split(/\r?\n/)
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

  const mdRows = [...sortedVariableRows.filter((line: string) => line.startsWith("--md"))].join("\n");
  const okRows = [...sortedVariableRows.filter((line: string) => line.startsWith("--ok"))].join("\n");

  return css`
    :root {
      ${unsafeCSS(mdRows)};
    }

    :root {
      ${unsafeCSS(okRows)};
    }
  `;
};

/**
 * Reads a `.json` defined object and produces a {@link CSSResult}
 *
 * @param jsonSchema - Any `object`
 * @returns - A {@link CSSResult} of the provided `jsonSchema`
 */
export const readScheme: (jsonSchema: object) => CSSResult = (jsonSchema: object) => {
  const colorMapper: ([colorRole, colorRGB]: [string, string]) => CSSResult = ([colorRole, colorRGB]: [
    string,
    string,
  ]) => keyTransform(colorRole, colorRGB);

  const transformedJson: CSSResult = Object.entries(jsonSchema)
    .map(colorMapper)
    .reduce(
      (acc, curr) => css`
        ${acc}${curr}
      `,
      unsafeCSS(""),
    );

  return sanitizeCSS(transformedJson);
};

/**
 * Converts `jsonKey` and corresponding `rgb` value into a CSS custom property
 *   via {@link css} and {@link unsafeCSS} functions
 *
 * @param jsonKey - The key from the JSON scheme, e.g., `primaryContainer`
 * @param rgb - The RGB color value from the JSON scheme, e.g., `#FF0000`
 * @returns {lit!CSSResult} - A CSSResult containing the custom property definition, e.g., `--md-sys-color-primary-container: #FF0000;`
 */
export function keyTransform(jsonKey: string, rgb: string): CSSResult {
  const formattedKey = formatJsonKey(jsonKey);

  return unsafeCSS(
    [
      `/* stylelint-disable-next-line custom-property-pattern, value-keyword-case */`,
      `--md-sys-color-${formattedKey}: ${rgb};`,
      `/* stylelint-disable-next-line custom-property-pattern, value-keyword-case */`,
      `--oklch-md-sys-color-${formattedKey}: oklch(from ${rgb} l c h);`,
    ].join("\n"),
  );
}

/**
 * Converts typtical `JSON` keys in `lowerPascalCase` into `CSS` appropriate
 *   `lower-kebab-case`
 *
 * @param jsonKey - The key of a `JSON` object, expected in `lowerPascalCase`
 * @returns - The same `jsonKey` but in `lower-kebab-case`
 */
const formatJsonKey: (jsonKey: string) => string = (jsonKey: string) =>
  jsonKey
    .split(/(?=[A-Z])/)
    .map((part) => part.toLowerCase())
    .join("-")
    ;
