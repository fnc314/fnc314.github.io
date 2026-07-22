import { type CSSResult, css } from "lit";

export const DL_DIV_COLUMN_COUNT: number = 6;

export const ConnectionsCardStyles: CSSResult = css`
  :host {
    display: block;
    block-size: 100%;

    --dl-div-column-count: ${DL_DIV_COLUMN_COUNT};

    --connections-card-filled-icon-button-container-shape: var(--bento-layout-card-shape);
    --connections-card-filled-icon-button-scale: 2.25;
    --connections-card-filled-icon-button-container-color: var(--bento-layout-card-background);
    --connections-card-filled-icon-button-container-size: calc(
      var(--connections-card-filled-icon-button-scale) * var(--md-icon-size)
    );
    --connections-card-filled-icon-button-container-shape: var(--bento-layout-card-shape);
    --connections-card-filled-icon-button-icon-color: var(--bento-layout-card-color);
    --connections-card-filled-icon-button-icon-scale: 0.75;
    --connections-card-filled-icon-button-icon-size: calc(
      var(--connections-card-filled-icon-button-icon-scale) * var(--connections-card-filled-icon-button-container-size)
    );

    --md-filled-icon-button-container-color: var(--connections-card-filled-icon-button-container-color);
    --md-filled-icon-button-container-height: var(--connections-card-filled-icon-button-container-size);
    --md-filled-icon-button-container-width: var(--connections-card-filled-icon-button-container-size);
    --md-filled-icon-button-container-shape: var(--connections-card-filled-icon-button-container-shape);
    --md-filled-icon-button-icon-color: var(--connections-card-filled-icon-button-icon-color);
    --md-filled-icon-button-icon-size: var(--connections-card-filled-icon-button-icon-size);
    --md-filled-icon-button-focus-icon-color: var(--connections-card-filled-icon-button-icon-color);
    --md-filled-icon-button-hover-icon-color: var(--connections-card-filled-icon-button-icon-color);
  }

  article {
    dl {
      display: flex;
      flex-direction: row;
      gap: var(--spaces-gap-s);
      flex-wrap: wrap;
      justify-content: space-around;

      div {
        display: grid;
        grid-template-rows: min-content auto;
        grid-template-columns: repeat(var(--dl-div-column-count), 1fr);
        row-gap: var(--spaces-gap-s);
        column-gap: var(--spaces-gap-xs);
        place-items: center;
        border-radius: var(--connections-card-filled-icon-button-container-shape);
        border: solid var(--sizes-thickness-xxs) var(--connections-card-filled-icon-button-icon-color);
        background-color: var(--md-sys-color-surface-container-highest);
        padding-block: var(--spaces-padding-s);
        flex: 1 0 min-content;

        dt {
          grid-row: 1 / 2;
          grid-column: span var(--dl-div-column-count);
          color: var(--connections-card-filled-icon-button-icon-color);
        }

        dd {
          grid-row: 2 / 3;
          margin: unset;
          border: solid var(--sizes-thickness-xxs) var(--connections-card-filled-icon-button-icon-color);
          border-radius: var(--connections-card-filled-icon-button-container-shape);
        }
      }
    }
  }
`;