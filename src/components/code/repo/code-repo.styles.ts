import { type CSSResult, css } from "lit";

export const CodeRepoStyles: CSSResult = css`
  :host {
    display: inline-block;
    // max-width: 420px;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--md-sys-color-background);

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
    justify-content: space-evenly;
    gap: var(--spacing-gap-m);
  }

  /* Top Aesthetic Header Ribbon */
  .card::before {
    content: "";
    position: absolute;
    top: var(--sizes-none);
    left: var(--sizes-none);
    right: var(--sizes-none);
    height: var(--sizes-thickness-m);
    background-color: var(--md-sys-color-primary);
  }

  /* Header Zone */
  .header {
    display: flex;
    flex-direction: column;
  }

  .project-title {
    color: var(--md-sys-color-on-background);
    margin: var(--spacing-reset);
  }

  .repo-link {
    color: var(--md-sys-color-on-surface-variant);
    text-decoration: none;
    word-break: break-all;
    margin-block-start: var(--spacing-margin-xs);
    font-style: italic;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: var(--spacing-gap-xs);

    img {
      width: var(--sizes-width-l);
      height: var(--sizes-height-l);
      aspect-ratio: var(--sizes-ratio-square);
    }
  }

  .repo-link:hover, .repo-link:focus {
    text-decoration: underline;
    color: var(--md-sys-color-primary);
  }

  /* Clean Separation Layout Rule Lines */
  .divider {
    height: var(--globals-hairline-width);
    border: none;
    background-color: var(--md-sys-color-outline-variant);
    margin-block-end: var(--spacing-margin-s);
  }

  .divider.dashed {
    background-color: transparent;
    border-top: var(--globals-hairline-width) dashed var(--md-sys-color-outline-variant);
  }

  /* Body Text Summary Box */
  .blurb {
    color: var(--md-sys-color-on-surface);
    margin-block: var(--spacing-reset);

    pre {
      display: inline;
      overflow-wrap: break-word;
      white-space: pre-wrap;
    }
  }

  /* Technology Grid Footer Section */
  .tech-list {
    display: flex;
    flex-flow: row wrap;
    // flex-wrap: wrap;
    gap: var(--spacing-gap-s);
    padding: var(--spacing-reset);
    margin: var(--spacing-reset);
    list-style: none;

    li {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--spacing-gap-xs);

      img {
        width: var(--md-icon-size);
        height: var(--md-icon-size);
        aspect-ratio: var(--sizes-ratio-square);
      }
    }
  }

  .tech-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-gap-xs);
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
    border: 1px solid var(--md-sys-color-primary);
    border-radius: var(--md-sys-shape-corner-small);
    padding: var(--spacing-padding-xs) var(--spacing-padding-s);
    font-family: var(--md-typescale-label-medium-font);
    font-weight: var(--md-typescale-label-medium-weight);
    font-size: var(--md-typescale-label-medium-size);
    line-height: var(--md-typescale-label-medium-line-height);
  }

  .tech-icon {
    width: var(--md-icon-size);
    height: var(--md-icon-size);
    fill: currentColor;
    flex-shrink: 0;
  }
`;