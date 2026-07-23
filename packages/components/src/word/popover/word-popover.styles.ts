import { type CSSResult, css } from "lit";

export const WordPopoverStyles: CSSResult = css`
  :host {
    --md-icon-size: calc(2 * var(--md-icon-size));
  }

  article {
    display: flex;
    flex-direction: column;
    block-size: 75%;
    inline-size: 75%;
    overflow-y: auto;
    overscroll-behavior: contain;
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    border: solid var(--sizes-thickness-hairline) var(--md-sys-color-on-surface-variant);
    border-radius: var(--bento-layout-card-shape);
    justify-content: space-around;

    header {
      display: grid;
      grid-template-areas: "icon header header";
      grid-template-columns: minmax(auto, 1fr) 1fr 1fr;
      place-items: center;

      slot[name="header-icon"] {
        grid-area: icon;

        &::slotted(img) {
          aspect-ratio: 1;
          max-inline-size: 33%;
          width: 33%;
        }
      }

      h3 {
        grid-area: header;
      }
    }

    section {
      padding-inline: var(--spaces-padding-m);
    }

    footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {

      }
    }
  }
`;