import "@/lib/link/icon-text-link";
import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { BlogEntryStyles } from "@/lib/publication/blog/entry/blog-entry.styles";
import { TextStyles } from "@/lib/styles";
import { Icons } from "@fnc314/packages.design-tokens";
import { AnalyticsService } from "@fnc314/packages.services";
import { type BlogEntryJson, IconTextLinkOrientations } from "@fnc314/packages.types";
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
    const blogEntryPadded = this.blogEntry.series
      ? this.blogEntry.series.entry.toString().padStart(2, "0")
      : null;

    return html`
      <article
        class="dynamic-border-host"
        aria-labelledby="blog-name"
      >
        <div class="blog-top">
          <header aria-labelledby="blog-name">
            <h3 id="blog-name" class="md-typescale-title-large">${this.blogEntry.title}</h3>
            ${
              this.blogEntry.series && blogEntryPadded !== null
                ? html`<h4 class="md-typescale-title-small">${this.blogEntry.series?.title} #${blogEntryPadded}</h4>`
                : null
            }
            <div class="blog-links">
              ${
                this.blogEntry.blogDotDevUrl
                  ? html`
                    <icon-text-link
                      class="blog-link"
                      .orientation=${IconTextLinkOrientations.ICON_FIRST}
                      .text=${"blog.fnc314.dev"}
                      .icon=${Icons.Logos.Fnc314.mask}
                      .link=${this.blogEntry.blogDotDevUrl}
                      .newTab=${true}
                      .ariaLabelText=${`Read ${this.blogEntry.title} on blog.fnc314.dev`}
                      @click=${() => {
                        AnalyticsService.trackEvent("click_outbound", {
                          category: "outbound",
                          label: `Blog: ${this.blogEntry.title}`,
                          destination: this.blogEntry.blogDotDevUrl,
                          article_title: this.blogEntry.title,
                          series_title: this.blogEntry.series?.title,
                          series_entry: this.blogEntry.series?.entry,
                          platform: "blog.fnc314.dev",
                        });
                      }}
                    ></icon-text-link>
                  `
                  : html`<span class="link-placeholder"></span>`
              }
              ${
                this.blogEntry.mediumUrl
                  ? html`
                    <icon-text-link
                      class="medium-link"
                      .orientation=${IconTextLinkOrientations.TEXT_FIRST}
                      .text=${"Medium.com"}
                      .icon=${"simple-icons:medium"}
                      .link=${this.blogEntry.mediumUrl}
                      .newTab=${true}
                      .ariaLabelText=${`Read ${this.blogEntry.title} on Medium`}
                      @click=${() => {
                        AnalyticsService.trackEvent("click_outbound", {
                          category: "social",
                          label: `Medium: ${this.blogEntry.title}`,
                          destination: this.blogEntry.mediumUrl,
                          article_title: this.blogEntry.title,
                          series_title: this.blogEntry.series?.title,
                          series_entry: this.blogEntry.series?.entry,
                          platform: "medium",
                        });
                      }}
                    ></icon-text-link>
                  `
                  : html`<span class="link-placeholder"></span>`
              }
            </div>
          </header>

          <md-divider inset></md-divider>

          <section class="synopsis" .ariaLabel=${`Synopsis for ${this.blogEntry.title}`}>
            <p class="md-typescale-body-large">${unsafeHTML(this.blogEntry.summary)}</p>
          </section>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME_BLOG_ENTRY]: BlogEntry;
  }
}
