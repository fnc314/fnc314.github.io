/**
 * Returns the value of the provided {@link property}
 *
 * @param {string} property - The particular `CSS` property
 *   of interest
 * @return A `string` from `CSS` or an empty `string`
 * @typedef (property: string) => string
 */
export const readCssProperty = (property: string) =>
  window.getComputedStyle(
    window.document.documentElement
  ).getPropertyValue(property);