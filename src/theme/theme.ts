import { ChicagoThemeConfig } from "@/theme/chicago/chicago-theme";
import { InterThemeConfig } from "@/theme/inter/inter-theme";
import { RedThemeConfig } from "@/theme/red/red-theme";
import { SunsetThemeConfig } from "@/theme/sunset/sunset-theme";
import { type ThemeConfigs, type ThemeName } from "@/types/theme/theme";
import { type TemplateResult, html } from "lit";

export const THEME_CONFIGS: ThemeConfigs = {
  inter: InterThemeConfig,
  chicago: ChicagoThemeConfig,
  red: RedThemeConfig,
  sunset: SunsetThemeConfig,
};

export const themeToIcon: (slot: "leading-icon" | "start", theme: ThemeName) => TemplateResult = (
  slot: "leading-icon" | "start",
  theme: ThemeName,
) => html`
  <img
    .slot=${slot}
    .src=${THEME_CONFIGS[theme].themePhoto.src}
    .alt=${THEME_CONFIGS[theme].themePhoto.alt}
  />
`;

export * from "@/theme/chicago/chicago-theme";
export * from "@/theme/inter/inter-theme";
export * from "@/theme/red/red-theme";
export * from "@/theme/sunset/sunset-theme";
