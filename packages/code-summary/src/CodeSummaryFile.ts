import { Configuration, OpenAIApi } from "openai";
import { CacheManager, readFileAsync } from "./CacheManager";

// const CODE_SUMMARY = `Your task is to provide a concise and short summary of any given source code. Keep your response focused and to the point. A user will provide you with the full source code, and you must generate a brief explanation of its purpose and functionality.\n\n{{code}}\n\n\\Definition:`;
// const TO_DOCS = `Your task is to provide a short, Markdown-compatible summary of the code's functionality without using any code. The summary should be user-friendly and suitable for sharing in messaging apps, such as Slack. Please apply **bold** formatting to the main concept, *italic* formatting to emphasize important details, and use bullet points for any step-by-step explanation. Please provide the code you'd like me to summarize.\n\n{{code}}\n\n\\Transpiled code:`;

// const TO_PYTHON = `Your task is to translates code from various programming languages into Python. The user will provide the source code, and your task is to transpile the given code into equivalent Python code.\n\n{{code}}\n\n\\Transpiled code:`;
const CODE_DEFINITION = `Your task is to generate precise type declarations from the given code snippets. Analyze the code and provide a concise and accurate type declaration for the given input, while minimizing its length. Remove whitespace which isnt essential.\n\n{{code}}\n\n\\Declarations:`;
// const REVIEW_APPLICANT = `...`;
// const LOOK_FOR_BUGS = `...`;

// This would come from a CLI argument
function getPrompt(code: string) {
    return CODE_DEFINITION.replace("{{code}}", code);
}

export class CodeSummaryFile {
    filePath: string;
    cacheManager: CacheManager;

    constructor(filePath: string, cacheManager: CacheManager) {
        this.filePath = filePath;
        this.cacheManager = cacheManager;
    }

    async summarize(): Promise<string> {
        const cachedSummary = await this.cacheManager.get(this.filePath);
        if (cachedSummary) {
            return cachedSummary;
        }

        const summary = await this.generateSummary();
        await this.cacheManager.set(this.filePath, summary);
        return summary;
    }

    async generateSummary(): Promise<string> {
        const code = await this.getCode();
        const prompt = getPrompt(code);

        const configuration = new Configuration({
            apiKey: "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",
            organization: "org-OA25PxSgwHSvaNVO17uFrUVd",
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            temperature: 0.2,
            messages: [
                {
                    content: prompt,
                    role: "system",
                },
            ],
        });

        return response.data.choices[0].message?.content ?? "";
    }

    private async getCode(): Promise<string> {
        try {
            const content = await readFileAsync(this.filePath, "utf8");
            return content;
        } catch (error) {
            console.error(`Failed to read file ${this.filePath}:`, error);
            return "";
        }
    }
}
