import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type CSSResult } from "lit";
export declare class VersionTag extends UIAwareElement {
    static styles: CSSResult[];
    private formattedDate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "version-tag": VersionTag;
    }
}
