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

    --md-divider-color: var(--md-sys-color-on-surface-variant);
    --md-divider-thickness: var(--sizes-thickness-hairline);
    --word-tag-border-radius: var(--md-sys-shape-corner-medium);
    --word-tag-background-color: var(--md-sys-color-tertiary-fixed);
    --word-tag-color: var(--md-sys-color-on-tertiary-fixed);
  }

  article {
    --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.full)};
    transition: --code-repo-word-tag-size 5ms ease-in-out;
  }

  /* Option 2 Container Design Frame */
  .card {
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
      right: 0;
      height: calc(var(--sizes-thickness-hairline) * 8);
      background-color: var(--md-sys-color-primary);
    }
  }

  .card-body-wrapper {
    min-width: 0;
  }

  /* Default Structural Layout Roles (Mobile Stack Flow <= 500px) */
  .header {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xxs);
    margin-top: var(--spaces-none);
    margin-bottom: var(--spaces-margin-s);
    min-width: 0;
  }

  .project-title {
    color: var(--md-sys-color-on-surface);
    margin: var(--spaces-none);
    word-break: break-word;
  }

  .repo-link {
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

  .blurb {
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

  .info-pane {
    min-width: 0;
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    margin-top: auto;
  }

  .tech-list {
    display: flex;
    flex-flow: row wrap;
    gap: var(--spaces-gap-s);
    margin: var(--spaces-none);
    padding: var(--spaces-none);
    list-style: none;

    & word-tag img,
    & word-tag [slot="icon"] {
      width: var(--md-icon-size);
      height: var(--md-icon-size);
      object-fit: contain;
      flex-shrink: 0;
    }
  }

  md-divider {
    margin-top: var(--spaces-none);
    margin-block-end: var(--spaces-margin-m);
  }

  /* ========================================================================== */
  /* ULTRA-DENSE MOBILE COMPRESSION (Container Width <= 300px)                  */
  /* ========================================================================== */
  @container code-repo-card (max-width: 300px) {
    article {
      --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.condensed)};
    }

    .card {
      padding: var(--spaces-padding-s);
      height: 100%;
      justify-content: space-between;
    }

    .header {
      margin-block-end: var(--spaces-margin-xs);
    }

    .project-title {
      font-size: var(--md-sys-typescale-title-medium-size);
      line-height: var(--md-sys-typescale-title-medium-line-height);
    }

    .blurb {
      margin-block-end: var(--spaces-margin-s);
    }

    .tech-list {
      gap: var(--spaces-gap-xs);
    }
  }

  /* ========================================================================== */
  /* ASYMMETRIC GRID BREAKPOINT (iPad Pro Portrait & Desktop Grid >= 500px)     */
  /* ========================================================================== */
  @container code-repo-card (min-width: 500px) {
    article {
      --code-repo-word-tag-size: ${unsafeCSS(WORD_TAG_SIZES.compact)};
    }

    .card {
      padding: var(--spaces-padding-l);
    }

    .card-body-wrapper {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: var(--spaces-gap-l);
      align-items: start;
    }

    md-divider {
      display: none;
    }

    .header {
      margin-block: var(--spaces-none);
    }

    .project-title {
      font-size: var(--md-sys-typescale-headline-small-size);
      line-height: var(--md-sys-typescale-headline-small-line-height);
      font-weight: var(--md-sys-typescale-headline-small-weight);
    }

    .info-pane {
      display: flex;
      flex-direction: column;
    }

    .blurb {
      margin-block-end: var(--spaces-margin-m);
    }

    .footer {
      margin-top: auto;
    }
  }
`;