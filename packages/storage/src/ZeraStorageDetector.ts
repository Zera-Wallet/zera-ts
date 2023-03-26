import { ZeraStorageType } from "./ZeraStorage";

async function assertLocalStorage(): Promise<boolean> {
    if (!window.localStorage) {
        throw new Error("localStorage is not defined");
    }
    const storage = window.localStorage;
    const testKey = "__zera_storage_test__";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
}

let fsPromises: typeof import("fs").promises;
if (typeof process !== "undefined" && process?.versions?.node) {
    fsPromises = require("fs").promises;
}

async function assertFS(): Promise<boolean> {
    if (!fsPromises) {
        throw new Error("File system is not supported in this environment");
    }
    const testFile = "__zera_storage_test__.txt";
    await fsPromises.writeFile(testFile, "1");
    await fsPromises.unlink(testFile);
    return true;
}

export class ZeraStorageDetector {
    static storageAssertions: Record<ZeraStorageType, () => Promise<boolean>> = {
        localStorage: assertLocalStorage,
        fs: assertFS,
        memory: async () => true,
    };
    private static async isStorageAvailable(type: ZeraStorageType): Promise<boolean> {
        const testFunction = this.storageAssertions[type];
        if (!testFunction) {
            return false;
        }
        try {
            return await testFunction();
        } catch (error) {
            console.log(`Storage type "${type}" is not available:`, error instanceof Error ? error.message : error);
            return false;
        }
    }

    private static getStorageTypePriority(): ZeraStorageType[] {
        if (typeof window !== "undefined") {
            return ["localStorage", "memory"];
        }
        if (typeof process !== "undefined" && process?.versions?.node) {
            return ["fs", "memory"];
        }
        return ["memory"];
    }

    public static async detectOptimalStorageType(): Promise<ZeraStorageType> {
        const storageTypePriority = ZeraStorageDetector.getStorageTypePriority();
        console.log("Storage type priority:", storageTypePriority);

        for (const storageType of storageTypePriority) {
            if (await ZeraStorageDetector.isStorageAvailable(storageType)) {
                return storageType;
            }
        }
        throw new Error("No supported storage types available");
    }
}
