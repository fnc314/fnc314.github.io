import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { BlogEntryStyles } from "@/lib/publication/blog/entry/blog-entry.styles";
import { TextStyles } from "@/lib/styles";
import { readCSSProperty } from "@fnc314/packages.design-tokens";
import { type BlogEntryJson } from "@fnc314/packages.types";
import { html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

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
    BlogEntryStyles,
  ];

  @property({ type: Object })
  blogEntry: BlogEntryJson = {} as BlogEntryJson;

  override render() {
    const variant = this.darkMode ? "dark" : "light";

    // `*-css-url` resolves to `url("data:…")` for the decorative CSS border.
    const logoToken = `--icons-logos-organization-medium-${variant}-css-url-svg`;

    const blogEntryPadded = this.blogEntry.series.entry.toString().padStart(2, "0");
    const borderStyle = unsafeCSS(`
      --dynamic-border-background-image: var(${logoToken});
    `);

    const logoProperty = readCSSProperty(
      `--icons-logos-organization-medium-${variant}-data-image-svg-raw`
    );

    return html`
      <article class="dynamic-border-host" style="${borderStyle.cssText}">
        <header>
          <h3 class="md-typescale-title-large">
            ${this.blogEntry.title}
          </h3>
          <h4 class="md-typescale-title-small">
            ${this.blogEntry.series.title} #${blogEntryPadded}
          </h4>
        </header>

        <section>
          <p class="md-typescale-body-large">${this.blogEntry.summary}</p>
        </section>

        <footer>
          <md-divider inset></md-divider>
          <a
            href=${ifDefined(this.blogEntry.mediumUrl)}
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="medium-link-label"
            aria-describedby="medium-link-label"
            title="${`Read ${this.blogEntry.title} on Medium`}"
          >
            <img
              loading="lazy"
              role="img"
              aria-describedby="medium-link-label"
              .src=${logoProperty}
              alt="Medium logo"
            />
            <span class="md-typescale-label-large" id="medium-link-label">
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
    "blog-entry": BlogEntry;
  }
}