import "@/lib/card/bento/bento-card";
import { BlogCardStyles } from "@/lib/card/blog/blog-card.styles";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import "@/lib/publication/blog/entry/blog-entry";
import "@/lib/publication/blog/series/blog-series";
import { TextStyles } from "@/lib/styles";
import { Publications } from "@fnc314/packages.data";
import { BENTO_BOX_TYPES, type PublicationItem } from "@fnc314/packages.types";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

export const TAG_NAME_CARD_BLOG: string = "blog-card";
/**
 * @summary BlogCard - A card component displaying blog posts and series.
 *
 * @element blog-card
 */
@customElement(TAG_NAME_CARD_BLOG)
export class BlogCard extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, BlogCardStyles];

  @property({ type: Boolean })
  expanded = false;

  @property({ type: Boolean })
  enableHover = false;

  @property({ type: Boolean })
  enableFocus = false;

  override connectedCallback() {
    super.connectedCallback();
    this.id = BENTO_BOX_TYPES.blog;
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
          ${Publications.map((item: PublicationItem) =>
            item.type === "series"
              ? html`<blog-series .series=${item.series}></blog-series>`
              : html`<blog-entry .blogEntry=${item.post}></blog-entry>`
          )}
        </div>
      </bento-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME_CARD_BLOG]: BlogCard;
  }
}
