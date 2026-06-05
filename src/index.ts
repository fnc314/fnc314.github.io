import "@/components/app-shell/app-shell";
import "@/components/bento-layout/bento-layout";
import "@/components/blog/blog-post";
import "@/components/blog/blog-post.types";
import "@/components/code/code-project/code-project";
import "@/components/dialog/step-up/step-up-dialog";
import "@/components/fab-menu/fab-menu";
import "@/components/fab-menu/fab-menu-item";
import "@/components/info-section/info-section";
import "@/components/partial-header/partial-header";
import "@/components/word/word-cloud/word-cloud";
import "@/components/word/word-cloud/word-cloud.types";
import "@/components/word/word-tag/word-tag";
import "@/components/work-experience/work-experience";
import "@/components/work-experience/work-experience.types";
import "@/services/configs/configs-service";
import { configsService } from "@/services/configs/configs-service";
import "@/services/router/router-service";
import "@/services/storage/storage-service";
import "@/services/theme/theme-service";
import { themeService } from "@/services/theme/theme-service";
import { MaterialCSSStyleSheet, onThemeChange, updateMaterialCSSStyleSheet } from "@/styles/styles";
import "@/types/configs/app-configs";
import "@/types/configs/fab-configs";
import "@/types/theme/color-scheme-configs";
import { colorSchemeConfigsToMaterialSchemeName } from "@/types/theme/color-scheme-configs";
import "@/types/theme/theme";
import "@material/web/button/filled-button";
import "@material/web/button/outlined-button";
import "@material/web/button/text-button";
import "@material/web/dialog/dialog";
import "@material/web/divider/divider";
import "@material/web/elevation/elevation";
import "@material/web/fab/fab";
import "@material/web/icon/icon";
import "@material/web/labs/card/elevated-card";
import "@material/web/labs/card/filled-card";
import "@material/web/labs/card/outlined-card";
import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/radio/radio";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import "@material/web/tabs/primary-tab";
import "@material/web/tabs/tabs";
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

  if (window.location.hash === "") {
    window.history.replaceState(null, "", `${window.location.href}#bio`);
  } else {
    setTimeout(() => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const targetId = hash === "info" ? "bio" : hash;
      const el = document.getElementById(targetId) ?? document.querySelector("bento-layout")?.shadowRoot?.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  }

  const matScheme =
    themeService.currentThemeConfig().materialSchemes[
      colorSchemeConfigsToMaterialSchemeName(configsService.loadConfigs().colorScheme)
    ];
  updateMaterialCSSStyleSheet(matScheme);

  document.getElementById("meta-theme-color")?.setAttribute("content", themeService.themeJson().primary);
};

document.addEventListener("DOMContentLoaded", domLoadedListener);
