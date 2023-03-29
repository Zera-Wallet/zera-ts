// cli.ts
import { Command } from "commander";
import fs from "fs";
import path from "path";
import ignore from "ignore";
import { CodeSummaryTree } from "../CodeSummaryTree";
import { zlogger } from "@zera-ts/logger";

const program = new Command();

program
    .version("1.0.0")
    .option("-d, --directory <path>", "specify the directory to analyze (default: current directory)", process.cwd())
    .option("-g, --glob <pattern...>", 'glob pattern for filtering files (default: "**/*")', ["**/*"])
    .option("-i, --ignore-path <path...>", "path(s) to .gitignore file(s) (default: .gitignore in specified directory)")
    .option("-f, --force", "force re-analysis of all files (default: false)", false)
    .parse(process.argv);

async function run(): Promise<void> {
    const options = program.opts();
    zlogger.log("Starting code summary...", options);

    const { directory, glob, ignorePath, force } = options;
    zlogger.warn(`Force re-analysis of all files:`, force);
    zlogger.log(`Using glob patterns`, glob);

    const ig = ignore();
    if (ignorePath) {
        for (const gitignorePath of ignorePath) {
            const gitignoreFile = path.isAbsolute(gitignorePath) ? gitignorePath : path.join(directory, gitignorePath);
            zlogger.log(`Using .gitignore file at`, gitignoreFile);
            if (fs.existsSync(gitignoreFile)) {
                const gitignoreContent = fs.readFileSync(gitignoreFile, "utf8");
                zlogger.log(`Adding .gitignore content to ignore list:`, gitignoreContent);
                ig.add(gitignoreContent);
            }
        }
    }

    zlogger.log(`Analyzing directory ${directory}`);

    const codeSummaryTree = new CodeSummaryTree({
        rootPath: directory,
        includeGlobs: glob,
        ignore: ig,
        forceRefresh: force,
    });
    const summaries = await codeSummaryTree.summarizeDirectory();

    console.log(`\n\n\n// Code summary response`, {
        includePaths: glob,
        ignorePaths: ignorePath,
        directory,
    });

    for (const filePath of Object.keys(summaries)) {
        const file = summaries[filePath];

        console.log(`// ${filePath}`);
        console.log(file + "\n");
    }

    process.on("SIGINT", () => {
        zlogger.log("Received SIGINT. Cleaning up...");
        codeSummaryTree.cacheManager.destroy();
    });

    process.on("SIGTERM", () => {
        zlogger.log("Received SIGTERM. Cleaning up...");
        codeSummaryTree.cacheManager.destroy();
    });
}

run();
