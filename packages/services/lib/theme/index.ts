import { type ConfigsService, configsService } from "@/lib/configs";
import { THEME_CONFIGS } from "@/lib/theme/theme";
import {
  CONFIG_COLOR_CONTRAST_NAMES,
  CONFIG_COLOR_SCHEME_NAMES,
  type ColorScheme,
  type ColorSchemeRoles,
  type ColorString,
  type MaterialSchemeNames, type ThemeConfig
} from "@fnc314/packages.types";

export * from "@/lib/theme/utils";

export { THEME_CONFIGS } from "@/lib/theme/theme";

export interface ThemeService {
  currentThemeConfig(): ThemeConfig;

  currentMaterialSchemeName(): MaterialSchemeNames;

  themeJson(): Record<ColorSchemeRoles, ColorString>;
}

class ThemeServiceImpl implements ThemeService {
  #configService: ConfigsService;
  constructor(configService: ConfigsService) {
    this.#configService = configService;
  }

  #devicePreference(): ColorScheme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? CONFIG_COLOR_SCHEME_NAMES.DARK
      : CONFIG_COLOR_SCHEME_NAMES.LIGHT;
  }

  currentThemeConfig(): ThemeConfig {
    return THEME_CONFIGS[this.#configService.loadConfigs().colorScheme.theme];
  }

  currentMaterialSchemeName(): MaterialSchemeNames {
    const appConfigs = this.#configService.loadConfigs();
    const schemeMode = (
      appConfigs.colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.SYSTEM
        ? this.#devicePreference()
        : appConfigs.colorScheme.name
    ).toLowerCase();

    const contrast =
      appConfigs.colorScheme.contrast === CONFIG_COLOR_CONTRAST_NAMES.NORMAL
        ? ""
        : `-${appConfigs.colorScheme.contrast}-contrast`.toLowerCase();

    return `${schemeMode}${contrast}` as MaterialSchemeNames;
  }

  themeJson(): Record<ColorSchemeRoles, ColorString> {
    return this.currentThemeConfig().json[this.currentMaterialSchemeName()];
  }
}

export const themeService: ThemeService = new ThemeServiceImpl(configsService);
