import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import { css } from "lit-element";
export const MaterialTypescaleStyles = typescaleStyles;
export const ParialHeadingStyles = css `
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    --md-elevation-level: 2;
    border-radius: 1rem;
    margin-block-start: 1rem;
    margin-inline: 1rem;
    background-color: var(--md-sys-color-primary-container);

    h1 {
      margin-block: 1rem;
      font-size: 2.5rem;
      color: var(--md-sys-color-on-primary-container);
    }
  }
`;
