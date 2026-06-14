/**
 * Returns the value of the provided {@link property}
 *
 * @param {string} property - The particular `CSS` property
 *   of interest
 * @param {HTMLElement|null|undefined} element - The (possibly missing) target
 *   {@link HTMLElement} from which computed styles and properties are pulled.
 *   Defaults to "global" `window.document.documentElement`
 * @param {boolean} logComputedPropertyTransaction - Removes log suppression allowing
 *   invocations can expose the {@link property} read from the {@link element} and the
 *   returned value
 * @return A `string` from `CSS` or an empty `string`
 * @typedef (property: string) => string
 */
export function readCSSProperty(
  property: string,
  element: HTMLElement | null | undefined = undefined,
  logComputedPropertyTransaction: boolean = false
) {
  const computedTarget = element ?? window.document.documentElement;

  const computedStyle = window.getComputedStyle(computedTarget);

  const propertyValue = computedStyle.getPropertyValue(property);

  if (logComputedPropertyTransaction) {
    console.info(
      `
      Reading property: ${property}
      From element: ${element?.tagName ?? "window.document.documentElement"}
      Targeting: ${computedTarget.tagName}
      Value: ${propertyValue}
      Styles: ${JSON.stringify(computedStyle, null, 2)}
      `
    );
  }

  return propertyValue;
}