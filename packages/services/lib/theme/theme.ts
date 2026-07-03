import { ChicagoThemeConfig } from "@/lib/theme/chicago/chicago-theme";
import { InterThemeConfig } from "@/lib/theme/inter/inter-theme";
import { RedThemeConfig } from "@/lib/theme/red/red-theme";
import { SunsetThemeConfig } from "@/lib/theme/sunset/sunset-theme";
import { type ThemeConfigs } from "@fnc314/packages.types";

export const THEME_CONFIGS: ThemeConfigs = {
  inter: InterThemeConfig,
  chicago: ChicagoThemeConfig,
  red: RedThemeConfig,
  sunset: SunsetThemeConfig,
};

export * from "@/lib/theme/chicago/chicago-theme";
export * from "@/lib/theme/inter/inter-theme";
export * from "@/lib/theme/red/red-theme";
export * from "@/lib/theme/sunset/sunset-theme";
