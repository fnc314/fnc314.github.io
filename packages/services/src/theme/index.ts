import { type ConfigsService, configsService } from "@/lib/configs";
import { AtlInWhiteThemeConfig } from "@/lib/theme/atl-in-white";
import { ChicagoThemeConfig } from "@/lib/theme/chicago";
import { DowntownThemeConfig } from "@/lib/theme/downtown";
import { InterThemeConfig } from "@/lib/theme/inter";
import { LeatherJacketThemeConfig } from "@/lib/theme/leather-jacket";
import { PonderThemeConfig } from "@/lib/theme/ponder";
import { RedThemeConfig } from "@/lib/theme/red";
import { RomanBusThemeConfig } from "@/lib/theme/roman-bus";
import { SkylineThemeConfig } from "@/lib/theme/skyline";
import { SunsetThemeConfig } from "@/lib/theme/sunset";
import {
    COLOR_SCHEME_CHANGE_EVENT_NAME,
    CONFIG_COLOR_CONTRAST_NAMES,
    CONFIG_COLOR_SCHEME_NAMES,
    type ColorScheme,
    type ColorSchemeConfig,
    type ColorSchemeConfigChange,
    type ColorSchemeRoles,
    type ColorString,
    type MaterialSchemeName,
    type ThemeConfig,
    type ThemeConfigs,
    WINDOW_MEDIA_PREFERS_COLOR_SCHEME_DARK,
    WINDOW_MEDIA_PREFERS_COLOR_SCHEME_LIGHT
} from "@fnc314/packages.types";

export * from "@/lib/theme/atl-in-white";
export * from "@/lib/theme/chicago";
export * from "@/lib/theme/downtown";
export * from "@/lib/theme/inter";
export * from "@/lib/theme/leather-jacket";
export * from "@/lib/theme/ponder";
export * from "@/lib/theme/red";
export * from "@/lib/theme/roman-bus";
export * from "@/lib/theme/skyline";
export * from "@/lib/theme/sunset";
export * from "@/lib/theme/utils";

export interface ThemeService {
  devicePreference(): ColorScheme;

  currentThemeConfig(): ThemeConfig;

  currentMaterialSchemeName(): MaterialSchemeName;

  themeJson(): Record<ColorSchemeRoles, ColorString>;
}

class ThemeServiceImpl implements ThemeService {
  #configService: ConfigsService;
  constructor(configService: ConfigsService) {
    this.#configService = configService;
  }

  devicePreference(): ColorScheme {
    return window.matchMedia(WINDOW_MEDIA_PREFERS_COLOR_SCHEME_DARK).matches ?
      CONFIG_COLOR_SCHEME_NAMES.DARK :
      (
        window.matchMedia(WINDOW_MEDIA_PREFERS_COLOR_SCHEME_LIGHT).matches ?
          CONFIG_COLOR_SCHEME_NAMES.LIGHT :
          CONFIG_COLOR_SCHEME_NAMES.SYSTEM
      );
  }

  currentThemeConfig(): ThemeConfig {
    return THEME_CONFIGS[this.#configService.loadConfigs().colorScheme.theme];
  }

  currentMaterialSchemeName(): MaterialSchemeName {
    const appConfigs = this.#configService.loadConfigs();
    const schemeMode = (
      appConfigs.colorScheme.name === CONFIG_COLOR_SCHEME_NAMES.SYSTEM ?
        this.devicePreference() :
        appConfigs.colorScheme.name
    ).toLowerCase();

    const contrastPascalCase: string =
      appConfigs.colorScheme.contrast === CONFIG_COLOR_CONTRAST_NAMES.NORMAL ?
        "" :
        `${appConfigs.colorScheme.contrast.at(0)?.toUpperCase()}${appConfigs.colorScheme.contrast.slice(1)?.toLowerCase()}Contrast`

    const contrast =
      appConfigs.colorScheme.contrast === CONFIG_COLOR_CONTRAST_NAMES.NORMAL ?
        "" :
        contrastPascalCase;

    return `${schemeMode}${contrast}` as MaterialSchemeName;
  }

  themeJson(): Record<ColorSchemeRoles, ColorString> {
    return this.currentThemeConfig().json[this.currentMaterialSchemeName()];
  }
}

export const themeService: ThemeService = new ThemeServiceImpl(configsService);

declare global {
  interface GlobalEventHandlersEventMap {
    [COLOR_SCHEME_CHANGE_EVENT_NAME]: ColorSchemeConfigChange;
  }
}

export const THEME_CONFIGS: ThemeConfigs = {
  atlInWhite: AtlInWhiteThemeConfig,
  chicago: ChicagoThemeConfig,
  downtown: DowntownThemeConfig,
  inter: InterThemeConfig,
  leatherJacket: LeatherJacketThemeConfig,
  ponder: PonderThemeConfig,
  red: RedThemeConfig,
  romanBus: RomanBusThemeConfig,
  skyline: SkylineThemeConfig,
  sunset: SunsetThemeConfig,
};

export const MaterialCSSStyleSheet: CSSStyleSheet = THEME_CONFIGS.inter.materialSchemes.light.styleSheet!;

export const onThemeChange: (event: MediaQueryListEvent) => void = (event: MediaQueryListEvent) => {
  const name = event.matches ? CONFIG_COLOR_SCHEME_NAMES.DARK : CONFIG_COLOR_SCHEME_NAMES.LIGHT;

  const appSettings = configsService.loadConfigs();
  const colorScheme = {
    ...appSettings.colorScheme,
    name,
  };
  configsService.saveConfigs({
    ...appSettings,
    colorScheme,
  });

  MaterialCSSStyleSheet.replaceSync(
    themeService.currentThemeConfig().materialSchemes[
      colorSchemeConfigsToMaterialSchemeName(colorScheme)
    ].cssText,
  );

  window.document.getElementById("meta-theme-color")
    ?.setAttribute("content", themeService.themeJson().primary);
};

export const colorSchemeConfigsToMaterialSchemeName: (colorSchemeSettings: ColorSchemeConfig) => MaterialSchemeName = (
  colorSchemeSettings: ColorSchemeConfig,
): MaterialSchemeName => {
  const variant =
    colorSchemeSettings.name !== CONFIG_COLOR_SCHEME_NAMES.SYSTEM ?
      colorSchemeSettings.name.toLowerCase() :
      (window.matchMedia(WINDOW_MEDIA_PREFERS_COLOR_SCHEME_DARK).matches ?
        CONFIG_COLOR_SCHEME_NAMES.DARK :
        CONFIG_COLOR_SCHEME_NAMES.LIGHT
      ).toLowerCase();

  const contrast =
    colorSchemeSettings.contrast === CONFIG_COLOR_CONTRAST_NAMES.NORMAL ?
      ""
    : colorSchemeSettings.contrast.charAt(0) + colorSchemeSettings.contrast.slice(1).toLowerCase() + "Contrast";

  return `${variant}${contrast}` as MaterialSchemeName;
};
