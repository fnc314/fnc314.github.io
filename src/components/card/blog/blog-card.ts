import "@/components/blog/blog-post";
import { type BlogPostJson } from "@/components/blog/blog-post";
import "@/components/card/bento/bento-card";
import BlogJson from "@/data/blog.json" with { type: "json" };
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { blogCardStyles } from "./blog-card.styles";

/**
 * @summary BlogCard - A card component displaying blog posts.
 *
 * @element blog-card
 */
@customElement("blog-card")
export class BlogCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [blogCardStyles];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override connectedCallback() {
    super.connectedCallback();
    this.id = "blog";
  }

  override render() {
    return html`
      <bento-card
        class="blog-container"
        aria-labelledby="blog-title"
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
      >
        <h2 slot="header" id="blog-title" class="md-typescale-title-large">Blog Posts</h2>
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
