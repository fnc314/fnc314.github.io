export type { RenderableWordCloudWord, WordCloudAppearance, WordCloudGrouping, WordCloudSorting, WordCloudWord } from "@/components/word/word-cloud/word-cloud.types";
import { type RenderableWordCloudWord, type WordCloudAppearance, type WordCloudGrouping, type WordCloudSorting, type WordCloudWord } from "@/components/word/word-cloud/word-cloud.types";
import { LitElement, type PropertyValues } from "lit";
export declare class WordCloud extends LitElement {
    static styles: import("lit").CSSResult[];
    words: WordCloudWord[];
    instantClear: boolean;
    appearance: WordCloudAppearance;
    grouping: WordCloudGrouping;
    sorting: WordCloudSorting;
    delay: number | "none";
    threshold: number;
    _sortedWords: RenderableWordCloudWord[];
    private _isVisible;
    private _listElement;
    private _intersectionObserver?;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private _initIntersectionObserver;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private _processWords;
    private _getSortFunction;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "word-cloud": WordCloud;
    }
}
//# sourceMappingURL=word-cloud.d.ts.map