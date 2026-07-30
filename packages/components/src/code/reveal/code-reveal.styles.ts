import { type CSSResult, css } from "lit";

/**
 * The {@link CSSResult} for inline reveals in {@link @fnc314/packages.components!CodeRepo}
 *
 * @type {CSSResult}
 */
export const CodeRevealStyles: CSSResult = css`
  :host {
    display: block;
    width: 100%;
    margin-block-start: var(--spaces-margin-m);
    animation: scale-in-ver-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes scale-in-ver-center {
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  article.reveal-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--md-sys-color-surface-container-low, var(--md-sys-color-surface));
    color: var(--md-sys-color-on-surface);
    border: solid var(--sizes-thickness-hairline) var(--md-sys-color-outline-variant);
    border-radius: var(--bento-layout-card-shape);
    padding: var(--spaces-padding-l);
    gap: var(--spaces-gap-m);

    button.close-btn {
      position: absolute;
      top: var(--spaces-padding-xs);
      right: var(--spaces-padding-xs);
      background: none;
      border: none;
      cursor: pointer;
      color: var(--md-sys-color-on-surface);

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

      slot[name="header-icon"] {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 20dvw;

        &::slotted(img) {
          aspect-ratio: 1;
          max-inline-size: 20dvw;
          object-fit: contain;
          border-radius: var(--md-sys-shape-corner-medium);
        }
      }

      h3 {
        margin: 0;
        color: var(--md-sys-color-on-surface);
      }
    }

    section {
      text-align: center;

      p, ul {
        margin: 0;
        color: var(--md-sys-color-on-surface-variant);
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
        color: var(--md-sys-color-primary);
        text-decoration: none;

        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
    }
  }
`;