import { ChicagoThemeConfig } from "@/theme/chicago/chicago-theme";
import { InterThemeConfig } from "@/theme/inter/inter-theme";
import { RedThemeConfig } from "@/theme/red/red-theme";
import { SunsetThemeConfig } from "@/theme/sunset/sunset-theme";
import { type ThemeConfigs } from "@/types/theme/theme";

export const THEME_CONFIGS: ThemeConfigs = {
  inter: InterThemeConfig,
  chicago: ChicagoThemeConfig,
  red: RedThemeConfig,
  sunset: SunsetThemeConfig,
};

export * from "@/theme/chicago/chicago-theme";
export * from "@/theme/inter/inter-theme";
export * from "@/theme/red/red-theme";
export * from "@/theme/sunset/sunset-theme";
