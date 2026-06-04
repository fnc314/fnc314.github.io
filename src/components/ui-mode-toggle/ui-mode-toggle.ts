import {
  type ColorSchemeChangeEvent,
  DarkModeToggle,
  type PermanentColorSchemeEvent,
} from "dark-mode-toggle";
import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary A toggle component for switching between dark, light, and system color schemes.
 *
 * @element ui-mode-toggle
 */
@customElement("ui-mode-toggle")
export class UiModeToggle extends LitElement {
  /** The current color scheme mode. */
  @property({ type: String }) mode: "light" | "dark" | "system" = "system";

  /** Whether the color scheme is persisted. */
  @property({ type: Boolean }) permanent = false;

  @query("#dark-mode-toggle")
  private _darkModeToggle!: DarkModeToggle;

  static override styles = css`
    :host {
      place-items: center;
      display: contents;

      --dark-mode-toggle-icon-size: 2rem;
      --dark-mode-toggle-dark-icon: url("./icons/components/configs-dialog/dark-mode.svg");
      --dark-mode-toggle-light-icon: url("./icons/components/configs-dialog/light-mode.svg");
      --dark-mode-toggle-system-icon: url("./icons/components/configs-dialog/system.svg");
      --dark-mode-toggle-checkbox-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
      --dark-mode-toggle-remember-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="m424-410.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69L424-410.15ZM212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-760v560-560Z"/></svg>');
      --dark-mode-toggle-remember-icon-unchecked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
      --dark-mode-toggle-color: var(--md-sys-color-on-surface-variant);
      --dark-mode-toggle-background-color: transparent;
      --dark-mode-toggle-active-mode-background-color: transparent;
      --dark-mode-toggle-legend-font: var(--md-ref-typeface-brand);
      --dark-mode-toggle-label-font: var(--md-ref-typeface-brand);
      --dark-mode-toggle-remember-font: var(--md-ref-typeface-brand);
      --dark-mode-toggle-icon-filter: none;
      --dark-mode-toggle-remember-filter: contrast(100%);
    }

    dark-mode-toggle {
      display: contents;

      &::part(form) {
        display: contents;
      }

      &::part(fieldset) {
        padding: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-margin-xs);
        padding-inline: unset;
        padding-block: unset;
      }

      &::part(threeWayRadioWrapper) {
        position: relative;
        z-index: 0;
        border-radius: 1rem;
        border-color: var(--md-sys-color-on-surface-variant);
        border-width: var(--hairline-width);
        border-style: solid;
        margin-block-start: var(--spacing-margin-xs);
        display: inline-flex;
        padding: var(--spacing-reset);
        overflow: hidden;
      }

      &::part(threeWayRadioWrapper)::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: calc(100% / 3);
        background-color: var(--md-sys-color-surface-container-lowest);
        border-radius: inherit;
        transition: transform 0.3s ease-in-out;
        z-index: -1;
      }

      &::part(darkThreeWayLabel),
      &::part(lightThreeWayLabel),
      &::part(systemThreeWayLabel) {
        padding: var(--spacing-padding-s);
        position: relative;
        z-index: 1;
        flex: 1;
        text-align: center;
      }

      &:not([permanent]) {
        &::part(threeWayRadioWrapper)::before {
          transform: translateX(100%);
        }

        &::part(systemThreeWayLabel) {
          --dark-mode-toggle-system-icon: url("./icons/components/configs-dialog/system-filled.svg");

          color: var(--icon-fill-color);
        }
      }

      &:is([mode="light"][permanent]) {
        &::part(threeWayRadioWrapper)::before {
          transform: translateX(0%);
        }

        &::part(lightThreeWayLabel) {
          --dark-mode-toggle-light-icon: url("./icons/components/configs-dialog/light-mode-filled.svg");

          color: var(--icon-fill-color);
        }
      }

      &:is([mode="dark"][permanent]) {
        &::part(threeWayRadioWrapper)::before {
          transform: translateX(200%);
        }

        &::part(darkThreeWayLabel) {
          --dark-mode-toggle-dark-icon: url("./icons/components/configs-dialog/dark-mode-filled.svg");

          color: var(--icon-fill-color);
        }
      }

      &::part(lightThreeWayRadio),
      &::part(darkThreeWayRadio),
      &::part(systemThreeWayRadio) {
        position: absolute;
      }

      &::part(aside) {
        text-align: center;
        visibility: visible;
      }
    }

    dark-mode-toggle.dark {
      --dark-mode-toggle-checkbox-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
      --dark-mode-toggle-remember-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="m424-410.15-92.92-92.93q-8.31-8.3-20.89-8.5-12.57-.19-21.27 8.5-8.69 8.7-8.69 21.08 0 12.38 8.69 21.08l109.77 109.77q10.85 10.84 25.31 10.84 14.46 0 25.31-10.84l222.54-222.54q8.3-8.31 8.5-20.89.19-12.57-8.5-21.27-8.7-8.69-21.08-8.69-12.38 0-21.08 8.69L424-410.15ZM212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-760v560-560Z"/></svg>');
      --dark-mode-toggle-remember-icon-unchecked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" width="24px" fill="%23c12a1c"><path d="M212.31-140Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/></svg>');
    }
  `;

  render() {
    const classes = {
      dark: this.mode === "dark",
    };

    return html`
      <dark-mode-toggle
        .autofocus=${true}
        class="variant ${classMap(classes)}"
        id="dark-mode-toggle"
        ?permanent=${this.permanent}
        mode=${this.mode}
        appearance="three-way"
        legend="Choose UI Variant"
        system="System"
        light="Light"
        dark="Dark"
        remember="Persist UI Variant"
      ></dark-mode-toggle>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-mode-toggle": UiModeToggle;
  }
}
