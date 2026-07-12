/**
 * Returns the value of the provided `property`
 *
 * @param {string} property - The particular `CSS` property
 *   of interest
 * @param {HTMLElement|null|undefined} element - The (possibly missing) target
 *   {@link HTMLElement} from which computed styles and properties are pulled.
 *   Defaults to "global" `window.document.documentElement`
 * @param {boolean} logComputedPropertyTransaction - Removes log suppression allowing
 *   invocations can expose the `property` read from the `element` and the
 *   returned value
 * @return A `string` from `CSS` or an empty `string`
 * @typedef (property: string) => string
 */
export function readCSSProperty(
  property: string,
  element: HTMLElement | null | undefined = undefined,
  logComputedPropertyTransaction: boolean = false,
) {
  const computedTarget = element ?? window.document.documentElement;

  const computedStyle = window.getComputedStyle(computedTarget);

  // `getComputedStyle` returns string-typed custom properties with their
  // surrounding quotes intact (e.g. the `*-icon-base64` tokens resolve to
  // `"data:image/svg+xml;base64,…"`). Strip a single layer of matching outer
  // quotes so callers get a directly-usable value (valid `<img src>`, etc.).
  const rawPropertyValue = computedStyle.getPropertyValue(property);
  const trimmedPropertyValue = rawPropertyValue.trim();
  const sanitizedPropertyValue = trimmedPropertyValue.replace(/^(["'])(.*)\1$/s, "$2");

  if (logComputedPropertyTransaction) {
    console.info(
      `
      Reading property: ${property}
      Computed: ${computedTarget.tagName}
      From element: ${element?.tagName ?? `Provided 'element' is ${element} so using 'computedTarget' = ${computedTarget.tagName}`}
      Targeting: ${computedTarget.tagName}
      ${JSON.stringify({ rawPropertyValue, trimmedPropertyValue, sanitizedPropertyValue }, null, 2)}
      `,
    );
  }

  return sanitizedPropertyValue;
}
