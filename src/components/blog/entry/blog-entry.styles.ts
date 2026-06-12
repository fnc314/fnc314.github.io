import { type CSSResult, css } from "lit";

export const BlogEntryStyles: CSSResult = css`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
    container-type: inline-size;
    container-name: blog-entry-card;
  }

  .card {
    position: relative;
    background-color: var(--md-sys-color-surface-container-low);
    border: var(--globals-hairline-width) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-medium);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
  }

  /* Mobile: Number on Top */
  .timeline-node {
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
    padding: var(--spaces-padding-xs);
    text-align: center;
    font-weight: var(--md-sys-typescale-title-medium-weight);
    font-family: var(--md-ref-typeface-brand);
  }

  .card-content {
    padding: var(--spaces-padding-m);

    header {

      h3 {
        margin: var(--spaces-none);
        margin-block-end: var(--spaces-margin-xs);
        color: var(--md-sys-color-on-surface);
        font-family: var(--md-ref-typeface-brand);
      }

      h4 {
        margin: var(--spaces-none);
        margin-block-end: var(--spaces-margin-xs);
        font-style: italic;
      }
    }
  }

  .title {
    margin: var(--spaces-none);
    margin-block-end: var(--spaces-margin-s);
    color: var(--md-sys-color-on-surface);
  }

  .blog-summary-container {

    .blog-summary {
      color: var(--md-sys-color-on-surface-variant);
      margin-top: var(--spaces-none);
      margin-bottom: var(--spaces-margin-m);
      word-break: break-word;
      min-width: 0;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spaces-gap-s);
  }

  .medium-link {
    display: inline-flex;
    align-items: center;
    gap: var(--spaces-gap-xs);
    color: var(--md-sys-color-primary);
    text-decoration: none;

    img {
      width: var(--md-icon-size);
      height: var(--md-icon-size);
    }
  }

  .badge-list {
    display: flex;
    gap: var(--spaces-gap-xs);
    list-style: none;
    margin: var(--spaces-none);
    padding: var(--spaces-none);
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    word-tag {
      scroll-snap-align: start;
    }
  }

  .badge {
    padding: var(--spaces-padding-xxs) var(--spaces-padding-xs);
    background: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    border-radius: var(--md-sys-shape-corner-small);
    font-size: var(--md-sys-typescale-label-small-size);
  }

  /* Breakpoints: 300px and 500px */
  @container blog-entry-card (min-width: 500px) {
    .card { flex-direction: row; }

    .timeline-node {
      width: var(--sizes-width-xxxl); /* Mapped to 60px equivalent */
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
    }
  }
`;