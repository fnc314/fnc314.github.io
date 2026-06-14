import "@/components/blog/entry/blog-entry";
import type { BlogEntryJson } from "@/components/blog/entry/blog-entry.types";
import "@/components/card/bento/bento-card";
import { BlogCardStyles } from "@/components/card/blog/blog-card.styles";
import BlogJson from "@/data/blog.json" with { type: "json" };
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary BlogCard - A card component displaying blog posts.
 *
 * @element blog-card
 */
@customElement("blog-card")
export class BlogCard extends LitElement {
  /** {@link lit!css} */
  static override styles = [BlogCardStyles];

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
        scrollable
        ?expanded=${this.expanded}
        ?enableHover=${this.enableHover}
        ?enableFocus=${this.enableFocus}
        .bentoCardTitle=${"Blogs"}
      >
        <div class="blog-list">
          ${BlogJson.posts.map(
            (entry: BlogEntryJson) => html`
              <blog-entry .blogEntry=${entry}></blog-entry>
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
