import { readCSSProperty } from "@fnc314/packages.design-tokens";
import { configsService } from "@fnc314/packages.services";
import {
  type AppConfigsChange,
  type BreakpointLabel,
  CONFIG_COLOR_SCHEME_NAMES,
  CSS_VARIABLE_BREAKPOINT_LABEL,
  CSS_VARIABLE_TOUCH_SCREEN,
} from "@fnc314/packages.types";
import { type CSSResult, LitElement } from "lit";
import { state } from "lit/decorators.js";

/**
 * An extension of {@link LitElement} which encapsulates interactivity
 *   with {@link @fnc314/packages.services!configsService} to expose `darkMode` as an internal `@state`
 *   by leveraging `connectedCallback` and `disconnectedCallbacak` for implementers.
 *   Also exposes `breakpoint` to expose (from `window` resize events) which
 *   {@link @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel} is currently applicable *from the screen level*.
 *   The current {@link @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel} is determined by {@link @fnc314/packages.design-tokens!Breakpoints.CSS_VARIABLE_BREAKPOINT_LABEL}
 *
 * @abstract
 * @class UIModeAwareElement
 * @extends {LitElement}
 */
export abstract class UIAwareElement extends LitElement {
  /**
   * Default (empty) styles; concrete subclasses override with their own
   *   {@link @lit/reactive-element!css}-authored {@link @lit/reactive-element!CSSResult}s.
   */
  static override styles: CSSResult[] = [];

  @state()
  protected darkMode = configsService.loadConfigs().colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.DARK;

  private onAppConfigChange: (event: Event) => void = (event: Event) => {
    this.darkMode =
      (event as AppConfigsChange).detail?.appConfigs?.colorScheme?.name === CONFIG_COLOR_SCHEME_NAMES.DARK;
  };

  /**
   * The {@link @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel} as determined by *SCREEN* width against
   *   {@link @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT_LABELS}
   */
  @state()
  protected breakpoint: BreakpointLabel = readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL) as BreakpointLabel;

  private onBreakpointChange: () => void = () => {
    this.breakpoint = readCSSProperty(CSS_VARIABLE_BREAKPOINT_LABEL) as BreakpointLabel;
  };

  /**
   * Reads {@link @fnc314/packages.design-tokens!TouchScreen.CSS_VARIABLE_TOUCH_SCREEN} from `:root`
   *   and tests against `"true"`,
   */
  @state()
  protected touchScreen: boolean = readCSSProperty(CSS_VARIABLE_TOUCH_SCREEN, this, false) === "true";

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
}
