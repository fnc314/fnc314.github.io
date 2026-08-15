import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { BlogEntryStyles } from "@/lib/publication/blog/entry/blog-entry.styles";
import { TextStyles } from "@/lib/styles";
import { Icons } from "@fnc314/packages.design-tokens";
import { type BlogEntryJson } from "@fnc314/packages.types";
import "iconify-icon";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export { type BlogEntryJson } from "@fnc314/packages.types";

export const TAG_NAME_BLOG_ENTRY: string = "blog-entry";

/**
 * @summary Represents a published series entry.
 *
 * @property {BlogEntryJson} [blogEntry] - The JSON record to render
 * @class BlogSeries
 * @extends {UIAwareElement}
 */
@customElement(TAG_NAME_BLOG_ENTRY)
export class BlogEntry extends UIAwareElement {
  /** {@link @lit/reactive-element!css} */
  static override styles = [TextStyles, BlogEntryStyles];

  @property({ type: Object })
  blogEntry: BlogEntryJson = {} as BlogEntryJson;

  override render() {
    const blogEntryPadded = this.blogEntry.series.entry.toString().padStart(2, "0");

    return html`
      <article
        class="dynamic-border-host"
        aria-labelledby="blog-name"
      >
        <header aria-labelledby="blog-name">
          <h3 id="blog-name" class="md-typescale-title-large">${this.blogEntry.title}</h3>
          <h4 class="md-typescale-title-small">${this.blogEntry.series.title} #${blogEntryPadded}</h4>
        </header>

        <section .ariaLabel=${`Synopsis for ${this.blogEntry.title}`}>
          <p class="md-typescale-body-large">${unsafeHTML(this.blogEntry.summary)}</p>
        </section>

        <footer aria-labelledby="medium-link-label">
          <md-divider inset></md-divider>
          <a
            href=${ifDefined(this.blogEntry.blogDotDevUrl)}
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="medium-link-label"
            aria-describedby="medium-link-label"
            title=${`Read ${this.blogEntry.title} on blog.fnc314.dev`}
          >
            <span class="icon-wrapper" aria-hidden="true">
              ${Icons.Logos.Fnc314.mask}
            </span>
            <span
              class="md-typescale-label-large"
              id="medium-link-label"
            >
              Read <em>${this.blogEntry.title}</em> on <pre>blog.fnc314.dev</pre>.
            </span>
          </a>
          <a
            href=${ifDefined(this.blogEntry.mediumUrl)}
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="medium-link-label"
            aria-describedby="medium-link-label"
            title=${`Read ${this.blogEntry.title} on Medium`}
          >
            <iconify-icon
              width="none"
              height="none"
              icon="simple-icons:medium"
              aria-hidden="true"
              style="
                width: var(--md-icon-size);
                height: var(--md-icon-size);
              "
              aria-labelledby="medium-link-label"
              ></iconify-icon>
            <span
              class="md-typescale-label-large"
              id="medium-link-label"
            >
              Read <em>${this.blogEntry.title}</em> on Medium<sup>&reg;</sup>
            </span>
          </a>
        </footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME_BLOG_ENTRY]: BlogEntry;
  }
}
