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
    color: var(--md-sys-color-secondary)
  }

  .connections-list {
    display: flex;
    flex-direction: column;
  }

  .connection-link {
    color: var(--md-sys-color-primary);
    text-decoration: none;
  }
`;
