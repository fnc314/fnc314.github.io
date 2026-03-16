import { configsService } from "@/services/configs";
import { colorSchemeConfigsToMaterialSchemeName, CONFIG_COLOR_SCHEME_NAMES } from "@/types/configs/color-scheme-configs";
import { css, CSSResult } from "lit";
import { MaterialSchemes } from "./material-styles";

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
    MaterialSchemes[
      colorSchemeConfigsToMaterialSchemeName(colorScheme)
    ]
  );
};

export const updateMaterialCSSStyleSheet = (result: CSSResult) => {
  MaterialCSSStyleSheet.replaceSync(result.cssText);
};

export const MaterialCSSStyleSheet: CSSStyleSheet = MaterialSchemes.light.styleSheet!;

export const Breakpoints: CSSResult = css`
  :host {
    --breakpoint-compact-width-max: 600px;
    --breakpoint-medium-width-max: 900px;
    --breakpoint-large-width-max: 1200px;
    --breakpoint-expanded-width-max: 1800px;
  }
`;
