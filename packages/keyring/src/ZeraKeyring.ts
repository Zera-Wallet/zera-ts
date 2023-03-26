import { argon2id } from "@noble/hashes/argon2";
import { AES } from "@noble/hashes/aes";
import { randomBytes } from "@zera-ts/bytes";

/**
 * A class representing an encrypted keyring for securely storing and managing cryptographic keys.
 */
export class ZeraKeyring {
    private encryptedSeed?: Uint8Array;
    private encryptionKey?: Uint8Array;
    private readonly wordlist: ZeraWordlist;

    /**
     * Creates a new ZeraKeyring instance with the specified wordlist.
     * @param wordlist The ZeraWordlist to use for generating mnemonics.
     */
    constructor(wordlist: ZeraWordlist) {
        this.wordlist = wordlist;
    }

    /**
     * Decrypts the encrypted seed using the provided passphrase.
     * @param passphrase The passphrase to use to decrypt the encrypted seed.
     * @returns A Promise that resolves to the decrypted seed as a Uint8Array.
     * @throws Will throw an error if the passphrase is incorrect or if the keyring is not yet encrypted.
     */
    async decryptSeed(passphrase: string): Promise<Uint8Array> {
        if (!this.encryptionKey || !this.encryptedSeed) {
            throw new Error("Keyring is not yet encrypted");
        }

        // Derive the encryption key using Argon2
        const salt = this.encryptedSeed.slice(0, 16);
        const encryptionKey = await argon2id(passphrase, salt, {
            timeCost: 2,
            memoryCost: 65536,
            parallelism: 1,
            hashLength: 32,
        });

        // Decrypt the encrypted seed using AES-GCM encryption
        const iv = this.encryptedSeed.slice(16, 28);
        const encryptedSeed = this.encryptedSeed.slice(28);
        const aes = new AES(encryptionKey);
        const seed = aes.decryptGCM(encryptedSeed, iv);

        return seed;
    }

    /**
     * Encrypts the seed using the provided passphrase and stores it in the keyring.
     * @param seed The seed to encrypt and store in the keyring.
     * @param passphrase The passphrase to use to encrypt the seed.
     * @returns A Promise that resolves when the seed has been encrypted and stored.
     * @throws Will throw an error if the keyring is already encrypted or if encryption fails.
     */
    async encryptSeed(seed: Uint8Array, passphrase: string): Promise<void> {
        if (this.encryptionKey || this.encryptedSeed) {
            throw new Error("Keyring is already encrypted");
        }

        // Derive the encryption key using Argon2
        const salt = randomBytes(16);
        const encryptionKey = argon2id(passphrase, salt, {
            hashLen: 32,
            time: 2,
            mem: 65536,
            parallelism: 1,
            type: argon2id.ArgonType.Argon2id,
        });
        this.encryptionKey = encryptionKey;

        // Generate a 12-byte initialization vector for the encryption algorithm
        const iv = randomBytes(12);

        // Create a new AES encryption object with the key
        const aes = new AES(encryptionKey);

        // Encrypt the seed using AES-GCM encryption
        const encryptedSeed = aes.encryptGCM(seed, iv);

        // Combine the initialization vector, salt, and encrypted seed into a single buffer
        const output = new Uint8Array(iv.byteLength + salt.byteLength + encryptedSeed.byteLength);
        output.set(iv);
        output.set(salt, iv.byteLength);
        output.set(encryptedSeed, iv.byteLength + salt.byteLength);
        this.encryptedSeed = output;
    }
}
