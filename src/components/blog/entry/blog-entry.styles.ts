import { DynamicBorderStyles } from "@/styles/dynamic-border";
import { type CSSResult, css } from "lit";

export const BlogEntryStyles: CSSResult = css`
  ${DynamicBorderStyles}
  :host {
    display: block;
    inline-size: 100%;
    min-inline-size: 0;
    align-self: stretch;
    flex-grow: 1;
    box-sizing: border-box;
    container-type: inline-size;
  }

  article {
    --dynamic-border-size: var(--sizes-width-l);

    background-color: var(--md-sys-color-surface-bright);
    border: var(--globals-hairline-width) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-medium);
    padding-block-start: var(--spaces-padding-xs);
    padding-block-end: var(--spaces-padding-xs);
    padding-inline-start: var(--spaces-padding-xl);
    padding-inline-end: var(--spaces-padding-xs);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "description"
      "footer";
    box-sizing: border-box;
    overflow: hidden;
    justify-content: flex-start;
    min-inline-size: 0;
    block-size: 100%;
  }

  header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xxs);
    justify-content: space-between;
    margin-block: var(--spaces-margin-xs);
    min-inline-size: 0;

    h3 {
      margin-block: var(--spaces-none);
      margin-inline: var(--spaces-none);
      color: var(--md-sys-color-on-surface);
      font-family: var(--md-ref-typeface-brand);
      word-break: break-word;
    }

    h4 {
      margin-block: var(--spaces-none);
      margin-inline: var(--spaces-none);
      font-style: italic;
      color: var(--md-sys-color-primary);
    }
  }

  section {
    grid-area: description;
    min-inline-size: 0;

    p {
      color: var(--md-sys-color-on-surface-variant);
      margin-block: var(--spaces-margin-xs);
      word-break: break-word;
      min-inline-size: 0;
    }
  }

  footer {
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spaces-gap-s);
    margin-block-start: auto;

    a {
      display: inline-flex;
      align-items: center;
      gap: var(--spaces-gap-xs);
      color: var(--md-sys-color-inverse-surface);
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }

      img {
        inline-size: var(--md-icon-size);
        block-size: var(--md-icon-size);
      }
    }
  }

  @container (min-width: 385px) {
    article {
      padding-block-start: var(--spaces-padding-xl);
      padding-block-end: var(--spaces-padding-s);
      padding-inline: var(--spaces-padding-m);
      gap: var(--spaces-gap-m);

      header {
        margin-block: var(--spaces-none);

        h3 {
          font-size: var(--md-sys-typescale-title-large-size);
          line-height: var(--md-sys-typescale-title-large-line-height);
        }
      }
    }
  }

  @container (min-width: 1201px) {
    article {
      padding-block: var(--spaces-padding-xs);
      padding-inline-start: var(--spaces-padding-xl);
      padding-inline-end: unset;

      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "header description"
        "header footer";
      gap: var(--spaces-gap-l);
      align-items: start;

      header {
        margin-block: var(--spaces-none);

        h3 {
          font-size: var(--md-sys-typescale-headline-small-size);
          line-height: var(--md-sys-typescale-headline-small-line-height);
          font-weight: var(--md-sys-typescale-headline-small-weight);
        }
      }
    }
  }
`;