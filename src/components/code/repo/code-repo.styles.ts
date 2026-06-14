import { WORD_TAG_SIZES } from "@/components/code/repo/code-repo.types";
import { type CSSResult, css, unsafeCSS } from "lit";

/**
 * The {@link CSSResult} for {@link @fnc314/fnc314.github.io!CodeRepo}
 *
 * @type {CSSResult}
 */
export const CodeRepoStyles: CSSResult = css`
  @property --code-repo-word-tag-size {
    /* 1. Use unsafeCSS for strings.
       2. Ensure the resulting CSS has quotes around the syntax value. */
    // syntax: "${unsafeCSS(`${WORD_TAG_SIZES.full} | ${WORD_TAG_SIZES.compact} | ${WORD_TAG_SIZES.condensed}`)}";
    syntax: "<custom-ident>";
    initial-value: ${unsafeCSS(WORD_TAG_SIZES.condensed)};
    inherits: false;
  }

  :host {
    display: block;
    width: 100%;
    min-width: 0;
    align-self: stretch;
    flex-grow: 1;
    box-sizing: border-box;
    container-type: inline-size;
    container-name: code-repo-card;

    --code-repo-banner-thickness: calc(var(--sizes-thickness-hairline) * 8);
    --code-repo-banner-color: var(--md-sys-color-primary);

    --md-divider-color: var(--md-sys-color-on-surface-variant);
    --md-divider-thickness: var(--sizes-thickness-hairline);
    --word-tag-border-radius: var(--md-sys-shape-corner-medium);
    --word-tag-background-color: var(--md-sys-color-tertiary-fixed-dim);
    --word-tag-color: var(--md-sys-color-on-tertiary-fixed);
  }

  article {
    --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.full)};
    transition: --code-repo-word-tag-size 5ms ease-in-out;

    position: relative;
    background-color: var(--md-sys-color-surface-bright);
    border: var(--globals-hairline-width) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-medium);
    padding: var(--spaces-padding-m);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: flex-start;
    min-width: 0;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: var(--code-repo-banner-thickness);
      background-color: var(--code-repo-banner-color);
    }

    /* Formerly .card-body-wrapper */
    > div {
      min-width: 0;

      /* Default Structural Layout Roles (Mobile Stack Flow <= 500px) */
      header {
        display: flex;
        flex-direction: column;
        gap: var(--spaces-gap-xxs);
        margin-top: var(--spaces-none);
        margin-bottom: var(--spaces-margin-s);
        min-width: 0;

        h3 {
          color: var(--md-sys-color-on-surface);
          margin: var(--spaces-none);
          word-break: break-word;
        }

        a {
          color: var(--md-sys-color-primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: var(--spaces-gap-xs);
          min-width: 0;
          max-width: 100%;

          & img {
            width: var(--md-icon-size);
            height: var(--md-icon-size);
            flex-shrink: 0;
          }

          & span {
            min-width: 0;
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
        margin-top: var(--spaces-none);
        margin-block-end: var(--spaces-margin-m);
      }

      /* Formerly .info-pane */
      > div {
        min-width: 0;

        p {
          color: var(--md-sys-color-on-surface-variant);
          margin-top: var(--spaces-none);
          margin-bottom: var(--spaces-margin-m);
          word-break: break-word;
          min-width: 0;

          pre {
            display: inline;
            overflow-wrap: break-word;
            white-space: pre-wrap;
          }
        }

        footer {
          display: flex;
          flex-direction: column;
          gap: var(--spaces-gap-s);
          margin-top: auto;

          ul {
            display: flex;
            flex-flow: row wrap;
            gap: var(--spaces-gap-s);
            margin: var(--spaces-none);
            padding: var(--spaces-none);
            list-style: none;

            & word-tag img,
            & word-tag [slot=\"icon\"] {
              width: var(--md-icon-size);
              height: var(--md-icon-size);
              object-fit: contain;
              flex-shrink: 0;
            }
          }
        }
      }
    }
  }

  @container code-repo-card (max-width: 500px) {
    article {
      --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.compact)};

      padding: var(--spaces-padding-l);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: unset;
        width: unset;
        height: var(--code-repo-banner-thickness);
        background-color: var(--code-repo-banner-color);
      }

      > div {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: var(--spaces-gap-l);
        align-items: start;

        md-divider { display: none; }
        header {
          margin-block: var(--spaces-none);
          h3 {
            font-size: var(--md-sys-typescale-headline-small-size);
            line-height: var(--md-sys-typescale-headline-small-line-height);
            font-weight: var(--md-sys-typescale-headline-small-weight);
          }
        }

        > div {
          display: flex;
          flex-direction: column;
          p { margin-block-end: var(--spaces-margin-m); }
          footer { margin-top: auto; }
        }
      }
    }
  }

  @container code-repo-card (max-width: 300px) {
    article {
      --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.condensed)};

      padding: var(--spaces-padding-s);
      justify-content: space-between;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: var(--code-repo-banner-thickness);
        background-color: var(--code-repo-banner-color);
      }

      > div {
        header {
          margin-block-end: var(--spaces-margin-xs);

          h3 {
            font-size: var(--md-sys-typescale-title-medium-size);
            line-height: var(--md-sys-typescale-title-medium-line-height);
          }
        }

        > div {
          p { margin-block-end: var(--spaces-margin-s); }
          footer ul { gap: var(--spaces-gap-xs); }
        }
      }
    }
  }
`;