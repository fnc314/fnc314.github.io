export interface StorageService {
  saveData(key: string, data: string): void;

  getData(key: string, defaultValue: string): { value: string, isDefault: boolean }

  clearData(key: string): void;
}

class StorageServiceImpl implements StorageService {

  saveData(key: string, data: string): void {
    localStorage.setItem(key, data);
  }

  getData(key: string, defaultValue: string): { value: string; isDefault: boolean; } {
    const data = localStorage.getItem(key);
    if (data) {
      return { value: data, isDefault: false };
    }
    return { value: defaultValue, isDefault: true };
  }

  clearData(key: string): void {
    localStorage.removeItem(key);
  }

}

export const storageService: StorageService = new StorageServiceImpl();