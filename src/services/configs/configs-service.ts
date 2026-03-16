import { AppConfigs } from "@/types/settings";
import { DEFAULT_APP_CONFIGS } from "@/types/settings/app-configs";
import { storageService, StorageService } from "../storage/storage-service";

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
    this.#storageService.saveData("configs", JSON.stringify(configs));
    this.#storageService.saveData("dark-mode-toggle", configs.colorScheme.name.toLowerCase());
  }

  loadConfigs(): AppConfigs {
    return JSON.parse(
      this.#storageService.getData(
        "configs",
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