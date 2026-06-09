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
    gap: var(--spacing-gap-s);
    height: 100%;

    section {
      padding-block: var(--spacing-padding-xs);

      header {
        h3 {
          color: var(--md-sys-color-secondary);
          padding-block: var(--spacing-padding-xs);
          text-align: center;
          margin: var(--spacing-reset);
        }

        md-divider {
          margin-block-end: var(--spacing-margin-m);
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        margin-block: var(--spacing-reset);
        list-style: none;
        padding: var(--spacing-reset);
      }
    }
  }

  .connection-links-label {
    color: var(--md-sys-color-secondary);
    padding-block: var(--spacing-padding-xs);
    text-align: center;
    margin-block: var(--spacing-reset);
  }

  .connection-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-gap-xs);
    margin: var(--spacing-reset);
    padding: var(--spacing-reset);
    padding-inline-start: var(--spacing-padding-s);
    padding-block: var(--spacing-padding-xs);

    img, md-icon {
      width: calc(var(--md-icon-size) * 0.75);
      height: calc(var(--md-icon-size) * 0.75);
      background-color: var(--md-sys-color-surface-container-highest);
      border-radius: var(--md-sys-shape-corner-full);
      padding: var(--spacing-padding-xs);
    }

    md-icon {
      color: var(--md-sys-color-on-surface-variant);
    }
  }

  .connections-list {
    display: flex;
    flex-direction: column;
    margin-block: var(--spacing-reset);
    list-style: none;
    padding: var(--spacing-reset);

    md-divider {
      margin-block-end: var(--spacing-margin-m);
    }
  }

  .connection-link {
    color: var(--md-sys-color-primary);
    text-decoration: none;
  }
`;
