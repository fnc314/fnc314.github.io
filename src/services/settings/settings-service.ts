import { AppSettings } from "@/types/settings";
import { DEFAULT_APP_SETTINGS } from "@/types/settings/app-settings";
import { storageService, StorageService } from "../storage/storage-service";

export interface SettingsService {
  saveSettings(
    settings: AppSettings
  ): void

  loadSettings(): AppSettings
};

class SettingsServiceImpl implements SettingsService {
  #storageService: StorageService

  constructor(storageService: StorageService) {
    this.#storageService = storageService;
  }

  saveSettings(
    settings: AppSettings
  ): void {
    this.#storageService.saveDate("settings", JSON.stringify(settings));
  }

  loadSettings(): AppSettings {
    return JSON.parse(
      this.#storageService.getData(
        "settings",
        JSON.stringify(DEFAULT_APP_SETTINGS)
      ).value
    ) as AppSettings;
  }
};

export const settingsService: SettingsService = new SettingsServiceImpl(
  storageService
);