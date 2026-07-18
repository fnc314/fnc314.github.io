import { DarkModeToggleSvgs } from "@fnc314/packages.design-tokens";
import { type CSSResult, css } from "lit";

/**
 * A {@link CSSResult} for {@link UiModeToggle}
 *
 * @cssprop --icons-components-ui-mode-toggle-dark-empty
 * @cssprop --icons-components-ui-mode-toggle-dark-filled
 * @cssprop --icons-components-ui-mode-toggle-default-empty
 * @cssprop --icons-components-ui-mode-toggle-default-filled
 * @cssprop --icons-components-ui-mode-toggle-light-empty
 * @cssprop --icons-components-ui-mode-toggle-light-filled
 * @cssprop --icons-components-ui-mode-toggle-check-box-dark
 * @cssprop --icons-components-ui-mode-toggle-check-box-light
 * @cssprop --icons-components-ui-mode-toggle-remember-checked-dark
 * @cssprop --icons-components-ui-mode-toggle-remember-checked-light
 * @cssprop --icons-components-ui-mode-toggle-remember-unchecked-dark
 * @cssprop --icons-components-ui-mode-toggle-remember-unchecked-light
 */
export const UIModeToggleStyles: CSSResult = css`
  :host {
    display: block;
  }

  dark-mode-toggle {
    --dark-mode-toggle-dark-icon: url('${DarkModeToggleSvgs.mode.dark.empty}');
    --dark-mode-toggle-light-icon: url('${DarkModeToggleSvgs.mode.light.empty}');
    --dark-mode-toggle-system-icon: url('${DarkModeToggleSvgs.mode.default.empty}');
    --dark-mode-toggle-checkbox-icon: url('${DarkModeToggleSvgs.checkbox.light}');
    --dark-mode-toggle-remember-icon-checked: url('${DarkModeToggleSvgs.remember.checked.light}');
    --dark-mode-toggle-remember-icon-unchecked: url('${DarkModeToggleSvgs.remember.unchecked.light}');
    --dark-mode-toggle-icon-size: 2rem;
    --dark-mode-toggle-color: var(--md-sys-color-on-surface-variant);
    --dark-mode-toggle-background-color: var(--colors-transparent);
    --dark-mode-toggle-active-mode-background-color: var(--colors-transparent);
    --dark-mode-toggle-legend-font: var(--md-ref-typeface-brand);
    --dark-mode-toggle-label-font: var(--md-ref-typeface-brand);
    --dark-mode-toggle-remember-font: var(--md-ref-typeface-brand);
    --dark-mode-toggle-icon-filter: none;
    --dark-mode-toggle-remember-filter: contrast(100%);

    display: contents;

    &::part(form) {
      display: contents;
    }

    &::part(fieldset) {
      display: flex;
      flex-direction: column;
      gap: var(--spaces-gap-xxs);
      padding-block: unset;
      padding-inline: unset;
    }

    &::part(legend) {
      border-block-end: var(--sizes-thickness-hairline) solid var(--md-sys-color-outline-variant);
      color: var(--md-sys-color-primary);
      font-family: var(--md-ref-typeface-brand);
      font-size: var(--md-sys-typescale-label-large-size);
      margin: var(--spaces-none);
      margin-block-end: var(--spaces-margin-xs);
      padding: var(--spaces-none);
      padding-block-end: var(--spaces-padding-xs);
    }

    &::part(permanentLabel) {
      color: var(--md-sys-color-on-surface-variant);
      display: inline-block;
      font-size: var(--md-sys-typescale-label-large-size);
      vertical-align: middle;
    }

    &::part(threeWayRadioWrapper) {
      border-color: var(--md-sys-color-on-surface-variant);
      border-radius: var(--md-sys-shape-corner-medium);
      border-style: solid;
      border-width: var(--sizes-thickness-hairline);
      display: inline-flex;
      overflow: hidden;
      padding: var(--spaces-none);
      position: relative;
      z-index: 0;
    }

    &::part(threeWayRadioWrapper)::before {
      background-color: var(--md-sys-color-surface-container);
      border-radius: inherit;
      content: "";
      inline-size: calc(100% / 3);
      inset-block: 0;
      position: absolute;
      transition: transform 0.3s ease-in-out;
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
        background-color: var(--md-sys-color-primary-container);
        transform: translateX(100%);
      }

      &::part(systemThreeWayLabel) {
        --dark-mode-toggle-system-icon: url('${DarkModeToggleSvgs.mode.default.filled}');

        color: var(--md-sys-color-on-primary-container);
      }
    }

    &:is([mode="light"][permanent]) {
      &::part(threeWayRadioWrapper)::before {
        background-color: var(--md-sys-color-primary-container);
        transform: translateX(0%);
      }

      &::part(lightThreeWayLabel) {
        --dark-mode-toggle-light-icon: url('${DarkModeToggleSvgs.mode.light.filled}');

        color: var(--md-sys-color-on-primary-container);
      }
    }

    &:is([mode="dark"][permanent]) {
      &::part(threeWayRadioWrapper)::before {
        background-color: var(--md-sys-color-primary-container);
        transform: translateX(200%);
      }

      &::part(darkThreeWayLabel) {
        --dark-mode-toggle-dark-icon: url('${DarkModeToggleSvgs.mode.dark.filled}');

        color: var(--md-sys-color-on-primary-container);
      }
    }

    &::part(lightThreeWayRadio),
    &::part(darkThreeWayRadio),
    &::part(systemThreeWayRadio) {
      /* Take the radio buttons out of the layout flow. The component"s internal styles already set opacity to 0. */
      position: absolute;
    }

    &::part(aside) {
      text-align: center;
      visibility: visible;
    }
  }

  dark-mode-toggle.dark {
    --dark-mode-toggle-checkbox-icon: url('${DarkModeToggleSvgs.checkbox.dark}');
    --dark-mode-toggle-remember-icon-checked: url('${DarkModeToggleSvgs.remember.checked.dark}');
    --dark-mode-toggle-remember-icon-unchecked: url('${DarkModeToggleSvgs.remember.unchecked.dark}');
  }
`;
