import { type ColorSchemeRoles, type ColorString, type MaterialSchemeNames, type ThemeConfig } from "@/types/theme/theme";
export interface ThemeService {
    currentThemeConfig(): ThemeConfig;
    currentMaterialSchemeName(): MaterialSchemeNames;
    themeJson(): Record<ColorSchemeRoles, ColorString>;
}
export declare const themeService: ThemeService;
