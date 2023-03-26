import { ZeraStorage, ZeraStorageTypeWithAuto, ZeraStorageType } from "./ZeraStorage";
import { ZeraStorageDetector } from "./ZeraStorageDetector";

export type ZeraStorageModuleLoader = () => Promise<ZeraStorage>;

export class ZeraStorageFactory {
    static async create(type?: ZeraStorageTypeWithAuto): Promise<ZeraStorage>;
    static async create(customModuleLoader: ZeraStorageModuleLoader): Promise<ZeraStorage>;
    static async create(arg: ZeraStorageTypeWithAuto | ZeraStorageModuleLoader = "auto"): Promise<ZeraStorage> {
        let customModuleLoader: ZeraStorageModuleLoader | undefined;

        if (typeof arg === "function") {
            customModuleLoader = arg;
        } else if (typeof arg === "string") {
            const resolvedType = arg === "auto" ? await ZeraStorageDetector.detectOptimalStorageType() : arg;
            try {
                const { module: ModuleConstructor } = await import(`./storage/${resolvedType}.js`);
                console.log(`Using ${resolvedType} storage`);
                return new ModuleConstructor();
            } catch (error) {
                console.log(
                    `Failed to load ${resolvedType} storage module: ${error instanceof Error ? error.message : error}`
                );
                throw new Error(`Unsupported storage type: ${resolvedType}`);
            }
        } else {
            throw new Error(`Invalid argument type: ${arg} is not a valid ZeraStorageType`);
        }

        try {
            const storageInstance = await customModuleLoader();
            return storageInstance;
        } catch (error) {
            throw new Error(`Failed to load custom storage module: ${error instanceof Error ? error.message : error}`);
        }
    }
}
