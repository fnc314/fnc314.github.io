export interface StorageService {
    saveData(key: string, data: string): void;
    getData(key: string, defaultValue: string): {
        value: string;
        isDefault: boolean;
    };
    clearData(key: string): void;
}
export declare const storageService: StorageService;
//# sourceMappingURL=storage-service.d.ts.map