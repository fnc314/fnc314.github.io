export interface StorageService {
  saveDate(key: string, data: string): void;

  getData(key: string, defaultValue: string): { value: string, isDefault: boolean }
}

class StorageServiceImpl implements StorageService {

  saveDate(key: string, data: string): void {
    localStorage.setItem(key, data);
  }

  getData(key: string, defaultValue: string): { value: string; isDefault: boolean; } {
    const data = localStorage.getItem(key);
    if (data) {
      return { value: data, isDefault: false };
    }
    return { value: defaultValue, isDefault: true };
  }

}

export const storageService: StorageService = new StorageServiceImpl();