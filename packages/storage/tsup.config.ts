import { defineConfig } from "tsup";

export default defineConfig((options) => [
    {
        entry: ["src/index.ts"],
        format: ["cjs", "esm", "iife"],
        splitting: false,
        sourcemap: true,
        clean: true,
        minify: !options.watch,
        dts: true,
    },
    {
        entry: ["src/storage/*.ts"],
        format: ["cjs", "esm", "iife"],
        splitting: false,
        sourcemap: true,
        clean: true,
        minify: !options.watch,
        dts: true,
        outDir: "dist/storage",
    },
]);
