import { type BlogPostJson } from "@/components/blog/blog-post.types";
import { LitElement } from "lit";
export type { BlogPostJson } from "@/components/blog/blog-post.types";
export declare class BlogPost extends LitElement {
    static styles: import("lit").CSSResult[];
    blogPost: BlogPostJson;
    private darkMode;
    private onAppConfigChange;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "blog-post": BlogPost;
    }
}
