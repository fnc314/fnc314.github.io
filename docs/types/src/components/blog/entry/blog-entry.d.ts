import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { type BlogEntryJson } from "@fnc314/packages.types";
export declare class BlogEntry extends UIAwareElement {
    static styles: import("lit").CSSResult[];
    blogEntry: BlogEntryJson;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "blog-entry": BlogEntry;
    }
}
