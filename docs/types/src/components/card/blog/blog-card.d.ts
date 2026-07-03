import "@/components/blog/entry/blog-entry";
import "@/components/card/bento/bento-card";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
export declare class BlogCard extends UIAwareElement {
    static styles: import("lit").CSSResult[];
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
