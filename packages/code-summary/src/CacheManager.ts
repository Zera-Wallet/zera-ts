import fs from "fs";
import path from "path";
import { promisify } from "util";
import { zlogger } from "@zera-ts/logger";

export const readFileAsync = promisify(fs.readFile);
export const writeFileAsync = promisify(fs.writeFile);
export const mkdirAsync = promisify(fs.mkdir);

export class CacheManager {
    cachePath: string;
    cacheFile: string;
    cache: { [key: string]: string } = {};
    private didAttemptLoadLocalCache = false;
    forceRefresh;

    constructor(cachePath: string, forceRefresh = false) {
        this.cachePath = cachePath;
        this.cacheFile = path.join(this.cachePath, "cache.json");
        this.forceRefresh = forceRefresh;
    }

    async loadCache(): Promise<void> {
        if (!this.didAttemptLoadLocalCache) {
            this.cache = await this.readCache();
        } else {
            zlogger.warn(`Cache already loaded`);
        }
    }

    private async readCache(): Promise<{ [key: string]: string }> {
        try {
            zlogger.warn(`Reading cache file`, this.cacheFile);
            this.didAttemptLoadLocalCache = true;
            const content = await readFileAsync(this.cacheFile, "utf8");
            zlogger.debug(`Found local cache file`, this.cacheFile);
            return JSON.parse(content);
        } catch (error) {
            zlogger.error(`Failed to read cache file ${this.cacheFile}:`, error);
            return {};
        }
    }

    private async writeCache(): Promise<void> {
        try {
            const content = JSON.stringify(this.cache);
            await mkdirAsync(path.dirname(this.cacheFile), { recursive: true });
            await writeFileAsync(this.cacheFile, content);
        } catch (error) {
            zlogger.error(`Failed to write cache file ${this.cacheFile}:`, error);
        }
    }

    async get(filePath: string): Promise<string | null> {
        if (!this.didAttemptLoadLocalCache) {
            this.cache = await this.readCache();
        }

        if (this.forceRefresh) {
            zlogger.warn(`Forcing refresh of file ${filePath}`);
            return null;
        }

        zlogger.debug(`Getting cache for file ${filePath}`);
        const content = this.cache[filePath] || null;
        if (content !== null) {
            zlogger.info(`Cache hit for file ${filePath}`);
        } else {
            zlogger.warn(`Cache miss for file ${filePath}`);
        }
        return content;
    }

    async set(filePath: string, content: string): Promise<void> {
        zlogger.debug(`Setting cache for file ${filePath}`);
        this.cache[filePath] = content;
    }

    async flush(): Promise<void> {
        await this.writeCache();
        this.didAttemptLoadLocalCache = false;
    }

    async destroy(): Promise<void> {
        await this.writeCache();
    }
}
