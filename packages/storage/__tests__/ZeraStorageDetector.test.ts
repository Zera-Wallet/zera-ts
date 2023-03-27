import { ZeraStorageType } from "../src/ZeraStorage";
import { ZeraStorageDetector } from "../src/ZeraStorageDetector";
import { test, describe, expect } from "vitest";

describe("ZeraStorageDetector", () => {
    function createLocalStorageMock() {
        let storage = {};

        return {
            getItem(key) {
                return storage[key] || null;
            },
            setItem(key, value) {
                storage[key] = value;
            },
            removeItem(key) {
                delete storage[key];
            },
            clear() {
                storage = {};
            },
        };
    }

    test("detectOptimalStorageType returns localStorage for browser environment", async () => {
        const originalWindow = globalThis.window;
        globalThis.window = { localStorage: createLocalStorageMock() } as Window & typeof globalThis;
        const storageType = await ZeraStorageDetector.detectOptimalStorageType();
        expect(storageType).toBe(ZeraStorageType.LOCAL_STORAGE);
        globalThis.window = originalWindow;
    });

    test("detectOptimalStorageType returns fs for node environment", async () => {
        delete (globalThis as any).window;
        const originalVersions = process.versions;
        Object.defineProperty(process, "versions", { writable: true });
        (process as any).versions = { ...originalVersions, node: "16.0.0" };
        const storageType = await ZeraStorageDetector.detectOptimalStorageType();
        expect(storageType).toBe(ZeraStorageType.FILE_SYSTEM);
        (process as any).versions = originalVersions;
    });

    test("detectOptimalStorageType returns memory as fallback", async () => {
        delete (globalThis as any).window;
        delete (process as any).versions.node;
        const storageType = await ZeraStorageDetector.detectOptimalStorageType();
        expect(storageType).toBe(ZeraStorageType.MEMORY);
    });

    test("detectOptimalStorageType throws error when no supported storage types are available", async () => {
        delete (globalThis as any).window;
        delete (process as any).versions.node;
        const originalTestFunction = ZeraStorageDetector.storageAssertions[ZeraStorageType.MEMORY];
        ZeraStorageDetector.storageAssertions[ZeraStorageType.MEMORY] = async () => {
            throw new Error("Not available");
        };
        try {
            await ZeraStorageDetector.detectOptimalStorageType();
        } catch (error) {
            expect(error instanceof Error && error.message).toBe("No supported storage types available");
        } finally {
            ZeraStorageDetector.storageAssertions[ZeraStorageType.MEMORY] = originalTestFunction;
        }
    });
});
