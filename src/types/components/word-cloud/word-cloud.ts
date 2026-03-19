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

export const WordCloudGroupings = {
  CATEGORY: "category" as const,
  QUARTILE: "quartile" as const,
  UNGROUPED: "ungrouped" as const,
} as const;

export type WordCloudGrouping = (typeof WordCloudGroupings)[keyof typeof WordCloudGroupings];

export const WordCloudSortings = {
  BY_WEIGHT: "by-weight" as const,
  BY_WEIGHT_REVERSED: "by-weight-reversed" as const,
  BY_ALPHABET: "by-alphabet" as const,
  BY_ALPHABET_REVERSED: "by-alphabet-reversed" as const,
  NONE: "none" as const,
} as const;

export type WordCloudSorting = (typeof WordCloudSortings)[keyof typeof WordCloudSortings];

export const WordCloudAppearances = {
  SIMULTANEOUS: "simultaneous" as const,
  SEQUENTIAL: "sequential" as const,
} as const;

export type WordCloudAppearance = (typeof WordCloudAppearances)[keyof typeof WordCloudAppearances];

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

      case theWeight <= 3:
        return "fourth-quartile";

      default:
        return "fourth-quartile";
    }
  })(weight),
  category,
  extras,
});

export type RenderableWordCloudWord = WordCloudWord & {
  delay?: number;
};