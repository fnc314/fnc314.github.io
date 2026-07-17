import { type CSSResult, css } from "lit";

export const SettingsCardStyles: CSSResult = css`
  :host {
    block-size: 100%;
    display: block;
  }

  .settings-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--spaces-gap-m); /* Gap between form and version-tag */
    justify-content: space-between;

    form {
      border: none; /* Remove default form border */
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: var(--spaces-gap-xl); /* Gap between fieldsets and ui-mode-toggle */
      padding: var(--spaces-none); /* Remove default form padding */

      fieldset {
        border: none;
        display: flex;
        flex-direction: column;
        gap: var(--spaces-gap-s); /* Gap between label and select within a fieldset */
        margin: var(--spaces-none);
        padding: var(--spaces-none);

        legend {
          border-block-end: var(--sizes-thickness-hairline) solid var(--md-sys-color-outline-variant);
          color: var(--md-sys-color-primary);
          font-family: var(--md-ref-typeface-brand);
          margin: var(--spaces-none);
          padding: var(--spaces-none);
          padding-block-end: var(--spaces-padding-xxs);
        }

        md-outlined-select {
          padding-block-start: var(--spaces-padding-s);

          &#theme-select {
            --md-outlined-select-text-field-hover-outline-color: var(--md-sys-color-tertiary);
            --md-outlined-select-text-field-hover-outline-width: var(--sizes-thickness-xs);
            --md-outlined-select-container-color: var(--md-sys-color-tertiary);
          }

          md-select-option {
            img {
              border-radius: var(--md-sys-shape-corner-extra-small);
              border: var(--md-sys-color-outline) solid var(--sizes-thickness-xs);
            }
          }
        }
      }
    }

    version-tag {
      padding-block-start: var(--spaces-padding-m);
    }
  }
`;
