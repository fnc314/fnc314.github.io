import "@/lib/card/bento/bento-card";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import "@/lib/publication/blog/entry/blog-entry";
export declare class BlogCard extends UIAwareElement {
    static styles: any[];
    expanded: boolean;
    enableHover: boolean;
    enableFocus: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "blog-card": BlogCard;
    }
}
