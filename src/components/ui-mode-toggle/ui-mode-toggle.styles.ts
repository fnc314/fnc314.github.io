import { cssPropertyDataImage } from "@fnc314/design-tokens";
import { type CSSResult, css, unsafeCSS } from "lit";

export const UIModeToggleStyles: CSSResult = css`
  :host {
    display: block;
  }

  dark-mode-toggle {
    --dark-mode-toggle-icon-size: 2rem;
    --dark-mode-toggle-dark-icon: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-dark-empty"))});
    --dark-mode-toggle-light-icon: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-light-empty"))});
    --dark-mode-toggle-system-icon: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-default-empty"))});
    --dark-mode-toggle-checkbox-icon: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-check-box-light"))});
    --dark-mode-toggle-remember-icon-checked: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-remember-checked-light"))});
    --dark-mode-toggle-remember-icon-unchecked: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-remember-unchecked-light"))});
    --dark-mode-toggle-color: var(--md-sys-color-on-surface-variant);
    --dark-mode-toggle-background-color: transparent;
    --dark-mode-toggle-active-mode-background-color: transparent;
    --dark-mode-toggle-legend-font: var(--md-ref-typeface-brand);
    --dark-mode-toggle-label-font: var(--md-ref-typeface-brand);
    --dark-mode-toggle-remember-font: var(--md-ref-typeface-brand);
    --dark-mode-toggle-icon-filter: none;
    --dark-mode-toggle-remember-filter: contrast(100%);

    display: contents;
    place-items: center;

    &::part(form) {
      display: contents;
    }

    &::part(fieldset) {
      display: flex;
      flex-direction: column;
      gap: var(--spaces-gap-xxs);
      padding: unset;
      padding-block: unset;
      padding-inline: unset;
    }

    &::part(legend) {
      padding: var(--spaces-none);
      margin: var(--spaces-none);
      padding-block-end: var(--spaces-padding-xs);
      margin-block-end: var(--spaces-margin-xs);
      border-bottom: var(--hairline-width) solid var(--md-sys-color-outline-variant);
      color: var(--md-sys-color-primary);
      font-family: var(--md-ref-typeface-brand);
      font-size: var(--md-sys-typescale-label-large-size);
    }

    &::part(permanentLabel) {
      color: var(--md-sys-color-on-surface-variant);
      font-size: var(--md-sys-typescale-label-large-size);
      vertical-align: middle;
      display: inline-block;
    }

    &::part(threeWayRadioWrapper) {
      border-color: var(--md-sys-color-on-surface-variant);
      border-radius: var(--md-sys-shape-corner-medium);
      border-style: solid;
      border-width: var(--hairline-width);
      display: inline-flex;
      padding: var(--spaces-none);
      padding-block-start: var(--spaces-padding-xs);
      overflow: hidden;
      position: relative;
      z-index: 0;
    }

    &::part(threeWayRadioWrapper)::before {
      background-color: var(--md-sys-color-surface-container);
      border-radius: inherit;
      bottom: 0;
      content: "";
      position: absolute;
      top: 0;
      transition: transform 0.3s ease-in-out;
      width: calc(100% / 3);
      z-index: -1;
    }

    &::part(darkThreeWayLabel),
    &::part(lightThreeWayLabel),
    &::part(systemThreeWayLabel) {
      flex: 1;
      padding: var(--spaces-padding-s);
      position: relative;
      text-align: center;
      z-index: 1;
    }

    &:not([permanent]) {
      &::part(threeWayRadioWrapper)::before {
        transform: translateX(100%);
        background-color: var(--md-sys-color-primary-container);
      }

      &::part(systemThreeWayLabel) {
        --dark-mode-toggle-system-icon: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-default-filled"))});
        color: var(--md-sys-color-on-primary-container);
      }
    }

    &:is([mode="light"][permanent]) {
      &::part(threeWayRadioWrapper)::before {
        transform: translateX(0%);
        background-color: var(--md-sys-color-primary-container);
      }

      &::part(lightThreeWayLabel) {
        color: var(--md-sys-color-on-primary-container);
        --dark-mode-toggle-light-icon: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-light-filled"))});
      }
    }

    &:is([mode="dark"][permanent]) {
      &::part(threeWayRadioWrapper)::before {
        transform: translateX(200%);
        background-color: var(--md-sys-color-primary-container);
      }

      &::part(darkThreeWayLabel) {
        color: var(--md-sys-color-on-primary-container);
        --dark-mode-toggle-dark-icon: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-dark-filled"))});
      }
    }

    &::part(lightThreeWayRadio),
    &::part(darkThreeWayRadio),
    &::part(systemThreeWayRadio) {
      /* Take the radio buttons out of the layout flow.
The component"s internal styles already set opacity to 0. */
      position: absolute;
    }

    &::part(aside) {
      text-align: center;
      visibility: visible;
    }
  }

  dark-mode-toggle.dark {
    --dark-mode-toggle-checkbox-icon: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-check-box-dark"))});
    --dark-mode-toggle-remember-icon-checked: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-remember-checked-dark"))});
    --dark-mode-toggle-remember-icon-unchecked: url(${unsafeCSS(cssPropertyDataImage("--icons-components-ui-mode-toggle-remember-unchecked-dark"))});
  }
`;