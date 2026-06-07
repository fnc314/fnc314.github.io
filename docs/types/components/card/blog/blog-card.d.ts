import "@/components/blog/blog-post";
import "@/components/card/bento/bento-card";
import { LitElement } from "lit";
export declare class BlogCard extends LitElement {
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
