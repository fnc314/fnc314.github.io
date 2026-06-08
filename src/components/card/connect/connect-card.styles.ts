import { css } from "lit";

/**
 * @summary Styles for the ConnectCard component.
 * @packageDocumentation
 */
export const connectCardStyles = css`

  :host {
    display: block;
    height: 100%;
  }

  .connect-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-margin-s);
    height: 100%;
  }

  .connection-label {
    margin-block-start: var(--spacing-margin-xs);
    color: var(--md-sys-color-secondary);
    margin-block-start: var(--spacing-margin-m);

    h3 {
      margin-block: var(--spacing-reset);
    }
  }

  dd {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing-margin-xs);
    margin: var(--spacing-reset);
    margin-inline-start: var(--spacing-margin-m);
    margin-block: var(--spacing-margin-xs);

    img, md-icon {
      width: var(--md-icon-size);
      height: var(--md-icon-size);
      background-color: var(--md-sys-color-primary-container);
      border-radius: var(--md-sys-shape-corner-full);
      padding: var(--spacing-padding-xs);
    }

    md-icon {
      color: var(--md-sys-color-on-primary-container);
    }
  }

  .connections-list {
    display: flex;
    flex-direction: column;
    margin-block: var(--spacing-reset);
  }

  .connection-links-wrapper {
    margin-block: var(--spacing-margin-s);
  }

  .connection-link {
    color: var(--md-sys-color-primary);
    text-decoration: none;
  }
`;
