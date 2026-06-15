import { css } from "lit";

/**
 * @summary Styles for the ConnectCard component.
 * @packageDocumentation
 */
export const ConnectCardStyles = css`
  :host {
    --md-divider-color: var(--md-sys-color-secondary);

    block-size: 100%;
    display: block;
  }

  bento-card {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spaces-gap-s);

    section {
      padding-block: var(--spaces-padding-xs);

      header {
        h3 {
          color: var(--md-sys-color-secondary);
          margin: var(--spaces-none);
          padding-block: var(--spaces-padding-xs);
          text-align: center;
        }

        md-divider {
          margin-block-end: var(--spaces-margin-m);
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-block: var(--spaces-none);
        padding: var(--spaces-none);
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
