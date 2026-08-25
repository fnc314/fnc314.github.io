import { readCSSProperty } from "@fnc314/packages.design-tokens";
import { configsService, themeService } from "@fnc314/packages.services";
import {
    type AppConfigsChangeEvent,
    type BreakpointLabel,
    CSS_VARIABLE_BREAKPOINT_LABEL,
    CSS_VARIABLE_TOUCH_SCREEN,
    EventNames,
    type IconVariants,
    ThemeNames
} from "@fnc314/packages.types";
import { type CSSResult, LitElement, type TemplateResult } from "lit";
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
  protected darkMode: boolean = configsService.loadConfigs().colorScheme.name === ThemeNames.Scheme.Dark;

  private onAppConfigChange: (event: AppConfigsChangeEvent) => void =
    (event: AppConfigsChangeEvent) => {
      this.darkMode =
        event.detail.appConfigs.colorScheme.name === ThemeNames.Scheme.Dark;
      this.requestUpdate();
    };

  /**
   * The {@link @fnc314/packages.design-tokens!Breakpoints.BreakpointLabel} as determined by *SCREEN* width against
   *   {@link @fnc314/packages.design-tokens!Breakpoints.BREAKPOINT_LABELS}
   */
  @state()
  protected breakpoint: BreakpointLabel = readCSSProperty(
    CSS_VARIABLE_BREAKPOINT_LABEL,
    window.document.documentElement
  ) as BreakpointLabel;

  private onBreakpointChange: () => void = () => {
    this.breakpoint = readCSSProperty(
      CSS_VARIABLE_BREAKPOINT_LABEL,
      window.document.documentElement
    ) as BreakpointLabel;
    this.requestUpdate();
  };

  /**
   * Reads {@link @fnc314/packages.design-tokens!TouchScreen.CSS_VARIABLE_TOUCH_SCREEN} from `:root`
   *   and tests against `"true"`,
   */
  @state()
  protected touchScreen: boolean = readCSSProperty(CSS_VARIABLE_TOUCH_SCREEN, window.document.documentElement, false) === "true";

  override connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("resize", this.onBreakpointChange);
    window.addEventListener(EventNames.Change.AppConfigs, this.onAppConfigChange);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.onBreakpointChange);
    window.removeEventListener(EventNames.Change.AppConfigs, this.onAppConfigChange);
  }

  /**
   * Parses the provided `variants` for the proper {@link TemplateResult}
   *   to render.  Conditionally bypasses logic involving {@link configsService}
   *   when `suppressVariation` is `true`.
   *
   * @protected
   * @param {IconVariants} variants An {@link IconVariants} instance
   * @param suppressVariation A flag which, when `true`, bypasses logic
   *   between {@link IconVariants.dark} and {@link IconVariants.light} in favor
   *   of {@link IconVariants.default}, if defined.  If missing, `getActiveIcon` is
   *   invoked again, but with `suppressVariation` forced to `false`.  The default
   *   is `false`.
   * @returns {TemplateResult} The rendered {@link TemplateResult}
   */
  protected getActiveIcon(variants: IconVariants, suppressVariation: boolean = false): TemplateResult {
    if (suppressVariation) {
      return variants.default ?? this.getActiveIcon(variants, false);
    } else {
      switch (configsService.loadConfigs().colorScheme.name) {
        case ThemeNames.Scheme.Dark:
          return variants.dark;
        case ThemeNames.Scheme.Light:
          return variants.light;
        case ThemeNames.Scheme.System:
        default:
          switch (themeService.deviceColorScheme()) {
            case ThemeNames.Scheme.Dark:
              return variants.dark;
            case ThemeNames.Scheme.Light:
              return variants.light;
            case ThemeNames.Scheme.System:
              return variants.default ?? variants.light;
            default:
              return variants.light;
          }
      }
    }
  }
}
