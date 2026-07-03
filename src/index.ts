import "@/components/bento-layout/bento-layout";
import "@/components/blog/entry/blog-entry";
import "@/components/card/bento/bento-card";
import "@/components/card/blog/blog-card";
import "@/components/card/code/code-card";
import "@/components/card/education/education-card";
import "@/components/card/experience/experience-card";
import "@/components/card/now-playing/now-playing-card";
import "@/components/card/profile/profile-card";
import "@/components/card/settings/settings-card";
import "@/components/card/skills/skills-card";
import "@/components/code/repo/code-repo";
import "@/components/connection/artifact/artifact-connection";
import "@/components/connection/direct/direct-connection";
import "@/components/connection/professional/professional-connection";
import "@/components/education/institution/education-institution";
import "@/components/version-tag/version-tag";
import "@/components/word/cloud/word-cloud";
import "@/components/word/tag/word-tag";
import "@/components/work/experience/work-experience";
import "@/index.css";
import "@/styles";
import { MaterialCSSStyleSheet, onThemeChange, updateMaterialCSSStyleSheet } from "@/styles/styles";
import "@/types/theme";
import "@fnc314/packages.components";
import "@fnc314/packages.data";
import "@fnc314/packages.design-tokens";
import "@fnc314/packages.services";
import { configsService, themeService } from "@fnc314/packages.services";
import "@fnc314/packages.types";
import "@material/web/divider/divider";
import "@material/web/elevation/elevation";
import "@material/web/focus/md-focus-ring";
import "@material/web/icon/icon";
import "@material/web/iconbutton/filled-icon-button";
import "@material/web/iconbutton/icon-button";
import "@material/web/labs/card/elevated-card";
import "@material/web/labs/card/filled-card";
import "@material/web/labs/card/outlined-card";
import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles.js";
import "material-symbols/outlined.css";
import "material-symbols/sharp.css";
import { colorSchemeConfigsToMaterialSchemeName } from "./types/theme";
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
      colorSchemeConfigsToMaterialSchemeName(configsService.loadConfigs().colorScheme)
    ];
  updateMaterialCSSStyleSheet(matScheme);

  document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);

  // Migrated from AppShell
  document.addEventListener("color_scheme.change", (event: Event) => {
    const customEvent = event as any; // ColorSchemeConfigChange
    const themeConfig = themeService.currentThemeConfig();

    const applyTheme = () => {
      updateMaterialCSSStyleSheet(themeConfig.materialSchemes[colorSchemeConfigsToMaterialSchemeName(customEvent.detail)]);
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
