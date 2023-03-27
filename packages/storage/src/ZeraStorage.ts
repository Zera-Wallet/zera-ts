export const ZeraStorageType = {
    LOCAL_STORAGE: "localStorage",
    FILE_SYSTEM: "fs",
    MEMORY: "memory",
} as const;
export type ZeraStorageType = (typeof ZeraStorageType)[keyof typeof ZeraStorageType];

export const ZeraStorageTypeWithAuto = {
    AUTO: "auto",
    ...ZeraStorageType,
} as const;
export type ZeraStorageTypeWithAuto = (typeof ZeraStorageTypeWithAuto)[keyof typeof ZeraStorageTypeWithAuto];

export function isValidZeraStorageType(type: unknown): type is ZeraStorageType {
    return typeof type === "string" && Object.values(ZeraStorageType).includes(type as ZeraStorageType);
}
export function isValidZeraStorageTypeWithAuto(type: unknown): type is ZeraStorageTypeWithAuto {
    return typeof type === "string" && Object.values(ZeraStorageTypeWithAuto).includes(type as ZeraStorageTypeWithAuto);
}

export abstract class ZeraStorage {
    protected type: ZeraStorageType;

    constructor(type: ZeraStorageType) {
        this.type = type;
    }

    public getType(): ZeraStorageType {
        return this.type;
    }

    abstract setItem(key: string, value: string): Promise<void>;
    abstract getItem(key: string): Promise<string | null>;
    abstract removeItem(key: string): Promise<void>;
    abstract clear(): Promise<void>;
}
