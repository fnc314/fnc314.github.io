import { type ConfigsService, configsService } from "@/lib/configs";
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
    type ColorContrast,
    type ColorScheme,
    type ColorSchemeConfig,
    type ColorSchemeConfigChange,
    type ColorSchemeRoles,
    type ColorString,
    EventNames,
    type MaterialSchemeName,
    type ThemeConfig,
    type ThemeConfigs,
    ThemeNames,
    WindowMedia
} from "@fnc314/packages.types";

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
  deviceColorScheme(): ColorScheme;

  deviceColorContrast(): ColorContrast;

  currentThemeConfig(): ThemeConfig;

  currentMaterialSchemeName(): MaterialSchemeName;

  themeJson(): Record<ColorSchemeRoles, ColorString>;
}

class ThemeServiceImpl implements ThemeService {
  #themeConfigs: ThemeConfigs = {
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
  #configService: ConfigsService;
  constructor(configService: ConfigsService) {
    this.#configService = configService;
  }

  deviceColorScheme(): ColorScheme {
    return window.matchMedia(WindowMedia.PrefersColorScheme.Dark).matches ?
      ThemeNames.Scheme.Dark :
      (
        window.matchMedia(WindowMedia.PrefersColorScheme.Light).matches ?
          ThemeNames.Scheme.Light :
          ThemeNames.Scheme.System
      );
  }

  deviceColorContrast(): ColorContrast {
    return window.matchMedia(WindowMedia.PrefersContrast.More).matches ?
      ThemeNames.Contrast.High : ThemeNames.Contrast.Normal;
  }

  currentThemeConfig(): ThemeConfig {
    return this.#themeConfigs[this.#configService.loadConfigs().colorScheme.theme];
  }

  currentMaterialSchemeName(): MaterialSchemeName {
    const appConfigs = this.#configService.loadConfigs();
    const schemeMode = (
      appConfigs.colorScheme.name === ThemeNames.Scheme.System ?
        this.deviceColorScheme() :
        appConfigs.colorScheme.name
    ).toLowerCase();

    const contrastPascalCase: string =
      appConfigs.colorScheme.contrast === ThemeNames.Contrast.Normal ?
        "" :
        `${appConfigs.colorScheme.contrast.at(0)?.toUpperCase()}${appConfigs.colorScheme.contrast.slice(1)?.toLowerCase()}Contrast`

    const contrast =
      appConfigs.colorScheme.contrast === ThemeNames.Contrast.Normal ?
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
    [EventNames.Change.ColorScheme]: ColorSchemeConfigChange;
  }
}

export const MaterialCSSStyleSheet: CSSStyleSheet = InterThemeConfig.materialSchemes.light.styleSheet!;

export const onThemeChange: (event: MediaQueryListEvent) => void = (event: MediaQueryListEvent) => {
  const name = event.matches ? ThemeNames.Scheme.Dark : ThemeNames.Scheme.Light;

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
    colorSchemeSettings.name !== ThemeNames.Scheme.System ?
      colorSchemeSettings.name :
      themeService.deviceColorScheme();

  const contrast =
    colorSchemeSettings.contrast === ThemeNames.Contrast.Normal ?
      "" :
      colorSchemeSettings.contrast.charAt(0).toUpperCase() + colorSchemeSettings.contrast.slice(1) + "Contrast";

  return `${variant}${contrast}` as MaterialSchemeName;
};
