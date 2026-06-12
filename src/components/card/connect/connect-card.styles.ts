import { css } from "lit";

/**
 * @summary Styles for the ConnectCard component.
 * @packageDocumentation
 */
export const ConnectCardStyles = css`
  :host {
    display: block;
    height: 100%;

    --md-divider-color: var(--md-sys-color-secondary);
  }

  bento-card {
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);
    height: 100%;

    section {
      padding-block: var(--spaces-padding-xs);

      header {
        h3 {
          color: var(--md-sys-color-secondary);
          padding-block: var(--spaces-padding-xs);
          text-align: center;
          margin: var(--spaces-none);
        }

        md-divider {
          margin-block-end: var(--spaces-margin-m);
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        margin-block: var(--spaces-none);
        list-style: none;
        padding: var(--spaces-none);
      }
    }
  }

  .connection-links-label {
    color: var(--md-sys-color-secondary);
    padding-block: var(--spaces-padding-xs);
    text-align: center;
    margin-block: var(--spaces-none);
  }

  .connection-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spaces-gap-xs);
    margin: var(--spaces-none);
    padding: var(--spaces-none);
    padding-inline-start: var(--spaces-padding-s);
    padding-block: var(--spaces-padding-xs);

    img, md-icon {
      width: calc(var(--md-icon-size) * 0.75);
      height: calc(var(--md-icon-size) * 0.75);
      background-color: var(--md-sys-color-surface-container-highest);
      border-radius: var(--md-sys-shape-corner-full);
      padding: var(--spaces-padding-xs);
    }

    md-icon {
      color: var(--md-sys-color-on-surface-variant);
    }
  }

  .connections-list {
    display: flex;
    flex-direction: column;
    margin-block: var(--spaces-none);
    list-style: none;
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
