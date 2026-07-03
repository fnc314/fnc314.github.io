import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type WordTagHeaviness, type WordTagVariant } from "@/lib/word/tag/word-tag.types";
import { type TemplateResult } from "lit";
export declare class WordTag extends UIAwareElement {
    static styles: any[];
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
