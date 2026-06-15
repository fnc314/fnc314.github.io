import { type CSSResult, css } from "lit";

export const SettingsCardStyles: CSSResult = css`
  :host {
    display: block;
    height: 100%;
  }

  .settings-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--spaces-gap-m); /* Gap between form and version-tag */
    justify-content: space-between;

    form {
      display: flex;
      flex-direction: column;
      gap: var(--spaces-gap-xl); /* Gap between fieldsets and ui-mode-toggle */
      flex: 1;
      padding: var(--spaces-none); /* Remove default form padding */
      border: none; /* Remove default form border */

      fieldset {
        border: none;
        margin: var(--spaces-none);
        padding: var(--spaces-none);
        display: flex;
        flex-direction: column;
        gap: var(--spaces-gap-s); /* Gap between label and select within a fieldset */

        legend {
          padding: var(--spaces-none);
          margin: var(--spaces-none);
          padding-block-end: var(--spaces-padding-xxs);
          border-bottom: var(--hairline-width) solid var(--md-sys-color-outline-variant);
          color: var(--md-sys-color-primary);
          font-family: var(--md-ref-typeface-brand);
        }

        md-outlined-select {
          padding-block-start: var(--spaces-padding-s);
        }
      }
    }

    version-tag {
      padding-block-start: var(--spaces-padding-m);
    }
  }
`;
