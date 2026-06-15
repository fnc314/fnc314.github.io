import { readCSSProperty } from "./read-css-property";

/** String for `url` and `img#src` */
const DATA_IMAGE_SVG_BASE64_PREFIX = "data:image/svg+xml;base64,";

/**
 * Creates the necessary `data:` string to display encoded `SVG`
 *   assets exposed as `CSS Properties`
 *
 * @param {string} propertyOrData A `string` which, when starting
 *   with `--`, is assumed a `CSS Property` and passed to related
 *   {@link @fnc314/design-tokens!readCSSProperty}.  If `--` is missing, then the provided
 *   `propertyOrData` is used directly
 * @returns {string} A `string` usable for exposing an encoded `SVG`
 * @see {readCSSProperty}
 */
export const cssPropertyDataImage: (propertyOrData: string) => string =
  (propertyOrData: string) => propertyOrData.startsWith("--") ?
    `${DATA_IMAGE_SVG_BASE64_PREFIX}${readCSSProperty(propertyOrData)}` :
    `${DATA_IMAGE_SVG_BASE64_PREFIX}${propertyOrData}`