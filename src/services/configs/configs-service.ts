import { AppConfigs } from "@/types/settings";
import { DEFAULT_APP_CONFIGS } from "@/types/settings/app-configs";
import { storageService, StorageService } from "../storage/storage-service";

export interface ConfigsService {
  saveConfigs(
    settings: AppConfigs
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
    settings: AppConfigs
  ): void {
    this.#storageService.clearData("settings");
    this.#storageService.saveDate("settings", JSON.stringify(settings));
  }

  loadConfigs(): AppConfigs {
    return JSON.parse(
      this.#storageService.getData(
        "settings",
        JSON.stringify(DEFAULT_APP_CONFIGS)
      ).value
    ) as AppConfigs;
  }

  resetConfigs(): void {
    this.#storageService.clearData("dark-mode-toggle");
    this.saveConfigs(DEFAULT_APP_CONFIGS);
  }
};

export const configsService: ConfigsService = new ConfigsServiceImpl(
  storageService
);