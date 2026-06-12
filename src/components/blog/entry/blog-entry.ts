import { type BlogEntryJson } from "@/components/blog/entry/blog-entry.types";
import { UIAwareElement } from "@/mixins/ui-aware-element/ui-aware-element";
import { MaterialTypescaleStyles } from "@/styles";
import { InteractionStyles } from "@/styles/interaction-styles";
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
    MaterialTypescaleStyles,
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
      <article class="card">
        <div class="timeline-node" aria-hidden="true">
          <span>${blogEntryPadded}</span>
        </div>

        <div class="card-content">
          <header class="header">
            <h3 class="title md-typescale-title-large">
              ${this.blogEntry.title}
            </h3>
            <h4 class="md-typescale-title-small">
              ${this.blogEntry.series.title} #${blogEntryPadded}
            </h4>
          </header>

          <div class="blog-summary-container">
            <p class="md-typescale-body-medium blog-summary">${this.blogEntry.summary}</p>
          </div>

          <footer class="footer">
            <a
              class="medium-link md-typescale-body-small"
              href=${ifDefined(this.blogEntry.mediumUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                role="img"
                alt="Medium"
                .src=${logoSource}
              />
              <span>Read on Medium<sup>&reg;</sup></span>
            </a>

            <ul class="badge-list">
              ${this.blogEntry.tags?.map(tag => html`
                <li>
                  <word-tag
                    .word=${tag}
                    .variant=${"text"}
                    >
                  </word-tag>
                </li>
              `)}
            </ul>
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