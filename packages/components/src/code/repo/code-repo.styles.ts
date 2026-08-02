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
    display: block;
    flex-grow: 1;
    inline-size: 100%;
    min-inline-size: 0;
  }

  /* 3D Perspective container for the folding panel effect */
  article {
    --dynamic-border-size: var(--sizes-width-l);
    container-type: inline-size;
    perspective: 1400px;
    transform-style: preserve-3d;
    background-color: var(--md-sys-color-surface);
    block-size: 100%;
    border: var(--sizes-thickness-hairline) solid var(--md-sys-color-outline-variant);
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
    background-color: var(--md-sys-color-surface);
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
    margin-block: var(--spaces-none) var(--spaces-margin-m);
  }

  section.synopsis {
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