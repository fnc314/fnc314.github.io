import { readCSSProperty } from "./read-css-property";

/**
 * Creates the necessary `data:` string to display encoded `SVG`
 *   assets exposed as `CSS Properties`
 *
 * @param {string} propertyOrData A `string` which, when starting
 *   with `--`, is assumed a `CSS Property` and passed to related
 *   {@link readCSSProperty}.  If `--` is missing, then the provided
 *   {@link propertyOrData} is used directly
 * @returns {string} A `string` usable for exposing an encoded `SVG`
 */
export const cssPropertyDataImage: (propertyOrData: string) => string =
  (propertyOrData: string) => propertyOrData.startsWith("--") ?
    `data:image/svg+xml;base64,${readCSSProperty(propertyOrData)}` :
    `data:image/svg+xml;base64,${propertyOrData}`