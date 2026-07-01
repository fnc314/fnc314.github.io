import { BENTO_BOX_TYPES } from "@/components/bento-layout/bento-layout.types";
import "@/components/blog/entry/blog-entry";
import "@/components/card/bento/bento-card";
import { BlogCardStyles } from "@/components/card/blog/blog-card.styles";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { TextStyles } from "@/styles/text";
import { Blogs } from "@fnc314/packages.data";
import { type BlogEntryJson } from "@fnc314/packages.types";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary BlogCard - A card component displaying blog posts.
 *
 * @element blog-card
 */
@customElement("blog-card")
export class BlogCard extends UIAwareElement {
  /** {@link lit!css} */
  static override styles = [
    TextStyles,
    BlogCardStyles
  ];

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
        .bentoCardTitle=${"Publications"}
        .bentoTag=${BENTO_BOX_TYPES.blog}
      >
        <div class="blog-list">
          ${Blogs.map(
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
