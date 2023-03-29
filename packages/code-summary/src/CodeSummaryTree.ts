// CodeSummaryTree.ts
import path from "path";
import glob from "glob";
import { CacheManager } from "./CacheManager";

import { Ignore } from "ignore";
import { CodeSummaryFile } from "./CodeSummaryFile";
import { zlogger } from "@zera-ts/logger";

export type CodeSummaryTreeOptions = {
    rootPath: string;
    includeGlobs?: string[];
    ignore?: Ignore;
    forceRefresh?: boolean;
};

export class CodeSummaryTree {
    rootPath: string;
    cacheManager: CacheManager;
    ignore?: Ignore;
    includeGlobs?: string[];

    constructor({ rootPath, includeGlobs, ignore: ig, forceRefresh }: CodeSummaryTreeOptions) {
        this.rootPath = rootPath;
        this.includeGlobs = includeGlobs;
        this.cacheManager = new CacheManager(path.join(rootPath, ".summaries"), forceRefresh);
        this.ignore = ig;
    }

    async summarizeDirectory(directoryPath = this.rootPath): Promise<{ [key: string]: string }> {
        const summaries: { [key: string]: string } = {};
        const files = (this.includeGlobs || ["**/*"])
            .flatMap((pattern) => glob.sync(pattern, { cwd: directoryPath, nodir: true }))
            .filter((file) => (this.ignore ? this.ignore.filter([file]).length > 0 : false));

        zlogger.debug(`Files to summarize:`, files);

        await this.cacheManager.loadCache();

        const promises = files.map(async (file) => {
            const filePath = path.normalize(path.join(directoryPath, file));
            zlogger.debug(`Summarizing file`, filePath);
            const codeSummaryFile = new CodeSummaryFile(filePath, this.cacheManager);
            summaries[file] = await codeSummaryFile.summarize();
        });

        await Promise.all(promises);
        await this.cacheManager.destroy();

        return summaries;
    }
}
