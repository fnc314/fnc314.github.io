import { css } from "lit";

/**
 * @summary Styles for the ConnectCard component.
 * @packageDocumentation
 */
export const ConnectCardStyles = css`
  :host {
    --md-divider-color: var(--md-sys-color-secondary);

    --md-filled-tonal-icon-button-container-color: var(--md-sys-color-surface-container-high);
    --md-filled-tonal-icon-button-container-height: calc(2 * var(--md-icon-size));
    --md-filled-tonal-icon-button-container-width: calc(2 * var(--md-icon-size));
    --md-filled-tonal-icon-button-container-shape: var(--md-sys-shape-corner-small);
    --md-filled-tonal-icon-button-icon-color: var(--md-sys-color-on-surface-variant);
    --md-filled-tonal-icon-button-icon-size: calc(1.5 * var(--md-icon-size));

    block-size: 100%;
    display: block;
  }

  bento-card {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);

    ul {
      display: flex;
      flex-flow: row wrap;
      gap: var(--spaces-gap-l);
      list-style: none;
      margin: var(--spaces-none);
      padding: var(--spaces-none);

      li {
        display: block;
      }
    }
  }

  .connection-links-label {
    color: var(--md-sys-color-secondary);
    margin-block: var(--spaces-none);
    padding-block: var(--spaces-padding-xs);
    text-align: center;
  }

  .connection-list-item {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: var(--spaces-gap-xs);
    margin: var(--spaces-none);
    padding: var(--spaces-none);
    padding-block: var(--spaces-padding-xs);

    img, md-icon {
      background-color: var(--md-sys-color-surface-container-highest);
      block-size: calc(var(--md-icon-size));
      border-radius: var(--md-sys-shape-corner-full);
      inline-size: calc(var(--md-icon-size));
      padding: var(--spaces-padding-xs);
    }

    md-icon {
      color: var(--md-sys-color-on-surface-variant);
    }
  }

  .connections-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-block: var(--spaces-none);
    padding: var(--spaces-none);

    md-divider {
      margin-block-end: var(--spaces-margin-m);
    }
  }

  .connection-link {
    color: var(--md-sys-color-primary);
    text-decoration: none;
  }
`;
