import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type RenderableWordCloudWord, type WordCloudAppearance, type WordCloudGrouping, type WordCloudSorting, type WordCloudWord } from "@/lib/word/cloud/word-cloud.types";
import { type PropertyValues } from "lit";
export declare class WordCloud extends UIAwareElement {
    static styles: any[];
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
