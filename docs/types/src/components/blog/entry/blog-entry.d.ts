import { type BlogEntryJson } from "@/components/blog/entry/blog-entry.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
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
