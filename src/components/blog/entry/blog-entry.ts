import { type BlogEntryJson } from "@/components/blog/entry/blog-entry.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { InteractionStyles } from "@/styles/interaction-styles";
import { TextStyles } from "@/styles/text";
import { cssPropertyDataImage } from "@fnc314/design-tokens";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { BlogEntryStyles } from "./blog-entry.styles";

/**
 * @summary Represents a published series entry.
 *
 * @property {BlogEntryJson} [blogEntry] - The JSON record to render
 * @export
 * @class BlogSeries
 * @extends {UIAwareElement}
 */
@customElement("blog-entry")
export class BlogEntry extends UIAwareElement {
  static override styles = [
    TextStyles,
    InteractionStyles,
    BlogEntryStyles,
  ];

  @property({ type: Object })
  blogEntry: BlogEntryJson = {} as BlogEntryJson;

  override render() {
    // Correctly using your token-based image property pattern
    const logoSource = cssPropertyDataImage(
      `--icons-logos-organization-medium-${this.darkMode ? "light" : "dark"}`
    );
    const blogEntryPadded = this.blogEntry.series.entry.toString().padStart(2, "0");

    return html`
      <article>
        <div class="banner" aria-hidden="true">
          <span class="md-typescale-title-large">${blogEntryPadded}</span>
        </div>

        <div>
          <header>
            <h3 class="md-typescale-title-large">
              ${this.blogEntry.title}
            </h3>
            <h4 class="md-typescale-title-small">
              ${this.blogEntry.series.title} #${blogEntryPadded}
            </h4>
          </header>

          <div>
            <p class="md-typescale-body-medium">${this.blogEntry.summary}</p>
          </div>

          <footer>
            <a
              href=${ifDefined(this.blogEntry.mediumUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                role="img"
                aria-describedby="medium-link-label"
                .src=${logoSource}
              />
              <span id="medium-link-label">Read on Medium<sup>&reg;</sup></span>
            </a>

          </footer>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "blog-entry": BlogEntry;
  }
}