import { DynamicBorderStyles } from "@/lib/styles";
import { type CSSResult, css } from "lit";

export const BlogSeriesStyles: CSSResult = css`
  ${DynamicBorderStyles}
  :host {
    align-self: stretch;
    box-sizing: border-box;
    container-type: inline-size;
    display: block;
    flex-grow: 1;
    inline-size: 100%;
    min-inline-size: 0;

    --series-color: var(--md-sys-color-on-surface);
    --series-secondary-color: var(--md-sys-color-on-surface-variant);
    --series-badge-bg: var(--md-sys-color-primary-container);
    --series-badge-color: var(--md-sys-color-on-primary-container);
    --series-card-bg: var(--md-sys-color-surface-container-high);
    --series-border-color: var(--series-color);

    --dynamic-border-background: var(--md-sys-color-primary-container);
    --dynamic-border-size: var(--sizes-width-l);
    --dynamic-border-color: var(--series-color);
  }

  .series-card {
    background-color: var(--series-card-bg);
    border: var(--sizes-thickness-hairline) solid var(--series-border-color);
    border-radius: var(--md-sys-shape-corner-medium);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    min-inline-size: 0;
    overflow: hidden;
    padding-block: var(--spaces-padding-m);
    padding-inline: var(--spaces-padding-xl) var(--spaces-padding-m);
  }

  .series-header {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xs);
    margin-block-start: var(--spaces-margin-xs);
  }

  @container (min-width: 385px) {
    .series-card {
      padding-block: var(--spaces-padding-xl) var(--spaces-padding-m);
      padding-inline: var(--spaces-padding-m);
    }

    .series-header {
      margin-block-start: var(--spaces-margin-s);
    }
  }

  @container (min-width: 1201px) {
    .series-card {
      padding-block: var(--spaces-padding-m);
      padding-inline: var(--spaces-padding-xl) var(--spaces-padding-m);
    }

    .series-header {
      margin-block-start: var(--spaces-none);
    }
  }

  .series-meta {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spaces-gap-xs);
  }

  .series-badge {
    align-items: center;
    background-color: var(--series-badge-bg);
    border-radius: var(--md-sys-shape-corner-small);
    color: var(--series-badge-color);
    display: inline-flex;
    font-size: var(--md-sys-typescale-label-small-font-size, 0.75rem);
    font-weight: 600;
    gap: var(--spaces-gap-xxs);
    letter-spacing: 0.05em;
    padding-block: var(--spaces-padding-xxs);
    padding-inline: var(--spaces-padding-xs);
    text-transform: uppercase;
  }

  .series-count {
    color: var(--series-secondary-color);
    font-size: var(--md-sys-typescale-body-small-font-size, 0.8rem);
  }

  .series-title {
    color: var(--series-color);
    font-family: var(--md-ref-typeface-brand);
    margin: var(--spaces-none);
    word-break: break-word;
  }

  .series-description {
    color: var(--series-secondary-color);
    margin: var(--spaces-none);
  }

  .series-toggle-btn {
    align-items: center;
    align-self: flex-start;
    background: transparent;
    border: 1px solid var(--series-secondary-color);
    border-radius: var(--md-sys-shape-corner-small);
    color: var(--series-color);
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: var(--md-sys-typescale-label-medium-font-size, 0.85rem);
    gap: var(--spaces-gap-xs);
    margin-block-start: var(--spaces-margin-xs);
    padding-block: var(--spaces-padding-xs);
    padding-inline: var(--spaces-padding-s);
    transition: background-color 0.2s ease;

    &:hover,
    &:focus-visible {
      background-color: var(--md-sys-color-surface-container-highest);
    }
  }

  .series-entries {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    margin-block-start: var(--spaces-margin-xs);
  }
`;
