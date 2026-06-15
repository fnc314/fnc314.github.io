import { DynamicBorderStyles } from "@/styles/dynamic-border";
import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for {@link @fnc314/fnc314.github.io!CodeRepo}
 *
 * @type {CSSResult}
 */
export const CodeRepoStyles: CSSResult = css`
  ${DynamicBorderStyles}
  :host {
    display: block;
    inline-size: 100%;
    min-inline-size: 0;
    align-self: stretch;
    flex-grow: 1;
    box-sizing: border-box;
    container-type: inline-size;

    --md-divider-color: var(--md-sys-color-on-surface-variant);
    --md-divider-thickness: var(--sizes-thickness-hairline);
    --word-tag-border-radius: var(--md-sys-shape-corner-medium);
    --word-tag-background-color: var(--md-sys-color-inverse-primary);
    --word-tag-color: var(--md-sys-color-inverse-on-surface);
  }

  article {
    --dynamic-border-size: var(--sizes-width-l);

    position: relative;
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
      "divider"
      "description"
      "tech";
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
    margin-block: var(--spaces-margin-xs);
    min-inline-size: 0;

    h3 {
      color: var(--md-sys-color-on-surface);
      margin-block: var(--spaces-none);
      margin-inline: var(--spaces-none);
      word-break: break-word;
    }

    a {
      color: var(--md-sys-color-primary);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: var(--spaces-gap-xs);
      min-inline-size: 0;
      max-inline-size: 100%;

      & img {
        inline-size: var(--md-icon-size);
        block-size: var(--md-icon-size);
        flex-shrink: 0;
      }

      & span {
        min-inline-size: 0;
        word-break: break-all;
        overflow-wrap: break-word;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  md-divider {
    grid-area: divider;
    margin-block-start: var(--spaces-none);
    margin-block-end: var(--spaces-margin-m);
  }

  section {
    grid-area: description;
    min-inline-size: 0;

    p {
      color: var(--md-sys-color-on-surface-variant);
      margin-block-start: var(--spaces-none);
      margin-block-end: var(--spaces-margin-m);
      word-break: break-word;
      min-inline-size: 0;

      pre {
        display: inline;
        overflow-wrap: break-word;
        white-space: pre-wrap;
      }
    }
  }

  footer {
    grid-area: tech;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    margin-block-start: auto;

    ul {
      display: flex;
      flex-flow: row wrap;
      gap: var(--spaces-gap-s);
      margin-block: var(--spaces-none);
      margin-inline: var(--spaces-none);
      padding-block: var(--spaces-none);
      padding-inline: var(--spaces-none);
      list-style: none;

      & word-tag img,
      & word-tag [slot=\"icon\"] {
        inline-size: var(--md-icon-size);
        block-size: var(--md-icon-size);
        object-fit: contain;
        flex-shrink: 0;
      }
    }
  }

  /**
   * Tablet Scenario: Screen 769px - 1200px.
   * Widget is 1/2 width (3 out of 6 columns).
   * Container width range: ~385px to 600px.
   */
  @container (min-width: 385px) {
    article {
      padding-block-start: var(--spaces-padding-xl);
      padding-block-end: var(--spaces-padding-s);
      padding-inline-start: var(--spaces-padding-s);
      padding-inline-end: var(--spaces-padding-s);
      gap: var(--spaces-gap-m);

      header {
        margin-block: var(--spaces-none);
        h3 {
          font-size: var(--md-sys-typescale-title-large-size);
          line-height: var(--md-sys-typescale-title-large-line-height);
        }
      }

      section {
        p {
          margin-block-end: var(--spaces-margin-m);
        }
      }
    }
  }

  /**
   * Desktop Scenario: Screen 1201px+.
   * Widget is full width (12 out of 12 columns).
   * Container width range: 1201px+.
   */
  @container (min-width: 1201px) {
    article {
      padding-block: var(--spaces-padding-xs);
      padding-inline-start: var(--spaces-padding-xl);
      padding-inline-end: unset;

      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "header description"
        "header tech";
      gap: var(--spaces-gap-l);
      align-items: start;

      md-divider {
        display: none;
      }

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