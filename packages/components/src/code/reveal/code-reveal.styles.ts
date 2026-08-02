import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for inline reveals in {@link @fnc314/packages.components!CodeRepo}
 *
 * @type {CSSResult}
 */
export const CodeRevealStyles: CSSResult = css`
  :host {
    --md-icon-button-icon-size: calc(1.5 * var(--md-icon-size));
    --md-icon-button-icon-color: var(--md-sys-color-tertiary);
    --md-icon-button-focus-color: var(--md-sys-color-tertiary);
    --md-icon-button-focus-icon-color: var(--md-sys-color-tertiary);
    --md-icon-button-hover-icon-color: var(--md-sys-color-tertiary);

    --md-focus-ring-color: var(--md-sys-color-tertiary);

    --code-reveal-header-icon-inline-size: var(--sizes-dynamic-width-xs);
    --code-reveal-color: var(--md-sys-color-tertiary);

    display: block;
    width: 100%;
  }

  article.reveal-card {
    animation: unfold-panel 0.4s cubic-bezier(0.25, 1, 0.5, 1) both;
    transform-origin: top center;
  }

  article.reveal-card.is-closing {
    animation: fold-panel 0.4s cubic-bezier(0.25, 1, 0.5, 1) both;
    transform-origin: top center;
  }

  @keyframes unfold-panel {
    0% {
      transform: scaleY(0) rotateX(90deg);
      opacity: 0;
      max-height: 0;
      margin-block: 0;
      padding-block: 0;
      border-width: 0;
    }
    100% {
      transform: scaleY(1) rotateX(0deg);
      opacity: 1;
      max-height: 800px;
      margin-block: var(--spaces-margin-s);
      padding-block: var(--spaces-padding-l);
      border-width: var(--sizes-thickness-hairline);
    }
  }

  @keyframes fold-panel {
    0% {
      transform: scaleY(1) rotateX(0deg);
      opacity: 1;
      max-height: 800px;
      margin-block: var(--spaces-margin-s);
      padding-block: var(--spaces-padding-l);
      border-width: var(--sizes-thickness-hairline);
    }
    100% {
      transform: scaleY(0) rotateX(90deg);
      opacity: 0;
      max-height: 0;
      margin-block: 0;
      padding-block: 0;
      border-width: 0;
    }
  }

  article.reveal-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--md-sys-color-surface-container-highest);
    color: var(--code-reveal-color);
    border: solid var(--sizes-thickness-hairline) var(--code-reveal-color);
    border-radius: var(--bento-layout-card-shape);
    padding-inline: var(--spaces-padding-l);
    gap: var(--spaces-gap-m);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;

    button.close-btn {
      position: absolute;
      top: var(--spaces-padding-xs);
      right: var(--spaces-padding-xs);
      background: none;
      border: none;
      cursor: pointer;
      color: var(--code-reveal-color);

      md-icon {
        width: 2rem;
        height: 2rem;
      }
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spaces-gap-s);
      text-align: center;

      slot[name="header-icon"] {
        display: flex;
        justify-content: center;
        align-items: center;

        &::slotted(svg) {
          inline-size: var(--code-reveal-header-icon-inline-size);
        }
      }

      h3 {
        font-family: var(--md-ref-typeface-brand);
        margin: 0;
        color: var(--code-reveal-color);
      }
    }

    section {
      text-align: center;

      p, ul {
        margin: 0;
        color: var(--code-reveal-color);
      }

      ul {
        list-style: none;
        padding: 0;

        li pre {
          display: inline-block;
        }
      }

      p pre {
        display: inline-block;
      }
    }

    footer {
      display: flex;
      justify-content: center;

      a {
        color: var(--code-reveal-color);
        text-decoration: none;

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
    }
  }
`;