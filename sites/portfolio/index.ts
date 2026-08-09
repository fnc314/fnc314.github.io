import "@fnc314/packages.components";
import "@fnc314/packages.data";
import "@fnc314/packages.design-tokens";
import {
    MaterialCSSStyleSheet,
    colorSchemeConfigsToMaterialSchemeName,
    configsService,
    onThemeChange,
    themeService
} from "@fnc314/packages.services";
import {
    type ColorSchemeConfig,
    type ColorSchemeConfigChange,
    ELEMENT_ID_META_TAG,
    EventNames,
    WindowMedia
} from "@fnc314/packages.types";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "material-symbols/outlined.css";
import "material-symbols/sharp.css";
import "./index.css";
// import "prop-for-that/auto";

/**
 * Modifies a particular `<meta>` tag in the DOM
 *
 * @param color - A `#`-prefixed `string`
 */
const setMetaThemeColor: (color: `#${string}`) => void = (color: `#${string}`) =>
  window.document.getElementById(ELEMENT_ID_META_TAG)?.setAttribute("content", color);

/**
 * A listener for {@link ColorSchemeConfiChange} events
 *
 * @param event - The particular `event`
 */
const onColorSchemeChange = (event: ColorSchemeConfigChange) => {
  const customEvent: ColorSchemeConfigChange = event;
  if (!window.document.startViewTransition) {
    applyColorSchemeConfigs(customEvent.detail)
  } else {
    window.document.startViewTransition(() => applyColorSchemeConfigs(customEvent.detail));
  }
};

/**
 * Applys the provided `configs`
 *
 * @param configs - Particular {@link ColorSchemeConfig} to apply
 */
const applyColorSchemeConfigs: (configs: ColorSchemeConfig) => void = (configs: ColorSchemeConfig) => {
  const matScheme = themeService.currentThemeConfig().materialSchemes[
    colorSchemeConfigsToMaterialSchemeName(configs)
  ];

  MaterialCSSStyleSheet.replaceSync(matScheme.cssText);
  setMetaThemeColor(themeService.themeJson().primary);
}

/** Bootstrapping listener for {@link window.onload} */
const windowOnLoad = () => {

  window.matchMedia(WindowMedia.PrefersColorScheme.Dark).addEventListener("change", onThemeChange);

  if (typescaleStyles.styleSheet) {
    window.document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }

  window.document.adoptedStyleSheets.push(MaterialCSSStyleSheet);

  applyColorSchemeConfigs(
    configsService.loadConfigs().colorScheme
  );

  window.addEventListener(EventNames.Change.ColorScheme, onColorSchemeChange);

  // We don't need this after first run
  window.onload = null;
};

window.onload = windowOnLoad