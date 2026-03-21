import { configsService, ConfigsService } from "@/services/configs";
import { THEME_CONFIGS } from "@/theme/theme";
import { MaterialSchemeNames, ThemeConfig } from "@/types/theme";
import { CONFIG_COLOR_CONTRAST_NAMES, CONFIG_COLOR_SCHEME_NAMES, type ColorScheme } from "@/types/theme/color-scheme-configs";

export interface ThemeService {
  currentThemeConfig(): ThemeConfig;

  currentMaterialSchemeName(): MaterialSchemeNames

  metaTagThemeColor(preference: MaterialSchemeNames): string;
};

class ThemeServiceImpl implements ThemeService {
  #configService: ConfigsService;
  constructor(configService: ConfigsService) {
    this.#configService = configService;
  }

  #devicePreference(): ColorScheme {
    return (window.matchMedia("(prefers-color-scheme: dark)").matches ?
      CONFIG_COLOR_SCHEME_NAMES.DARK :
      CONFIG_COLOR_SCHEME_NAMES.LIGHT
    );
  }

  currentThemeConfig(): ThemeConfig {
    return THEME_CONFIGS[this.#configService.loadConfigs().colorScheme.theme];
  }

  currentMaterialSchemeName(): MaterialSchemeNames {
    const appConfigs = this.#configService.loadConfigs();
    const schemeMode = (
      appConfigs.colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.SYSTEM ?
        this.#devicePreference() :
        appConfigs.colorScheme.name
    ).toLowerCase();

    const contrast = appConfigs.colorScheme.contrast === CONFIG_COLOR_CONTRAST_NAMES.NORMAL ?
      "" :
      `-${appConfigs.colorScheme.contrast}-contrast`.toLowerCase();

    return `${schemeMode}${contrast}` as MaterialSchemeNames;
  }

  metaTagThemeColor(preference: MaterialSchemeNames): string {
    return this.currentThemeConfig().json[preference].primary;
  }
};

export const themeService: ThemeService = new ThemeServiceImpl(
  configsService
);