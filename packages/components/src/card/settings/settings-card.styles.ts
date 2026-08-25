import { type CSSResult, css } from "lit";

export const SettingsCardStyles: CSSResult = css`
  :host {
    block-size: 100%;
    display: block;

    --md-menu-item-leading-icon-color: var(--md-sys-color-primary);
    --md-menu-item-trailing-icon-color: var(--md-sys-color-primary);
    --md-menu-item-label-text-color: var(--md-sys-color-primary);

    --md-outlined-select-text-field-container-shape: var(--md-sys-shape-corner-small);
    --md-outlined-select-text-field-trailing-icon-size: var(--md-icon-size);

    --md-outlined-select-text-field-focus-input-text-color: var(--md-sys-color-primary);
    --md-outlined-select-text-field-focus-label-text-color: var(--md-sys-color-primary);
    --md-outlined-select-text-field-focus-trailing-icon-color: var(--md-sys-color-primary);
    --md-outlined-select-text-field-focus-outline-color: var(--md-sys-color-primary);
    --md-outlined-select-text-field-focus-outline-width: var(--sizes-thickness-xs);

    --md-outlined-select-text-field-hover-label-text-color: var(--md-sys-color-primary);
    --md-outlined-select-text-field-hover-input-text-color: var(--md-sys-color-primary);
    --md-outlined-select-text-field-hover-trailing-icon-color: var(--md-sys-color-primary);
    --md-outlined-select-text-field-hover-outline-color: var(--md-sys-color-primary);
    --md-outlined-select-text-field-hover-outline-width: var(--sizes-thickness-xs);
  }

  article {
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

          md-select-option {
            img {
              border-radius: var(--md-sys-shape-corner-extra-small);
              border: var(--md-sys-color-outline) solid var(--sizes-thickness-xs);
            }
            iconify-icon {
              inline-size: var(--md-icon-size);
              block-size: var(--md-icon-size);
            }
          }
        }
      }
    }

    footer {
      padding-block-start: var(--spaces-padding-m);
    }
  }

  @media screen and (width >= 1201px) {
    article {
      form {
        flex-direction: row;
        justify-content: space-evenly;
        gap: unset;
      }
    }
  }
`;
