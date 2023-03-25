import { ZeraMnemonic } from "../src/ZeraMnemonic";
import { describe, test, expect } from "vitest";

describe("ZeraMnemonic", () => {
    test("generate valid mnemonic", async () => {
        const mnemonic = await ZeraMnemonic.generate();
        expect(await mnemonic.isValid()).toBe(true);
    });

    test("generate mnemonic with different strength", async () => {
        const mnemonic = await ZeraMnemonic.generate(192);
        expect(await mnemonic.isValid()).toBe(true);
    });

    test("invalid strength value", async () => {
        await expect(ZeraMnemonic.generate(130)).rejects.toThrow(
            "Invalid strength value. It must be one of 128, 160, 192, 224, or 256."
        );
    });

    test("mnemonic to seed", async () => {
        const mnemonic = await ZeraMnemonic.generate();
        const seed = await mnemonic.toSeed();
        expect(seed.length).toBe(64);
    });

    test("mnemonic to seed with password", async () => {
        const mnemonic = await ZeraMnemonic.generate();
        const seed = await mnemonic.toSeed("password");
        expect(seed.length).toBe(64);
    });

    test("mnemonic to entropy and back", async () => {
        const originalMnemonic = await ZeraMnemonic.generate();
        const entropy = await originalMnemonic.toEntropy();
        const mnemonic = await ZeraMnemonic.fromEntropy(entropy);
        expect(mnemonic.toString()).toBe(originalMnemonic.toString());
    });

    test("fromPhrase", async () => {
        const originalMnemonic = await ZeraMnemonic.generate();
        const phrase = originalMnemonic.toString();
        const mnemonic = await ZeraMnemonic.fromPhrase(phrase);
        expect(mnemonic.toString()).toBe(phrase);
    });

    test("invalid fromPhrase", async () => {
        const invalidPhrase = "invalid mnemonic phrase";
        await expect(ZeraMnemonic.fromPhrase(invalidPhrase)).rejects.toThrow("Invalid mnemonic phrase.");
    });
});
