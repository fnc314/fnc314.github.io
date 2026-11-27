import { UIAwareElement } from "@/lib/mixins/ui-aware-element/ui-aware-element";
import { BlogSeriesStyles } from "@/lib/publication/blog/series/blog-series.styles";
import "@/lib/publication/blog/entry/blog-entry";
import { TextStyles } from "@/lib/styles";
import { AnalyticsService } from "@fnc314/packages.services";
import { type BlogSeriesData } from "@fnc314/packages.types";
import "iconify-icon";
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

export const TAG_NAME_BLOG_SERIES: string = "blog-series";

/**
 * @summary Represents a multi-part blog series containing multiple installments.
 *
 * @element blog-series
 */
@customElement(TAG_NAME_BLOG_SERIES)
export class BlogSeries extends UIAwareElement {
  static override styles = [TextStyles, BlogSeriesStyles];

  @property({ type: Object })
  series: BlogSeriesData = {} as BlogSeriesData;

  @state()
  private expanded: boolean = true;

  private toggleExpanded() {
    this.expanded = !this.expanded;
    AnalyticsService.trackEvent("toggle_series", {
      category: "engagement",
      label: this.series.title,
      series_id: this.series.id,
      expanded: this.expanded,
    });
  }

  override render() {
    const entryCount = this.series.entries?.length ?? 0;
    const countLabel = entryCount === 1 ? "1 part" : `${entryCount} parts`;

    return html`
      <div class="series-card dynamic-border-host" aria-labelledby="series-title-${this.series.id}">
        <header class="series-header">
          <div class="series-meta">
            <span class="series-badge">
              <iconify-icon icon="material-symbols:auto-stories-outline" aria-hidden="true"></iconify-icon>
              Series
            </span>
            <span class="series-count">${countLabel}</span>
          </div>

          <h3 id="series-title-${this.series.id}" class="series-title md-typescale-headline-small">
            ${this.series.title}
          </h3>

          ${when(
            this.series.description,
            () => html`<p class="series-description md-typescale-body-medium">${this.series.description}</p>`
          )}

          <button
            class="series-toggle-btn"
            type="button"
            aria-expanded=${this.expanded ? "true" : "false"}
            aria-controls="series-entries-${this.series.id}"
            @click=${this.toggleExpanded}
          >
            <iconify-icon
              icon=${this.expanded ? "material-symbols:expand-less" : "material-symbols:expand-more"}
              aria-hidden="true"
            ></iconify-icon>
            <span>${this.expanded ? "Hide Installments" : `Show All ${entryCount} Installments`}</span>
          </button>
        </header>

        ${when(
          this.expanded,
          () => html`
            <div id="series-entries-${this.series.id}" class="series-entries">
              ${this.series.entries.map(
                (entry) => html`<blog-entry .blogEntry=${entry}></blog-entry>`
              )}
            </div>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME_BLOG_SERIES]: BlogSeries;
  }
}
