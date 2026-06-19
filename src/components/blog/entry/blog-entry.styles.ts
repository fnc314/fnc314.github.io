import { DynamicBorderStyles } from "@/styles/dynamic-border";
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

    --dynamic-border-background: var(--md-sys-color-tertiary-container);
    --dynamic-border-size: var(--sizes-width-l);
  }

  article {
    background-color: var(--md-sys-color-surface);
    block-size: 100%;
    border: var(--sizes-thickness-hairline) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-medium);
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
      "header"
      "description"
      "footer";
    grid-template-columns: 1fr;
    justify-content: flex-start;
    min-inline-size: 0;
    overflow: hidden;
    padding-block: var(--spaces-padding-xs) var(--spaces-padding-xs);
    padding-inline: var(--spaces-padding-xl) var(--spaces-padding-xs);

    * {
      text-wrap: unset;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xxs);
    grid-area: header;
    justify-content: space-between;
    margin-block: var(--spaces-margin-xs);
    min-inline-size: 0;

    h3 {
      color: var(--md-sys-color-on-surface);
      font-family: var(--md-ref-typeface-brand);
      margin-block: var(--spaces-none);
      margin-inline: var(--spaces-none);
      word-break: break-word;
    }

    h4 {
      color: var(--md-sys-color-primary);
      font-style: italic;
      margin-block: var(--spaces-none);
      margin-inline: var(--spaces-none);
    }
  }

  section {
    grid-area: description;
    min-inline-size: 0;

    p {
      color: var(--md-sys-color-on-surface-variant);
      margin-block: var(--spaces-margin-xs);
      min-inline-size: 0;
      word-break: break-word;
    }
  }

  footer {
    align-items: center;
    display: flex;
    gap: var(--spaces-gap-s);
    grid-area: footer;
    justify-content: space-between;
    margin-block-start: auto;
    border-block-start: var(--sizes-thickness-hairline) solid var(--md-sys-color-secondary);
    padding-block-start: var(--spaces-padding-xs);

    a {
      align-items: center;
      color: var(--md-sys-color-inverse-surface);
      display: inline-flex;
      gap: var(--spaces-gap-s);
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }

      img {
        block-size: var(--md-icon-size);
        inline-size: var(--md-icon-size);
      }
    }
  }

  @container (min-width: 385px) {
    article {
      gap: var(--spaces-gap-m);
      padding-block: var(--spaces-padding-xl) var(--spaces-padding-s);
      padding-inline: var(--spaces-padding-m);

      header {
        margin-block: var(--spaces-none);
      }
    }
  }

  @container (min-width: 1201px) {
    article {
      align-items: start;
      gap: var(--spaces-gap-l);
      grid-template-areas:
        "header description"
        "header footer";
      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: auto 1fr;
      padding-block: var(--spaces-padding-xs);
      padding-inline-end: unset;
      padding-inline-start: var(--spaces-padding-xl);

      header {
        margin-block: var(--spaces-none);
      }
    }
  }
`;