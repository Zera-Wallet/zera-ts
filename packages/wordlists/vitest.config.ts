/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        {
            name: "fix-dynamic-imports",
            transform(code, id) {
                if (/src\/ZeraWordlist\.ts$/.test(id)) {
                    code = code.replace(/\.js/g, ".ts");
                    return code;
                }
            },
        },
    ],
});
