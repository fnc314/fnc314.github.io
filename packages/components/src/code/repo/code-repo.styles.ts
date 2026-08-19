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
    --code-repo-background-color: var(--md-sys-color-surface-container-high);
    --code-repo-link-color: var(--md-sys-color-tertiary);
    --code-repo-color: var(--md-sys-color-on-surface);

    --md-divider-color: var(--md-sys-color-on-surface-variant);
    --md-divider-thickness: var(--sizes-thickness-hairline);
    --dynamic-border-size: var(--sizes-width-l);
    --dynamic-border-background: var(--md-sys-color-primary-container);
    --dynamic-border-color: var(--code-repo-color);
    --word-tag-border-color: var(--md-sys-color-secondary);
    --word-tag-border-radius: var(--md-sys-shape-corner-medium);
    --word-tag-background-color: var(--md-sys-color-surface-container-lowest);
    --word-tag-color: var(--md-sys-color-on-surface-variant);

    align-self: stretch;
    box-sizing: border-box;
    display: block;
    flex-grow: 1;
    inline-size: 100%;
    min-inline-size: 0;
  }

  /* 3D Perspective container for the folding panel effect */
  article {
    container-type: inline-size;
    perspective: 1400px;
    transform-style: preserve-3d;
    background-color: var(--code-repo-background-color);
    block-size: 100%;
    border: var(--sizes-thickness-hairline) solid var(--code-repo-color);
    border-radius: var(--bento-layout-card-shape);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-inline-size: 0;
    overflow: hidden;
    padding-block: var(--spaces-padding-xs) var(--spaces-padding-xs);
    padding-inline: var(--spaces-padding-xl) var(--spaces-padding-xs);
  }

  .fold-top,
  .fold-bottom {
    transform-style: preserve-3d;
    transform: rotateX(0deg) translateY(0px);
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    background-color: var(--code-repo-background-color);
    will-change: transform;
  }

  .fold-top {
    transform-origin: bottom center;
  }

  .fold-bottom {
    transform-origin: top center;
  }

  /* Split and tilt fold sections synchronously when folded */
  article.is-folded {
    .fold-top {
      transform: translateY(-10px) rotateX(12deg);
    }
    .fold-bottom {
      transform: translateY(10px) rotateX(-12deg);
    }
  }

  header {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-xs);
    justify-content: space-between;
    margin-block: var(--spaces-margin-xs);
    min-inline-size: 0;

    h3 {
      color: var(--code-repo-color);
      margin: var(--spaces-none);
      word-break: break-word;
    }

    a {
      align-items: center;
      color: var(--code-repo-link-color);
      display: inline-flex;
      gap: var(--spaces-gap-xs);
      max-inline-size: 100%;
      min-inline-size: 0;
      overflow-wrap: break-word;
      text-decoration: none;
      word-break: break-all;
      flex-direction: row;


      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  md-divider {
    color: var(--code-repo-color);
    margin-block: var(--spaces-margin-m);
  }

  section.synopsis {
    min-inline-size: 0;

    p {
      color: var(--code-repo-color);
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
    margin-block-start: auto;

    ul {
      display: flex;
      flex-flow: row wrap;
      gap: var(--spaces-gap-s);
      list-style: none;
      margin: var(--spaces-none);
      padding: var(--spaces-none);

      & word-tag [slot="icon"] {
        display: flex;
        justify-content: center;
        block-size: var(--md-icon-size);
        flex-shrink: 0;
        inline-size: var(--md-icon-size);
        object-fit: contain;
      }
    }
  }

  code-reveal {
    display: block;
    width: 100%;
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
          margin-block-end: var(--spaces-margin-m);
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
