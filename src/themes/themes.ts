import { InterThemeConfig } from "@/themes/inter/inter-theme";
import { ThemeConfigs } from "@/types/configs/theme-configs";

export const THEME_CONFIGS: ThemeConfigs = {
  inter: InterThemeConfig,
  chicago: InterThemeConfig,
  red: InterThemeConfig,
  sunset: InterThemeConfig,
};

export * from "@/themes/chicago/chicago-theme";
export * from "@/themes/inter/inter-theme";
export * from "@/themes/red/red-theme";
export * from "@/themes/sunset/sunset-theme";

