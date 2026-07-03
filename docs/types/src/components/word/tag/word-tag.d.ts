import { type WordTagHeaviness, type WordTagVariant } from "@/components/word/tag/word-tag.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { type CSSResult, type TemplateResult } from "lit";
export declare class WordTag extends UIAwareElement {
    static styles: CSSResult[];
    word: string;
    heaviness: WordTagHeaviness;
    hrefUrl: string;
    variant: WordTagVariant;
    private layoutForVariant;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "word-tag": WordTag;
    }
}
