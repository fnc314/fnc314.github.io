import "@/index.css";
import "@fnc314/packages.components";
import "@fnc314/packages.data";
import "@fnc314/packages.design-tokens";
import "@fnc314/packages.services";
import { MaterialCSSStyleSheet, colorSchemeConfigsToMaterialSchemeName, configsService, onThemeChange, themeService } from "@fnc314/packages.services";
import "@fnc314/packages.types";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "material-symbols/outlined.css";
import "material-symbols/sharp.css";
// import "prop-for-that/auto";

const domLoadedListener = () => {
  document.removeEventListener("DOMContentLoaded", domLoadedListener);

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onThemeChange);

  if (typescaleStyles.styleSheet) {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }

  document.adoptedStyleSheets.push(MaterialCSSStyleSheet);

  const matScheme =
    themeService.currentThemeConfig().materialSchemes[
      colorSchemeConfigsToMaterialSchemeName(
        configsService.loadConfigs().colorScheme
      )
    ];

  MaterialCSSStyleSheet.replaceSync(
    matScheme.cssText
  );

  document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);

  // Migrated from AppShell
  document.addEventListener("color_scheme.change", (event: Event) => {
    const customEvent = event as any; // ColorSchemeConfigChange
    const themeConfig = themeService.currentThemeConfig();

    const applyTheme = () => {
      MaterialCSSStyleSheet.replaceSync(
        themeConfig.materialSchemes[
          colorSchemeConfigsToMaterialSchemeName(customEvent.detail)
        ].cssText
      );
      document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
    };

    if (!document.startViewTransition) {
      applyTheme();
    } else {
      document.startViewTransition(() => {
        applyTheme();
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", domLoadedListener);
