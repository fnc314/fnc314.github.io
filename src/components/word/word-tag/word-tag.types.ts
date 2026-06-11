import type { ComplexAttributeConverter } from "lit";

/**
 * The weight of the tag (text & border), can be
 *  `"normal"` (`--md-ref-typeface-weight-regular` & `--hairline-width`) or
 *  `"heavy"` (`--md-ref-typeface-weight-bold` & `2.5 * --hairline-width`)
 *
 * @export
 * @typedef {WordTagHeaviness}
 */
export type WordTagHeaviness = "normal" | "heavy";

/**
 * The variations of {@link WordTag} representing the possible combinations
 *   of `text only`, `icon then text`, and `text then icon`
 *
 * @export
 * @typedef {WordTagVariant}
 */
export type WordTagVariant = "text" | "icon-text" | "text-icon";

/**
 * Implements {@link ComplexAttributeConverter} for {@link WordTagVariant} properties
 */
export const WordTagVariantAttributeConverter: ComplexAttributeConverter<
  WordTagVariant,
  WordTagVariant
> = {
  toAttribute: (value: string) => `${value}`,
  fromAttribute: (value: string) => {
    switch (value) {
      case "icon-text":
        return "icon-text";
      case "text-icon":
        return "text-icon";
      default:
        return "text";
    }
  }
}