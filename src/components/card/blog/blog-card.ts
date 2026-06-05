import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { blogCardStyles } from "./blog-card.styles";
import { type BlogPostJson } from "@/components/blog/blog-post";
import BlogJson from "@/data/blog.json" with { type: "json" };
import "@/components/card/bento/bento-card";
import "@/components/blog/blog-post";

/**
 * @summary BlogCard - A card component displaying blog posts.
 *
 * @element blog-card
 */
@customElement("blog-card")
export class BlogCard extends LitElement {
  static override styles = [blogCardStyles];

  override connectedCallback() {
    super.connectedCallback();
    this.id = "blog";
  }

  override render() {
    return html`
      <bento-card class="blog-container" aria-labelledby="blog-title" scrollable>
        <h2 id="blog-title" class="md-typescale-title-large">Blog Posts</h2>
        <div class="blog-list">
          ${BlogJson.posts.map(
            (post: BlogPostJson) => html`
              <blog-post .blogPost=${post}></blog-post>
            `,
          )}
        </div>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "blog-card": BlogCard;
  }
}
