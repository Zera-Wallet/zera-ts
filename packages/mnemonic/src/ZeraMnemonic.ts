import { pbkdf2 } from "@noble/hashes/pbkdf2";
import { sha256 } from "@noble/hashes/sha256";
import ZeraWordlist, { ZeraLanguage } from "@zera-ts/wordlists";

import { normalize } from "./utils";
import { binaryToBytes, bytesToBinary, randomBytes } from "@zera-ts/bytes";

/**
 * A class representing a BIP39 mnemonic for generating cryptographic seeds.
 */
export class ZeraMnemonic {
    private readonly mnemonic: ReadonlyArray<string>;
    private readonly language: ZeraLanguage;

    private constructor(mnemonic: ReadonlyArray<string>, language: ZeraLanguage) {
        this.mnemonic = mnemonic;
        this.language = language;
    }

    /**
     * Returns the mnemonic phrase as a string.
     * @param separator Optional separator to use when joining mnemonic words. Default is a single space.
     * @returns The mnemonic phrase as a string.
     */
    public toString(separator = " "): string {
        return this.mnemonic.join(separator);
    }

    /**
     * Returns the mnemonic words as a readonly array of strings.
     * @returns A readonly array containing the mnemonic words.
     */
    public getWords(): ReadonlyArray<string> {
        return this.mnemonic;
    }

    /**
     * Creates a ZeraMnemonic instance from a given mnemonic phrase and language.
     * @param phrase The mnemonic phrase as a string.
     * @param language The language of the mnemonic phrase. Default is English (en).
     * @returns A Promise that resolves to a ZeraMnemonic instance.
     * @throws Will throw an error if the mnemonic phrase is invalid.
     */
    public static async fromPhrase(phrase: string, language: ZeraLanguage = "en"): Promise<ZeraMnemonic> {
        const mnemonic = phrase.split(" ");
        const instance = new ZeraMnemonic(mnemonic, language);

        if (await instance.isValid()) {
            return instance;
        } else {
            throw new Error("Invalid mnemonic phrase.");
        }
    }

    /**
     * Creates a ZeraMnemonic instance from a given entropy and language.
     * @param entropy The entropy as a Uint8Array.
     * @param language The language of the mnemonic phrase. Default is English (en).
     * @returns A Promise that resolves to a ZeraMnemonic instance.
     */
    public static async fromEntropy(entropy: Uint8Array, language: ZeraLanguage = "en"): Promise<ZeraMnemonic> {
        const wordlist = await ZeraWordlist.get(language);
        const words = wordlist.words;
        const entropyBits = bytesToBinary(entropy);
        const fullChecksum = sha256(entropy);
        const fullChecksumBits = bytesToBinary(fullChecksum);
        const checksumBits = fullChecksumBits.slice(0, (entropy.length * 8) / 32);
        const concatenatedBits = entropyBits + checksumBits;

        const bitGroups = concatenatedBits.match(/(.{1,11})/g) || [];

        const mnemonic = bitGroups.map((bits) => {
            const index = parseInt(bits, 2);
            return words[index];
        });
        return new ZeraMnemonic(mnemonic, language);
    }

    /**
     * Generates a ZeraMnemonic instance with the specified strength and language.
     * @param strength The strength of the mnemonic phrase. Default is 128.
     *                 Must be one of 128, 160, 192, 224, or 256.
     * @param language The language of the mnemonic phrase. Default is English (en).
     * @returns A Promise that resolves to a ZeraMnemonic instance.
     * @throws Will throw an error if the strength value is invalid.
     */
    public static async generate(strength = 128, language: ZeraLanguage = "en"): Promise<ZeraMnemonic> {
        if (strength % 32 !== 0 || strength < 128 || strength > 256) {
            throw new Error("Invalid strength value. It must be one of 128, 160, 192, 224, or 256.");
        }
        const byteLength = strength / 8;
        const entropy = randomBytes(byteLength);
        return ZeraMnemonic.fromEntropy(entropy, language);
    }

    /**
     * Converts the mnemonic words back to entropy.
     * @returns A Promise that resolves to a Uint8Array containing the entropy.
     * @throws Will throw an error if the mnemonic phrase is invalid.
     */
    public async toEntropy(): Promise<Uint8Array> {
        const wordlist = await ZeraWordlist.get(this.language);
        const words = wordlist.words;
        const wordToIndexMap = new Map<string, number>(words.map((word, index) => [word, index]));
        const wordIndexes = this.mnemonic.map((word) => {
            const index = wordToIndexMap.get(word);
            if (index === undefined) {
                throw new Error("Invalid word in mnemonic.");
            }
            return index;
        });
        const bitGroups = wordIndexes.map((index) => index.toString(2).padStart(11, "0"));
        const concatenatedBits = bitGroups.join("");
        const entropyBits = concatenatedBits.slice(0, -((concatenatedBits.length / 33) | 0));
        const entropy = binaryToBytes(entropyBits);

        const fullChecksum = sha256(entropy);
        const fullChecksumBits = bytesToBinary(fullChecksum);
        const checksumBits = fullChecksumBits.slice(0, (entropy.length * 8) / 32);

        if (concatenatedBits.slice(-checksumBits.length) !== checksumBits) {
            throw new Error("Invalid mnemonic phrase. Checksum does not match.");
        }

        return entropy;
    }

    /**
     * Converts the mnemonic words to a seed using an optional password.
     * @param password An optional password to use when generating the seed. Default is an empty string.
     * @returns A Promise that resolves to a Uint8Array containing the seed.
     */
    public async toSeed(password = ""): Promise<Uint8Array> {
        const normalizedMnemonic = this.mnemonic.map((word) => normalize(word)).join(" ");
        const salt = "mnemonic" + normalize(password);
        return pbkdf2(sha256, normalizedMnemonic, salt, { c: 2048, dkLen: 64 });
    }

    /**
     * Checks if the mnemonic is valid.
     * @returns A Promise that resolves to a boolean indicating whether the mnemonic is valid.
     */
    public async isValid(): Promise<boolean> {
        const mnemonicLength = this.mnemonic.length;

        if (![12, 15, 18, 21, 24].includes(mnemonicLength)) {
            return false;
        }

        try {
            await this.toEntropy();
            return true;
        } catch (error) {
            return false;
        }
    }
}
