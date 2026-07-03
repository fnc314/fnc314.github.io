import { THEME_CONFIGS } from "@/theme/theme";
import { colorSchemeConfigsToMaterialSchemeName } from "@/types/theme";
import { configsService, themeService } from "@fnc314/packages.services";
import { CONFIG_COLOR_SCHEME_NAMES } from "@fnc314/packages.types";
import { type CSSResult } from "lit";

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

  updateMaterialCSSStyleSheet(
    themeService.currentThemeConfig().materialSchemes[colorSchemeConfigsToMaterialSchemeName(colorScheme)],
  );

  document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
};

export const updateMaterialCSSStyleSheet: (result: CSSResult) => void = (result: CSSResult) =>
  MaterialCSSStyleSheet.replaceSync(result.cssText);

export const MaterialCSSStyleSheet: CSSStyleSheet = THEME_CONFIGS.sunset.materialSchemes.light.styleSheet!;
