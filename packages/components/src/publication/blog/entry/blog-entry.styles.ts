import { DynamicBorderStyles } from "@/lib/styles";
import { type CSSResult, css } from "lit";

export const BlogEntryStyles: CSSResult = css`
  ${DynamicBorderStyles}
  :host {
    align-self: stretch;
    box-sizing: border-box;
    container-type: inline-size;
    display: block;
    flex-grow: 1;
    inline-size: 100%;
    min-inline-size: 0;

    --publication-blog-entry-color: var(--md-sys-color-on-surface);
    --publication-blog-entry-secondary-color: var(--md-sys-color-on-surface-variant);
    --publication-blog-entry-link-color: var(--md-sys-color-tertiary);
    --publication-blog-entry-background-color: var(--md-sys-color-surface-container-high);

    --dynamic-border-background: var(--md-sys-color-primary-container);
    --dynamic-border-size: var(--sizes-width-l);
    --dynamic-border-color: var(--publication-blog-entry-color);

  }

  article {
    background-color: var(--publication-blog-entry-background-color);
    block-size: 100%;
    border: var(--sizes-thickness-hairline) solid var(--publication-blog-entry-color);
    border-radius: var(--md-sys-shape-corner-medium);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-inline-size: 0;
    overflow: hidden;
    padding-block: var(--spaces-padding-xs);
    padding-inline: var(--spaces-padding-xl) var(--spaces-padding-xs);

    * {
      text-wrap: unset;
    }
  }

  .blog-top {
    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xs);
    justify-content: space-between;
    margin-block: var(--spaces-none);
    min-inline-size: 0;

    h3 {
      color: var(--publication-blog-entry-color);
      font-family: var(--md-ref-typeface-brand);
      margin-block: var(--spaces-none);
      margin-inline: var(--spaces-none);
      text-align: center;
      word-break: break-word;
    }

    .blog-links {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      gap: var(--spaces-gap-m);
      inline-size: 100%;
      justify-content: space-between;
      min-inline-size: 0;

      .link-placeholder {
        display: inline-block;
      }

      .blog-link {
        justify-content: flex-start;
      }

      .medium-link {
        justify-content: flex-end;
        margin-inline-start: auto;
      }
    }

    a {
      align-items: center;
      color: var(--publication-blog-entry-link-color);
      display: inline-flex;
      gap: var(--spaces-gap-s);
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }

      pre {
        display: inline;
      }

      span.icon-wrapper {
        display: contents;

        svg {
          inline-size: var(--md-icon-size);
          block-size: var(--md-icon-size);
        }
      }
    }
  }

  md-divider {
    color: var(--publication-blog-entry-color);
    margin-block: var(--spaces-margin-xs);
  }

  section.synopsis {
    min-inline-size: 0;

    p {
      color: var(--publication-blog-entry-color);
      margin-block: var(--spaces-none) var(--spaces-margin-xs);
      min-inline-size: 0;
      text-wrap: pretty;
      word-break: break-word;

      pre {
        display: inline;
      }
    }
  }

  @container (min-width: 385px) {
    article {
      gap: var(--spaces-gap-m);
      padding-block: var(--spaces-padding-xl) var(--spaces-padding-s);
      padding-inline: var(--spaces-padding-s) var(--spaces-padding-s);

      header {
        margin-block: var(--spaces-none);
      }

      section.synopsis {
        p {
          margin-block-end: var(--spaces-margin-s);
        }
      }
    }
  }

  @container (min-width: 1201px) {
    article {
      align-items: stretch;
      gap: var(--spaces-gap-l);
      padding-inline-end: unset;

      md-divider {
        display: none;
      }

      header {
        flex-direction: row;
        margin-block: var(--spaces-none);
      }
    }
  }
`;
