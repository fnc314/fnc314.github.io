import { type ColorSchemeConfigs, type ColorSchemeRoles, type ColorString, type MaterialSchemeName, type MaterialSchemeNames, type ThemeConfig, type ThemeConfigs } from "@fnc314/packages.types";
export * from "@/lib/theme/chicago";
export * from "@/lib/theme/inter";
export * from "@/lib/theme/red";
export * from "@/lib/theme/sunset";
export * from "@/lib/theme/utils";
export interface ThemeService {
    currentThemeConfig(): ThemeConfig;
    currentMaterialSchemeName(): MaterialSchemeNames;
    themeJson(): Record<ColorSchemeRoles, ColorString>;
}
export declare const THEME_CONFIGS: ThemeConfigs;
export declare const themeService: ThemeService;
export declare const MaterialCSSStyleSheet: CSSStyleSheet;
export declare const onThemeChange: (event: MediaQueryListEvent) => void;
export declare const colorSchemeConfigsToMaterialSchemeName: (colorSchemeSettings: ColorSchemeConfigs) => MaterialSchemeName;
