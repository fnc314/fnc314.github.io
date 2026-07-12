import { DynamicBorderStyles } from "@/lib/styles";
import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for {@link @fnc314/packages.components!CodeRepo}
 *
 * @type {CSSResult}
 */
export const CodeRepoStyles: CSSResult = css`
  ${DynamicBorderStyles}
  :host {
    --md-divider-color: var(--md-sys-color-on-surface-variant);
    --md-divider-thickness: var(--sizes-thickness-hairline);
    --dynamic-border-background: var(--md-sys-color-tertiary-container);
    --dynamic-border-color: var(--md-sys-color-on-tertiary-container);
    --word-tag-border-radius: var(--md-sys-shape-corner-medium);
    --word-tag-background-color: var(--md-sys-color-tertiary-container);
    --word-tag-color: var(--md-sys-color-on-tertiary-container);

    align-self: stretch;
    box-sizing: border-box;
    container-type: inline-size;
    display: block;
    flex-grow: 1;
    inline-size: 100%;
    min-inline-size: 0;
  }

  article {
    --dynamic-border-size: var(--sizes-width-l);

    background-color: var(--md-sys-color-surface);
    block-size: 100%;
    border: var(--sizes-thickness-hairline) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-medium);
    box-sizing: border-box;
    display: grid;
    grid-template-areas:
      "header"
      "divider"
      "description"
      "tech";
    grid-template-columns: 1fr;
    justify-content: flex-start;
    min-inline-size: 0;
    overflow: hidden;
    padding-block: var(--spaces-padding-xs) var(--spaces-padding-xs);
    padding-inline: var(--spaces-padding-xl) var(--spaces-padding-xs);
  }

  header {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xs);
    grid-area: header;
    justify-content: space-between;
    margin-block: var(--spaces-margin-xs);
    min-inline-size: 0;

    h3 {
      color: var(--md-sys-color-on-surface);
      margin-block: var(--spaces-none);
      margin-inline: var(--spaces-none);
      word-break: break-word;
    }

    a {
      align-items: center;
      color: var(--md-sys-color-primary);
      display: inline-flex;
      gap: var(--spaces-gap-xs);
      max-inline-size: 100%;
      min-inline-size: 0;
      overflow-wrap: break-word;
      text-decoration: none;
      word-break: break-all;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  md-divider {
    grid-area: divider;
    margin-block: var(--spaces-none) var(--spaces-margin-m);
  }

  section {
    grid-area: description;
    min-inline-size: 0;

    p {
      color: var(--md-sys-color-on-surface-variant);
      margin-block: var(--spaces-none) var(--spaces-margin-m);
      min-inline-size: 0;
      word-break: break-word;

      pre {
        display: inline;
        overflow-wrap: break-word;
        white-space: pre-wrap;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    grid-area: tech;
    margin-block-start: auto;

    ul {
      display: flex;
      flex-flow: row wrap;
      gap: var(--spaces-gap-s);
      list-style: none;
      margin: var(--spaces-none);
      padding: var(--spaces-none);

      & word-tag img,
      & word-tag [slot="icon"] {
        block-size: var(--md-icon-size);
        flex-shrink: 0;
        inline-size: var(--md-icon-size);
        object-fit: contain;
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
      gap: var(--spaces-gap-m);
      padding-block: var(--spaces-padding-xl) var(--spaces-padding-s);
      padding-inline: var(--spaces-padding-s) var(--spaces-padding-s);

      header {
        margin-block: var(--spaces-none);
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
      align-items: start;
      gap: var(--spaces-gap-l);
      grid-template-areas:
        "header description"
        "tech tech";
      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: auto 1fr;
      padding-block: var(--spaces-padding-xs);
      padding-inline-end: unset;
      padding-inline-start: var(--spaces-padding-xl);

      md-divider {
        display: none;
      }

      header {
        margin-block: var(--spaces-none);
      }
    }
  }
`;
