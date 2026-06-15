import "@/components/bento-layout/bento-layout";
import "@/components/blog/entry/blog-entry";
import "@/components/card/bento/bento-card";
import "@/components/card/blog/blog-card";
import "@/components/card/code/code-card";
import "@/components/card/connect/connect-card";
import "@/components/card/education/education-card";
import "@/components/card/profile-bio/profile-bio-card";
import "@/components/card/settings/settings-card";
import "@/components/card/skills/skills-card";
import "@/components/card/work/work-card";
import "@/components/code/repo/code-repo";
import "@/components/connection/direct/direct-connection";
import "@/components/version-tag/version-tag";
import "@/components/word/cloud/word-cloud";
import "@/components/word/tag/word-tag";
import "@/components/work/experience/work-experience";
import "@/services/configs/configs-service";
import { configsService } from "@/services/configs/configs-service";
import "@/services/storage/storage-service";
import "@/services/theme/theme-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialCSSStyleSheet, onThemeChange, updateMaterialCSSStyleSheet } from "@/styles/styles";
import "@/types/configs/app-configs";
import "@/types/theme/color-scheme-configs";
import { colorSchemeConfigsToMaterialSchemeName } from "@/types/theme/color-scheme-configs";
import "@/types/theme/theme";
import "@fnc314/design-tokens";
import "@material/web/divider/divider";
import "@material/web/elevation/elevation";
import "@material/web/icon/icon";
import "@material/web/iconbutton/filled-tonal-icon-button";
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
    updateMaterialCSSStyleSheet(themeConfig.materialSchemes[colorSchemeConfigsToMaterialSchemeName(customEvent.detail)]);
    document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
  });

  window.addEventListener("router.change", (ev: Event) => {
    console.info(JSON.stringify({ event: "router.change", change: (ev as any).detail }, null, 2));
  });
  window.addEventListener("router.back", (ev: Event) => {
    console.info(JSON.stringify({ event: "router.back", back: (ev as any).detail }, null, 2));
  });
};

document.addEventListener("DOMContentLoaded", domLoadedListener);
