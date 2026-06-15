import { type ThemeConfigs, type ThemeName } from "@/types/theme/theme";
import { type TemplateResult } from "lit";
export declare const THEME_CONFIGS: ThemeConfigs;
export declare const themeToIcon: (slot: "leading-icon" | "start", theme: ThemeName) => TemplateResult;
export * from "@/theme/chicago/chicago-theme";
export * from "@/theme/inter/inter-theme";
export * from "@/theme/red/red-theme";
export * from "@/theme/sunset/sunset-theme";
