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
    CONFIG_COLOR_CONTRAST_NAMES,
    CONFIG_COLOR_SCHEME_NAMES,
    type ColorScheme,
    type ColorSchemeConfigs,
    type ColorSchemeRoles,
    type ColorString,
    type MaterialSchemeName,
    type MaterialSchemeNames,
    type ThemeConfig,
    type ThemeConfigs,
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

declare global {
  interface GlobalEventHandlersEventMap {
    "color_scheme.change": CustomEvent<ColorSchemeConfigs>;
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

export const MaterialCSSStyleSheet: CSSStyleSheet = THEME_CONFIGS.sunset.materialSchemes.light.styleSheet!;

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
    ].cssText
  );

  document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
};

export const colorSchemeConfigsToMaterialSchemeName: (colorSchemeSettings: ColorSchemeConfigs) => MaterialSchemeName = (
  colorSchemeSettings: ColorSchemeConfigs
): MaterialSchemeName => {
  const variant = colorSchemeSettings.name !== CONFIG_COLOR_SCHEME_NAMES.SYSTEM
    ? colorSchemeSettings.name.toLowerCase()
    : (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? CONFIG_COLOR_SCHEME_NAMES.DARK
      : CONFIG_COLOR_SCHEME_NAMES.LIGHT
    ).toLowerCase();

  const contrast = colorSchemeSettings.contrast === CONFIG_COLOR_CONTRAST_NAMES.NORMAL
    ? ""
    : colorSchemeSettings.contrast.charAt(0) + colorSchemeSettings.contrast.slice(1).toLowerCase() + "Contrast";

  return `${variant}${contrast}` as MaterialSchemeName;
};
