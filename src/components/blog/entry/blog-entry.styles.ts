import { type CSSResult, css } from "lit";

export const BlogEntryStyles: CSSResult = css`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
    container-type: inline-size;
    container-name: blog-entry-card;

    --blog-entry-timeline: 5;
    --blog-entry-card-content: 95;
  }

  article {
    position: relative;
    background-color: var(--md-sys-color-surface-bright);
    border: var(--globals-hairline-width) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-medium);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
    height: 100%;

    /* Formerly .timeline-node */
    > div.banner {
      background-color: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
      padding: var(--spaces-padding-xs);
      text-align: center;
      font-weight: var(--md-sys-typescale-title-medium-weight);
      font-family: var(--md-ref-typeface-brand);
      flex: var(--blog-entry-timeline);
    }

    /* Formerly .card-content */
    > div:last-of-type {
      padding: var(--spaces-padding-m);
      flex: var(--blog-entry-card-content);
      min-width: 0;

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
          color: var(--md-sys-color-primary);
        }
      }

      /* Summary container */
      div {
        p {
          color: var(--md-sys-color-on-surface-variant);
          margin-top: var(--spaces-none);
          margin-bottom: var(--spaces-margin-m);
          word-break: break-word;
          min-width: 0;
        }
      }

      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spaces-gap-s);

        a {
          display: inline-flex;
          align-items: center;
          gap: var(--spaces-gap-xs);
          color: var(--md-sys-color-inverse-surface);
          text-decoration: none;

          img {
            width: var(--md-icon-size);
            height: var(--md-icon-size);
          }
        }
      }
    }
  }

  /* Breakpoints: 300px and 500px */
  @container blog-entry-card (max-width: 500px) {
    article {
      flex-direction: row;

      div.banner {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;