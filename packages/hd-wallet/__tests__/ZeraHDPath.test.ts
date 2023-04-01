import { test, expect, describe } from "vitest";
import { ZERA_COIN_TYPES } from "../src/types/index";
import { ZeraHDPath } from "../src/ZeraHDPath";

const invalidPurposes = [45, 50, 85];
const invalidChanges = [2, 3];

describe("ZeraHDPath", () => {
    test("constructor should create ZeraHDPath object with correct values", () => {
        ZERA_COIN_TYPES.forEach((coinType) => {
            const hdPath = new ZeraHDPath(44, coinType, 0, 0, 0);
            expect(hdPath.purpose).toBe(44);
            expect(hdPath.coinType).toBe(coinType);
            expect(hdPath.account).toBe(0);
            expect(hdPath.change).toBe(0);
            expect(hdPath.index).toBe(0);
        });
    });

    test("constructor should throw error on invalid purpose", () => {
        invalidPurposes.forEach((purpose) => {
            // @ts-expect-error - purpose is invalid
            expect(() => new ZeraHDPath(purpose, 0, 0, 0, 0)).toThrow("Invalid purpose: Only purpose 44 is supported");
        });
    });

    test("toString should return the correct HD path string", () => {
        ZERA_COIN_TYPES.forEach((coinType) => {
            const hdPath = new ZeraHDPath(44, coinType, 0, 0, 0);
            expect(hdPath.toString()).toBe(`m/44'/${coinType}'/0'/0/0`);
        });
    });

    test("fromString should create ZeraHDPath object with correct values", () => {
        ZERA_COIN_TYPES.forEach((coinType) => {
            const hdPath = ZeraHDPath.fromString(`m/44'/${coinType}'/0'/0/0`);
            expect(hdPath.purpose).toBe(44);
            expect(hdPath.coinType).toBe(coinType);
            expect(hdPath.account).toBe(0);
            expect(hdPath.change).toBe(0);
            expect(hdPath.index).toBe(0);
        });
    });

    test("fromString should throw error on invalid path string", () => {
        expect(() => ZeraHDPath.fromString("m/44'/0'/0'/0")).toThrow("Invalid path string");
    });

    test("fromString should throw error on invalid purpose", () => {
        invalidPurposes.forEach((purpose) => {
            expect(() => ZeraHDPath.fromString(`m/${purpose}'/0'/0'/0/0`)).toThrow(
                "Invalid purpose: must be 44, 49 or 84"
            );
        });
    });

    test("fromString should throw error on invalid coin type", () => {
        expect(() => ZeraHDPath.fromString("m/44'/99996969'/0'/0/0")).toThrow("Invalid coin type");
    });

    test("fromString should throw error on invalid change", () => {
        invalidChanges.forEach((change) => {
            expect(() => ZeraHDPath.fromString(`m/44'/0'/0'/${change}/0`)).toThrow("Invalid change: must be 0 or 1");
        });
    });

    test("fromString should throw error on invalid index", () => {
        const invalidIndexes = [-1, -2, -3];
        invalidIndexes.forEach((index) => {
            try {
                ZeraHDPath.fromString(`m/44'/0'/0'/0/${index}`);
            } catch (e) {
                expect(e.message).toBe("Invalid path string");
            }
        });
    });
});
