import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for {@link @fnc314/fnc314.github.io!CodeRepo}
 *
 * @type {CSSResult}
 */
export const CodeRepoStyles: CSSResult = css`
  :host {
    display: block;
    width: 100%;
    min-width: 0;
    align-self: stretch;
    flex-grow: 1;
    box-sizing: border-box;
    container-type: inline-size;
    container-name: code-repo-card;

    --md-divider-color: var(--md-sys-color-outline-variant);
    --md-divider-thickness: calc(var(--sizes-thickness-hairline) * 2);
    --word-tag-border-radius: var(--md-sys-shape-corner-medium);
    --word-tag-font-size: var(--md-sys-typescale-body-medium-size);
  }

  /* Option 2 Container Design Frame */
  .card {
    position: relative;
    background-color: var(--md-sys-color-surface-container);
    border: var(--globals-hairline-width) solid var(--md-sys-color-outline-variant);
    border-radius: var(--md-sys-shape-corner-medium);
    padding: var(--spacing-padding-m);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: flex-start;
    min-height: min-content;
    min-width: 0;

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
    gap: var(--spacing-gap-xxs);
    margin-top: var(--spacing-margin-reset);
    margin-bottom: var(--spacing-margin-s);
    min-width: 0;
  }

  .project-title {
    color: var(--md-sys-color-on-surface);
    margin: var(--spacing-margin-reset);
    word-break: break-word;
  }

  .repo-link {
    color: var(--md-sys-color-primary);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-gap-xs);
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
    margin-top: var(--spacing-margin-reset);
    margin-bottom: var(--spacing-margin-m);
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
    gap: var(--spacing-gap-s);
    margin-top: auto;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-gap-xs);
    margin: var(--spacing-margin-reset);
    padding: var(--spacing-margin-reset);
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
    display: block;
    margin-top: var(--spacing-margin-reset);
    margin-bottom: var(--spacing-margin-m);
  }

  /* ========================================================================== */
  /* ULTRA-DENSE MOBILE COMPRESSION (Container Width <= 300px)                 */
  /* ========================================================================== */
  @container code-repo-card (max-width: 300px) {
    .card {
      padding: var(--spacing-padding-s);
    }

    .header {
      margin-bottom: var(--spacing-margin-xs);
    }

    md-divider {
      margin-bottom: var(--spacing-margin-s);
    }

    .project-title {
      font-size: var(--md-sys-typescale-title-medium-size);
      line-height: var(--md-sys-typescale-title-medium-line-height);
    }

    .blurb {
      margin-bottom: var(--spacing-margin-s);
    }

    .tech-list {
      gap: var(--spacing-gap-xxs);
    }
  }

  /* ========================================================================== */
  /* ASYMMETRIC GRID BREAKPOINT (iPad Pro Portrait & Desktop Grid >= 500px)    */
  /* ========================================================================== */
  @container code-repo-card (min-width: 500px) {
    .card {
      padding: var(--spacing-padding-l);
    }

    .card-body-wrapper {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: var(--spacing-gap-l);
      align-items: start;
    }

    md-divider {
      display: none;
    }

    .header {
      margin-top: var(--spacing-margin-reset);
      margin-bottom: var(--spacing-margin-reset);
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
      margin-bottom: var(--spacing-margin-m);
    }

    .footer {
      margin-top: auto;
    }
  }
`;