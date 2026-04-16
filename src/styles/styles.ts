import { configsService } from "@/services/configs";
import { themeService } from "@/services/theme";
import { THEME_CONFIGS } from "@/theme/theme";
import { CONFIG_COLOR_SCHEME_NAMES, colorSchemeConfigsToMaterialSchemeName } from "@/types/theme/color-scheme-configs";
import { type CSSResult, css } from "lit";

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

export const updateMaterialCSSStyleSheet: (result: CSSResult) => void = (result: CSSResult) => {
  MaterialCSSStyleSheet.replaceSync(result.cssText);
};

export const MaterialCSSStyleSheet: CSSStyleSheet = THEME_CONFIGS.sunset.materialSchemes.light.styleSheet!;

export const Breakpoints: CSSResult = css`
  :host {
    --breakpoint-compact-width-max: 600px;
    --breakpoint-medium-width-max: 900px;
    --breakpoint-large-width-max: 1200px;
    --breakpoint-expanded-width-max: 1800px;
  }
`;
