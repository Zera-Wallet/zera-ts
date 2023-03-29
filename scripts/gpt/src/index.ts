#!/usr/bin/env node

import fs from "fs";
import path from "path";
import globby from "globby";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "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",
    organization: "org-OA25PxSgwHSvaNVO17uFrUVd",
});
const openai = new OpenAIApi(configuration);

interface FileInfo {
    path: string;
    summary: string;
}

interface CodebaseSummary {
    files: FileInfo[];
}

async function generateCodebaseSummary(
    repoPath: string,
    ignorePatterns: string[],
    includePatterns: string[]
): Promise<CodebaseSummary> {
    const files = await getAllFiles(repoPath, ignorePatterns, includePatterns);
    const fileInfoPromises = files.map(async (filePath) => {
        return await getFileInfo(filePath);
    });
    const fileInfoList = await Promise.all(fileInfoPromises);

    return {
        files: fileInfoList,
    };
}

async function getAllFiles(repoPath: string, ignorePatterns: string[], includePatterns: string[]): Promise<string[]> {
    const files = await globby(includePatterns, { cwd: repoPath, ignore: ignorePatterns });
    return files.map((file) => path.join(repoPath, file));
}

async function getFileInfo(filePath: string): Promise<FileInfo> {
    const code = await fs.promises.readFile(filePath, "utf-8");
    const summary = await generateSummary(filePath, code);
    return {
        path: filePath,
        summary,
    };
}

async function generateSummary(filePath: string, code: string): Promise<string> {
    const preprompt = `Please analyze the provided code file and generate a concise summarization that captures its key functionalities and structures. Do not include any additional messages or explanations in your response.
    
    // ${filePath}
    ${code}
    `;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            temperature: 0.0,
            messages: [
                {
                    content: preprompt,
                    role: "system",
                },
            ],
        });
        console.log(completion.data.choices[0].message?.content);
        return completion.data.choices[0].message?.content || "";
    } catch (error: any) {
        if ("response" in error) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        console.error("Error generating summary using OpenAI API:", error);
        return "";
    }
}

async function main() {
    const argv = yargs(hideBin(process.argv))
        .usage("Usage: $0 <includePattern> [options]")
        .demandCommand(1, "Please provide the first include glob pattern.")
        .option("exclude", {
            alias: "e",
            type: "array",
            describe: "Patterns to exclude",
            default: ["node_modules/**/*"],
            coerce: (arg: string | string[]) => (Array.isArray(arg) ? arg : [arg]),
        })
        .option("include", {
            alias: "i",
            type: "array",
            describe: "Additional patterns to include",
            default: [],
            coerce: (arg: string | string[]) => (Array.isArray(arg) ? arg : [arg]),
        })
        .alias("h", "help")
        .help().argv;

    console.log(argv);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const firstIncludePattern = argv._[0];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const includePatterns = [firstIncludePattern].concat(argv.include);
    const repoPath = process.cwd();

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const codebaseSummary = await generateCodebaseSummary(repoPath, argv.exclude, includePatterns);
        const summaryString = JSON.stringify(codebaseSummary, undefined, 2);
        console.log(summaryString);

        // Write the summary to a file named "summary.json"
        const outputFilePath = path.join(process.cwd(), "summary.json");
        await fs.promises.writeFile(outputFilePath, summaryString);
        console.log(`Summary saved to ${outputFilePath}`);
    } catch (err) {
        console.error("Error generating codebase summary:", err);
        process.exit(1);
    }
}

main();
