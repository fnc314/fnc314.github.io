import { configsService } from "@/services/configs/configs-service";
import { type AppConfigsChange } from "@/types/configs/app-configs";
import { CONFIG_COLOR_SCHEME_NAMES } from "@/types/theme/color-scheme-configs";
import { BREAKPOINT_LABELS, CSS_VARIABLE_BREAKPOINT_LABEL, readCSSProperty } from "@fnc314/design-tokens";
import { type BreakpointLabel } from "@fnc314/design-tokens/types/breakpoints.js";
import { LitElement } from "lit";
import { state } from "lit/decorators.js";

/**
 * An extension of {@link LitElement} which encapsulates interactivity
 *   with {@link configService} to expose `darkMode` as an internal {@link @state}
 *   by leveraging `connectedCallback` and `disconnectedCallbacak` for implementers.
 *   Also exposes `breakpoint` to expose (from `window` resize events) which
 *   {@link BreakpointLabel} is currently applicable *from the screen level*.
 *   The current {@link BreakpointLabel} is determined by {@link CSS_VARIABLE_BREAKPOINT_LABEL}
 *
 * @export
 * @abstract
 * @class UIModeAwareElement
 * @extends {LitElement}
 */
export abstract class UIAwareElement extends LitElement {
  @state()
  protected darkMode = configsService.loadConfigs().colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.DARK;

  private onAppConfigChange: (event: Event) => void = (event: Event) => {
    this.darkMode = (event as AppConfigsChange).detail
      ?.appConfigs
      ?.colorScheme
      ?.name === CONFIG_COLOR_SCHEME_NAMES.DARK;
  };

  /**
   * The {@link BreakpointLabel} as determined by *SCREEN* width against
   *   {@link BREAKPOINT_LABELS}
   */
  @state()
  protected breakpoint: BreakpointLabel = readCSSProperty(
    CSS_VARIABLE_BREAKPOINT_LABEL
  ) as BreakpointLabel;

  private onBreakpointChange: () => void = () => {
    this.breakpoint = readCSSProperty(
      CSS_VARIABLE_BREAKPOINT_LABEL
    ) as BreakpointLabel
  }

  override connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("resize", this.onBreakpointChange);
    configsService.addEventListener("app-configs.change", this.onAppConfigChange);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.onBreakpointChange);
    configsService.removeEventListener("app-configs.change", this.onAppConfigChange);
  }
};