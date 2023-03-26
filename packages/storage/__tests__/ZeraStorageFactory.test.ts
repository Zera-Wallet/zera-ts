import { ZeraStorageFactory, ZeraStorageModuleLoader } from "../src/ZeraStorageFactory";
import { describe, it, expect, afterEach } from "vitest";

describe("ZeraStorageFactory", () => {
    describe("create", () => {
        afterEach(async () => {
            const storage = await ZeraStorageFactory.create();
            await storage.clear();
        });

        it("should create an instance of ZeraStorage when type is specified", async () => {
            const storage = await ZeraStorageFactory.create("memory");
            expect(storage).toBeDefined();
        });

        it("should create an instance of ZeraStorage using auto-detection", async () => {
            const storage = await ZeraStorageFactory.create();
            expect(storage).toBeDefined();
        });

        it("should throw an error when an unsupported storage type is specified", async () => {
            const invalidType = "invalid";
            await expect(ZeraStorageFactory.create(invalidType as any)).rejects.toThrow(
                `Invalid argument type: ${invalidType} is not a valid ZeraStorageType`
            );
        });

        it("should throw an error when custom storage module loader fails", async () => {
            const customLoader = async () => {
                throw new Error("Failed to load custom storage module");
            };
            await expect(ZeraStorageFactory.create(customLoader)).rejects.toThrow(
                "Failed to load custom storage module"
            );
        });

        it("should load a custom storage module using the provided loader function", async () => {
            const customLoader = (async () => {
                const { module: ModuleConstructor } = await import(`../src/storage/memory.js`);
                return new ModuleConstructor();
            }) as any as ZeraStorageModuleLoader;
            const storage = await ZeraStorageFactory.create(customLoader);
            expect(storage).toBeDefined();
        });
    });
});
