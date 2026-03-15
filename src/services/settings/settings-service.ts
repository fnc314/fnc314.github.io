import { AppConfigs } from "@/types/settings";
import { DEFAULT_APP_CONFIGS } from "@/types/settings/app-settings";
import { storageService, StorageService } from "../storage/storage-service";

export interface SettingsService {
  saveSettings(
    settings: AppConfigs
  ): void

  loadSettings(): AppConfigs
};

class SettingsServiceImpl implements SettingsService {
  #storageService: StorageService

  constructor(storageService: StorageService) {
    this.#storageService = storageService;
  }

  saveSettings(
    settings: AppConfigs
  ): void {
    this.#storageService.clearData("settings");
    this.#storageService.saveDate("settings", JSON.stringify(settings));
  }

  loadSettings(): AppConfigs {
    return JSON.parse(
      this.#storageService.getData(
        "settings",
        JSON.stringify(DEFAULT_APP_CONFIGS)
      ).value
    ) as AppConfigs;
  }
};

export const settingsService: SettingsService = new SettingsServiceImpl(
  storageService
);