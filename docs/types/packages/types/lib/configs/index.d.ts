import { type ColorSchemeConfigs, type ThemeConfig } from "@/lib/theme";
export interface AppConfigs {
    colorScheme: ColorSchemeConfigs;
}
export declare const DEFAULT_APP_CONFIGS: AppConfigs;
export type AppConfigsSchemeTheme = () => ThemeConfig;
export type AppConfigsChange = CustomEvent<{
    appConfigs: AppConfigs;
}>;
