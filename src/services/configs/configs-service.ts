import { storageService, StorageService } from "@/services/storage/storage-service";
import { THEME_CONFIGS } from "@/themes/themes";
import { type AppConfigs, AppConfigsSchemeTheme, DEFAULT_APP_CONFIGS } from "@/types/configs/app-configs";

export interface ConfigsService {
  saveConfigs(
    configs: AppConfigs
  ): void

  loadConfigs(): AppConfigs

  resetConfigs(): void;
};

class ConfigsServiceImpl implements ConfigsService {
  #storageService: StorageService

  constructor(storageService: StorageService) {
    this.#storageService = storageService;
  }

  saveConfigs(
    configs: AppConfigs
  ): void {
    this.#storageService.clearData("configs");
    this.#storageService.clearData("dark-mode-toggle");
    this.#storageService.saveData("configs", JSON.stringify(configs));
    this.#storageService.saveData("dark-mode-toggle", configs.colorScheme.name.toLowerCase());
  }

  loadConfigs(): AppConfigs {
    const storedConfigs: AppConfigs = JSON.parse(
      this.#storageService.getData(
        "configs",
        JSON.stringify(DEFAULT_APP_CONFIGS)
      ).value
    ) as AppConfigs;

    if (Object.hasOwn(storedConfigs.colorScheme, "theme")) {
      return storedConfigs;
    }

    const updatedConfigs: AppConfigs = {
      ...storedConfigs,
      colorScheme: {
        ...storedConfigs.colorScheme,
        theme: DEFAULT_APP_CONFIGS.colorScheme.theme,
      }
    };
    this.saveConfigs(updatedConfigs);
    return updatedConfigs;
  }

  resetConfigs(): void {
    this.saveConfigs(DEFAULT_APP_CONFIGS);
  }
};

export const configsService: ConfigsService = new ConfigsServiceImpl(
  storageService
);

export const appConfigsSchemeTheme: AppConfigsSchemeTheme = () =>
  THEME_CONFIGS[configsService.loadConfigs().colorScheme.theme]