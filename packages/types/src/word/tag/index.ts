import { type ComplexAttributeConverter } from "lit";

/**
 * The weight of the tag (text & border), can be
 *  `"normal"` (`--md-ref-typeface-weight-regular` & `--sizes-thickness-hairline`) or
 *  `"heavy"` (`--md-ref-typeface-weight-bold` & `2.5 * --sizes-thickness-hairline`)
 *
 * @typedef {WordTagHeaviness}
 */
export type WordTagHeaviness = "normal" | "heavy";

/**
 * @summary A `const` declaration from which {@link WordTagVariant} is defined
 *
 * @type {{ readonly "text-only": "text-only"; readonly "icon-text": "icon-text"; readonly "text-icon": "text-icon"; readonly "icon-only": "icon-only"; }}
 */
export const WordTagVariants = {
  "text-only": "text-only" as const,
  "icon-text": "icon-text" as const,
  "text-icon": "text-icon" as const,
  "icon-only": "icon-only" as const,
} as const;

/**
 * The variations of {@link WordTag} representing the possible combinations
 *   of `text only`, `icon only`, `icon then text`, and `text then icon`
 *
 * @typedef {WordTagVariant}
 */
export type WordTagVariant = keyof typeof WordTagVariants;

/**
 * Implements {@link ComplexAttributeConverter} for {@link WordTagVariant} properties
 */
export const WordTagVariantAttributeConverter: ComplexAttributeConverter<WordTagVariant, WordTagVariant> = {
  toAttribute: (value: string) => `${value}`,
  fromAttribute: (value: string) => {
    switch (value) {
      case WordTagVariants["icon-text"]:
        return WordTagVariants["icon-text"];
      case WordTagVariants["text-icon"]:
        return WordTagVariants["text-icon"];
      case WordTagVariants["text-only"]:
        return WordTagVariants["text-only"];
      case WordTagVariants["icon-only"]:
        return WordTagVariants["icon-only"];
      default:
        return WordTagVariants["text-only"];
    }
  },
};
