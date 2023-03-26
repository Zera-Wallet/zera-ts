import { ZeraStorage } from "../ZeraStorage";
import { promises as fsPromises, existsSync, mkdirSync, rmdirSync } from "fs";
import { join } from "path";

export class FSStorage extends ZeraStorage {
    private storagePath: string;

    constructor(storagePath = ".zera-storage") {
        super("fs");
        if (!existsSync(storagePath)) {
            mkdirSync(storagePath, { recursive: true });
        }
        this.storagePath = storagePath;
    }

    private getFilePath(key: string): string {
        return join(this.storagePath, key);
    }

    async setItem(key: string, value: string): Promise<void> {
        await fsPromises.writeFile(this.getFilePath(key), value, "utf-8");
    }

    async getItem(key: string): Promise<string | null> {
        try {
            return await fsPromises.readFile(this.getFilePath(key), "utf-8");
        } catch (error) {
            if (error instanceof Error && "code" in error && error.code === "ENOENT") {
                return null;
            }
            throw error;
        }
    }

    async removeItem(key: string): Promise<void> {
        try {
            await fsPromises.unlink(this.getFilePath(key));
        } catch (error) {
            if (error instanceof Error && "code" in error && error.code === "ENOENT") {
                throw error;
            }
        }
    }

    async clear(): Promise<void> {
        const files = await fsPromises.readdir(this.storagePath);
        const unlinkPromises = files.map((file) => fsPromises.unlink(this.getFilePath(file)));
        await Promise.all(unlinkPromises);
        rmdirSync(this.storagePath);
    }
}

export { FSStorage as module };
