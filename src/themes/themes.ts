import { ChicagoThemeConfig } from "@/themes/chicago/chicago-theme";
import { InterThemeConfig } from "@/themes/inter/inter-theme";
import { RedThemeConfig } from "@/themes/red/red-theme";
import { SunsetThemeConfig } from "@/themes/sunset/sunset-theme";
import { ThemeConfigs, ThemeName } from "@/types/configs/theme-configs";
import { html, TemplateResult } from "lit-html";

export const THEME_CONFIGS: ThemeConfigs = {
  inter: InterThemeConfig,
  chicago: ChicagoThemeConfig,
  red: RedThemeConfig,
  sunset: SunsetThemeConfig,
};

export const themeToIcon: (slot: "leading-icon" | "start", theme: ThemeName) => TemplateResult = (
  slot: "leading-icon" | "start",
  theme: ThemeName
) => html`
  <img .slot=${slot} .src=${THEME_CONFIGS[theme].themePhoto.src} .alt=${THEME_CONFIGS[theme].themePhoto.alt} />
`;

export * from "@/themes/chicago/chicago-theme";
export * from "@/themes/inter/inter-theme";
export * from "@/themes/red/red-theme";
export * from "@/themes/sunset/sunset-theme";

