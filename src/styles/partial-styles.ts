import { css } from "lit-element";
import { MaterialThemes } from "./material-styles.js";

export const ThemeColors = MaterialThemes.light;

export const PartialArticleStyles = css`
  article {
    padding-block-start: 1rem;
  }
`;

export const ParialHeadingStyles = css`
  ${ThemeColors}
  :root {
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
  }

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