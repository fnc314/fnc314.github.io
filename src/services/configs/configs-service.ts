import { type AppConfigs, type AppConfigsChange, DEFAULT_APP_CONFIGS } from "@/types/configs/app-configs";
import { type StorageService, storageService } from "./../storage/storage-service";

export interface ConfigsService extends EventTarget {
  saveConfigs(configs: AppConfigs): void;

  loadConfigs(): AppConfigs;

  resetConfigs(): void;
}

class ConfigsServiceImpl extends EventTarget implements ConfigsService {
  #storageService: StorageService;

  constructor(storageService: StorageService) {
    super();
    this.#storageService = storageService;
  }

  saveConfigs(configs: AppConfigs): void {
    this.#storageService.clearData("configs");
    this.#storageService.clearData("dark-mode-toggle");
    this.#storageService.saveData("configs", JSON.stringify(configs));
    this.#storageService.saveData("dark-mode-toggle", configs.colorScheme.name.toLowerCase());
    this.dispatchEvent(
      new CustomEvent("app-configs.change", {
        bubbles: true,
        composed: true,
        detail: {
          appConfigs: configs,
        },
      }),
    );
  }

  loadConfigs(): AppConfigs {
    const storedConfigs: AppConfigs = JSON.parse(
      this.#storageService.getData("configs", JSON.stringify(DEFAULT_APP_CONFIGS)).value,
    ) as AppConfigs;

    if (Object.hasOwn(storedConfigs.colorScheme, "theme")) {
      return storedConfigs;
    }

    const updatedConfigs: AppConfigs = {
      ...storedConfigs,
      colorScheme: {
        ...storedConfigs.colorScheme,
        theme: DEFAULT_APP_CONFIGS.colorScheme.theme,
      },
    };
    this.saveConfigs(updatedConfigs);
    return updatedConfigs;
  }

  resetConfigs(): void {
    this.saveConfigs(DEFAULT_APP_CONFIGS);
  }
}

export const configsService: ConfigsService = new ConfigsServiceImpl(storageService);

declare global {
  interface GlobalEventHandlersEventMap {
    "app-configs.change": AppConfigsChange;
  }
}
