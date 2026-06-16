import { type CSSResult, css } from "lit";

export const ProfileCardStyles: CSSResult = css`
  :host {
    display: block;
    block-size: 100%;

    --md-filled-icon-button-container-color: var(--md-sys-color-primary-container);
    --md-filled-icon-button-container-height: calc(2 * var(--md-icon-size));
    --md-filled-icon-button-container-width: calc(2 * var(--md-icon-size));
    --md-filled-icon-button-container-shape: var(--md-sys-shape-corner-medium);
    --md-filled-icon-button-icon-color: var(--md-sys-color-on-primary-container);
    --md-filled-icon-button-icon-size: calc(1.5 * var(--md-icon-size));
  }

  article {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);

    section {
      figure {
        img {
          border: var(--sizes-thickness-xxs) solid var(--md-sys-color-primary);
          border-radius: var(--md-sys-shape-corner-medium);
          max-block-size: 300px;
          object-fit: contain;
          inline-size: 100%;
        }

        figcaption {
          color: var(--md-sys-color-on-surface-variant);
          font-size: var(--md-sys-typescale-body-small-size);
          margin-block-start: var(--spaces-margin-xs);
          text-align: center;
        }
      }
    }

    section.sub-section {
      display: flex;
      flex-direction: row;
      gap: var(--spaces-gap-m);
      margin-block-start: var(--spaces-margin-xs);
      align-items: center;

      h3 {
        flex: 1;
        flex-grow: 0;
        text-align: center;
        margin: var(--spaces-none);
      }

      ul {
        flex: 2;
        flex-grow: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        list-style: none;
        margin: var(--spaces-none);
        padding: var(--spaces-none);

        li {
          display: flex;
        }
      }
    }
  }

`;