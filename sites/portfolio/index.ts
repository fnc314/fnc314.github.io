import "@/index.css";
import "@fnc314/packages.components";
import { MaterialCSSStyleSheet, colorSchemeConfigsToMaterialSchemeName, configsService, onThemeChange, themeService } from "@fnc314/packages.services";
import "@fnc314/packages.types";
import { COLOR_SCHEME_CHANGE_EVENT_NAME, type ColorSchemeConfigChange, type ColorSchemeConfigs } from "@fnc314/packages.types";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "material-symbols/outlined.css";
import "material-symbols/sharp.css";
// import "prop-for-that/auto";

/**
 * Modifies a particular `<meta>` tag in the DOM
 *
 * @param color - A `#`-prefixed `string`
 */
const setMetaThemeColor: (color: `#${string}`) => void = (color: `#${string}`) =>
  document.getElementById("meta-theme-color")?.setAttribute("content", color);

/**
 * A listener for {@link ColorSchemeConfiChange} events
 *
 * @param event - The particular `event`
 */
const onColorSchemeChange = (event: ColorSchemeConfigChange) => {
  const customEvent: ColorSchemeConfigChange = event as ColorSchemeConfigChange;
  if (!document.startViewTransition) {
    applyColorSchemeConfigs(customEvent.detail)
  } else {
    document.startViewTransition(() => {
      applyColorSchemeConfigs(customEvent.detail)
    });
  }
};

/**
 * Applys the provided `configs`
 *
 * @param configs - Particular {@link ColorSchemeConfigs} to apply
 */
const applyColorSchemeConfigs: (configs: ColorSchemeConfigs) => void = (configs: ColorSchemeConfigs) => {
  const matScheme = themeService.currentThemeConfig().materialSchemes[
    colorSchemeConfigsToMaterialSchemeName(configs)
  ];

  MaterialCSSStyleSheet.replaceSync(matScheme.cssText);
  setMetaThemeColor(themeService.themeJson().primary);
}

/** Bootstrapping listener for `DOMContentLoaded` */
const domLoadedListener = () => {
  document.removeEventListener("DOMContentLoaded", domLoadedListener);

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onThemeChange);

  if (typescaleStyles.styleSheet) {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }

  document.adoptedStyleSheets.push(MaterialCSSStyleSheet);

  applyColorSchemeConfigs(
    configsService.loadConfigs().colorScheme
  );

  // Migrated from AppShell
  document.addEventListener(COLOR_SCHEME_CHANGE_EVENT_NAME, onColorSchemeChange);
};

document.addEventListener("DOMContentLoaded", domLoadedListener);
