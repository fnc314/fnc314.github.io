import { css } from "lit";
import { MaterialTypescaleStyles } from "@/styles/material-styles";

/**
 * @summary Styles for the ConnectCard component.
 * @packageDocumentation
 */
export const connectCardStyles = css`
  ${MaterialTypescaleStyles}
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

  .connections-list {
    display: flex;
    flex-direction: column;
  }

  .connection-link {
    text-decoration: none;
    color: var(--md-sys-color-primary);
  }
`;
