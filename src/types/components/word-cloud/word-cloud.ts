export type WordCloudWord = {
  word: string;
  weight: number | Weights;
  quartile: WeightQuartile;
  category: WordCloudWordCategory;
  extras: string[];
};

export type WordCloudWordCategory = "tech" | "practice" | "product";

export type WeightQuartile = `${"first" | "second" | "third" | "fourth"}-quartile`;

export type Weights = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const WordCloudAnimationStrategies = {
  /** The order in which words are animated into view is determined by the order in the randomized array */
  SEQUENTIAL: "sequential" as const,
  /** Elements are animated in order of their quartile, starting with the 4th. Elements within a quartile are displayed by index in randomized array */
  BY_QUARTILE: "by-quartile" as const,
  /** The same as `by-quartile` but starts with 1st quartile (i.e. largest) first. */
  BY_QUARTILE_REVERSED: "by-quartile-reversed" as const,
  /** The same as `by-quartile`, but the entries in each quartile are themselves sorted. This does *NOT* use the randomized array. */
  BY_QUARTILE_SORTED: "by-quartile-sorted" as const,
  /** Displays the entries by the alphabetical order of the categories. Display order within a given category is done highest weight to loweset. */
  BY_CATEGORY: "by-category" as const,
} as const;

export type WordCloudAnimationStrategy =
  (typeof WordCloudAnimationStrategies)[keyof typeof WordCloudAnimationStrategies];

export const WordCloudRotationStrategies = {
  /** Words are aligned horizontally like bricks. */
  BRICK: "brick" as const,
  /** Words are randomly rotated. */
  ROTATED: "rotated" as const,
  /** Words are rotated based on their weight, tending towards 45 degrees. */
  ROTATION_WEIGHTED: "rotation-weighted" as const,
} as const;

export type WordCloudRotationStrategy =
  (typeof WordCloudRotationStrategies)[keyof typeof WordCloudRotationStrategies];

/** A factory function to create a {@link WordCloudWord} */
export const makeWordCloudWord = (
  word: string,
  weight: number | Weights,
  category: WordCloudWordCategory,
  extras: string[] = [],
): WordCloudWord => ({
  word,
  weight,
  quartile: ((theWeight: number) => {
    switch (true) {
      case theWeight > 8:
        return "first-quartile";

      case 6 < theWeight && theWeight <= 8:
        return "second-quartile";

      case 3 < theWeight && theWeight <= 6:
        return "third-quartile";

      case theWeight < 3:
        return "fourth-quartile";

      default:
        return "fourth-quartile";
    }
  })(weight),
  category,
  extras,
});

export type RenderableWordCloudWord = WordCloudWord & {
  rotation?: number;
  delay?: number;
};