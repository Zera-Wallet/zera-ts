/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        {
            name: "fix-dynamic-imports",
            transform(code, id) {
                if (/src\/ZeraStorageFactory\.ts$/.test(id)) {
                    code = code.replace(/\.js/g, ".ts");
                    return code;
                }
            },
        },
    ],
});
