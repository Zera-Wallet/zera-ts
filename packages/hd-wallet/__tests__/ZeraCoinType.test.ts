import { test, assert, describe } from "vitest";
import { ZERA_COIN_TYPES, isValidCoinType } from "../src/types/index";

describe("ZeraCoinType", () => {
    test("isValidCoinType returns true for valid coin types", () => {
        ZERA_COIN_TYPES.forEach((coinType) => {
            assert.isTrue(isValidCoinType(coinType));
        });
    });

    test("isValidCoinType returns false for invalid coin types", () => {
        const invalidCoinTypes = [-1, NaN, Infinity, undefined, null, "", "69"];
        invalidCoinTypes.forEach((coinType) => {
            // @ts-expect-error - coinType is invalid
            assert.isFalse(isValidCoinType(coinType));
        });
    });

    test("isValidCoinType returns true for valid coin types", () => {
        ZERA_COIN_TYPES.forEach((coinType) => {
            assert.isTrue(typeof coinType === "number" && coinType >= 0 && coinType <= 2147483647);
        });
    });
});
