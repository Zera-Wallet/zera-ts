import { randomBytes as nobleRandomBytes } from "@noble/hashes/utils";

export function randomBytes(size: number): Uint8Array {
    return nobleRandomBytes(size);
}

export function bytesToBinary(byteArray: Uint8Array): string {
    return byteArray.reduce((binary, byte) => binary + byte.toString(2).padStart(8, "0"), "");
}

export function binaryToBytes(binaryString: string): Uint8Array {
    const byteLength = Math.ceil(binaryString.length / 8);
    const bytes = new Uint8Array(byteLength);
    for (let i = 0; i < binaryString.length; i += 8) {
        const byteString = binaryString.slice(i, i + 8).padEnd(8, "0");
        const byte = parseInt(byteString, 2);
        bytes[i / 8] = byte;
    }
    return bytes;
}
