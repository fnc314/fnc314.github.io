import "@fnc314/packages.components";
import "@fnc314/packages.data";
import "@fnc314/packages.design-tokens";
import { MaterialCSSStyleSheet, colorSchemeConfigsToMaterialSchemeName, configsService, onThemeChange, themeService } from "@fnc314/packages.services";
import {
    COLOR_SCHEME_CHANGE_EVENT_NAME,
    type ColorSchemeConfig,
    type ColorSchemeConfigChange,
    ELEMENT_ID_META_TAG,
    EVENT_DOM_CONTENT_LOADED,
    WINDOW_MEDIA_PREFERS_COLOR_SCHEME_DARK
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

/** Bootstrapping listener for {@link EVENT_DOM_CONTENT_LOADED} */
const domLoadedListener = () => {
  window.document.removeEventListener(EVENT_DOM_CONTENT_LOADED, domLoadedListener);

  window.matchMedia(WINDOW_MEDIA_PREFERS_COLOR_SCHEME_DARK).addEventListener("change", onThemeChange);

  if (typescaleStyles.styleSheet) {
    window.document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }

  window.document.adoptedStyleSheets.push(MaterialCSSStyleSheet);

  applyColorSchemeConfigs(
    configsService.loadConfigs().colorScheme
  );

  window.addEventListener(COLOR_SCHEME_CHANGE_EVENT_NAME, onColorSchemeChange);
};

window.document.addEventListener(EVENT_DOM_CONTENT_LOADED, domLoadedListener);
