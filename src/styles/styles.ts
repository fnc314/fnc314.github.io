import { appConfigsSchemeTheme, configsService } from "@/services/configs";
import { THEME_CONFIGS } from "@/themes/themes";
import { colorSchemeConfigsToMaterialSchemeName, CONFIG_COLOR_SCHEME_NAMES } from "@/types/configs/color-scheme-configs";
import { css, CSSResult } from "lit";

export const onThemeChange = (event: MediaQueryListEvent) => {
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
    appConfigsSchemeTheme()
      .materialSchemes[
        colorSchemeConfigsToMaterialSchemeName(colorScheme)
      ]
  );
};

export const updateMaterialCSSStyleSheet = (result: CSSResult) => {
  MaterialCSSStyleSheet.replaceSync(result.cssText);
};

export const MaterialCSSStyleSheet: CSSStyleSheet = THEME_CONFIGS.inter.materialSchemes.light.styleSheet!;

export const Breakpoints: CSSResult = css`
  :host {
    --breakpoint-compact-width-max: 600px;
    --breakpoint-medium-width-max: 900px;
    --breakpoint-large-width-max: 1200px;
    --breakpoint-expanded-width-max: 1800px;
  }
`;
