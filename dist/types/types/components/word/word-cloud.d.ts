export interface WordCloudWord {
    word: string;
    weight: Weights;
    quartile: WeightQuartile;
    category: WordCloudWordCategory;
    extras: string[];
}
export type WordCloudWordCategory = "tech" | "practice" | "product";
export type WeightQuartile = `${"first" | "second" | "third" | "fourth"}-quartile`;
export type Weights = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export declare const WordCloudGroupings: {
    readonly CATEGORY: "category";
    readonly QUARTILE: "quartile";
    readonly UNGROUPED: "ungrouped";
};
export type WordCloudGrouping = (typeof WordCloudGroupings)[keyof typeof WordCloudGroupings];
export declare const WordCloudSortings: {
    readonly BY_WEIGHT: "by-weight";
    readonly BY_WEIGHT_REVERSED: "by-weight-reversed";
    readonly BY_ALPHABET: "by-alphabet";
    readonly BY_ALPHABET_REVERSED: "by-alphabet-reversed";
    readonly NONE: "none";
};
export type WordCloudSorting = (typeof WordCloudSortings)[keyof typeof WordCloudSortings];
export declare const WordCloudAppearances: {
    readonly SIMULTANEOUS: "simultaneous";
    readonly SEQUENTIAL: "sequential";
};
export type WordCloudAppearance = (typeof WordCloudAppearances)[keyof typeof WordCloudAppearances];
export declare const makeWordCloudWord: (word: string, weight: Weights, category: WordCloudWordCategory, extras?: string[]) => WordCloudWord;
export type RenderableWordCloudWord = WordCloudWord & {
    delay?: number;
};
//# sourceMappingURL=word-cloud.d.ts.map