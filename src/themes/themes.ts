import { ChicagoThemeConfig } from "@/themes/chicago/chicago-theme";
import { InterThemeConfig } from "@/themes/inter/inter-theme";
import { RedThemeConfig } from "@/themes/red/red-theme";
import { SunsetThemeConfig } from "@/themes/sunset/sunset-theme";
import { ThemeConfigs } from "@/types/configs/theme-configs";

export const THEME_CONFIGS: ThemeConfigs = {
  inter: InterThemeConfig,
  chicago: ChicagoThemeConfig,
  red: RedThemeConfig,
  sunset: SunsetThemeConfig,
};

export * from "@/themes/chicago/chicago-theme";
export * from "@/themes/inter/inter-theme";
export * from "@/themes/red/red-theme";
export * from "@/themes/sunset/sunset-theme";

