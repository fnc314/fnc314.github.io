import { type WordTagHeaviness } from "@/components/word/word-tag/word-tag.types";
import { LitElement } from "lit";
export type { WordTagHeaviness } from "@/components/word/word-tag/word-tag.types";
export declare class WordTag extends LitElement {
    static styles: import("lit").CSSResult[];
    word: string;
    heaviness: WordTagHeaviness;
    hrefUrl: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "word-tag": WordTag;
    }
}
