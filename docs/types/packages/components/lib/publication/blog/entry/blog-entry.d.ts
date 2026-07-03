import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { type BlogEntryJson } from "@fnc314/packages.types";
export declare class BlogEntry extends UIAwareElement {
    static styles: any[];
    blogEntry: BlogEntryJson;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "blog-entry": BlogEntry;
    }
}
