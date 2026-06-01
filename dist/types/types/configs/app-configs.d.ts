import { type FabConfigssRecord } from "@/types/configs/fab-configs";
import { type ColorSchemeConfigs } from "@/types/theme/color-scheme-configs";
import { type ThemeConfig } from "@/types/theme/theme";
export interface AppConfigs {
    colorScheme: ColorSchemeConfigs;
    fab: FabConfigssRecord;
}
export declare const DEFAULT_APP_CONFIGS: AppConfigs;
export type AppConfigsSchemeTheme = () => ThemeConfig;
export type AppConfigsChange = CustomEvent<{
    appConfigs: AppConfigs;
}>;
//# sourceMappingURL=app-configs.d.ts.map