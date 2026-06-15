import { type AppConfigs, type AppConfigsChange } from "@/types/configs/app-configs";
export interface ConfigsService extends EventTarget {
    saveConfigs(configs: AppConfigs): void;
    loadConfigs(): AppConfigs;
    resetConfigs(): void;
}
export declare const configsService: ConfigsService;
declare global {
    interface GlobalEventHandlersEventMap {
        "app-configs.change": AppConfigsChange;
    }
}
