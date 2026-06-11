import { configsService } from "@/services/configs/configs-service";
import { type AppConfigsChange } from "@/types/configs/app-configs";
import { CONFIG_COLOR_SCHEME_NAMES } from "@/types/theme/color-scheme-configs";
import { LitElement } from "lit";
import { state } from "lit/decorators.js";

/**
 * An extension of {@link LitElement} which encapsulates interactivity
 *   with {@link configService} to expose `darkMode` as an internal {@link @state}
 *   by leveraging `connectedCallback` and `disconnectedCallbacak` for implementers
 *
 * @export
 * @abstract
 * @class UIModeAwareElement
 * @extends {LitElement}
 */
export abstract class UIModeAwareElement extends LitElement {
  @state()
  protected darkMode = configsService.loadConfigs().colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.DARK;

  private onAppConfigChange: (event: Event) => void = (event: Event) => {
    this.darkMode = (event as AppConfigsChange).detail
      ?.appConfigs
      ?.colorScheme
      ?.name === CONFIG_COLOR_SCHEME_NAMES.DARK;
  };

  override connectedCallback(): void {
    super.connectedCallback();
    configsService.addEventListener("app-configs.change", this.onAppConfigChange);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    configsService.removeEventListener("app-configs.change", this.onAppConfigChange);
  }
};