import { css } from "lit-element";

export const ThemeColors = css`
  :root {
    --md-sys-color-primary: #cc3333;
    --md-sys-color-secondary: #239c41;
    --md-sys-color-tertiary: #16239b;
    --md-sys-color-surface: #ffffff;
    --md-sys-color-surface-container-low: #f7f7f7;
    --md-sys-color-background: #117221;
    --md-sys-color-outline: #000000;
    --md-sys-color-outline-variant: #2742c7;
    --md-sys-color-surface-variant: #dfdfdf;
    --md-sys-color-on-surface-variant: #2742c7;
    --md-sys-color-shadow: #000000;
  }
`;

export const PartialArticleStyles = css`
  article {
    padding-block-start: 1rem;
  }
`;

export const ParialHeadingStyles = css`
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    --md-elevation-level: 3;
    border-radius: 1rem;
    padding: 1rem;

    h1 {
      margin-block: 1rem;
      font-size: 2.5rem;
      color: var(--md-sys-color-primary);
    }
  }
`;