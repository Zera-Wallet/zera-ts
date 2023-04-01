import { ZeraCoinType, isValidCoinType } from "./types/index";

export type ZeraPurpose = 44 | 49 | 84;
function isZeraPurpose(value: number): value is ZeraPurpose {
    return value === 44 || value === 49 || value === 84;
}

export type ZeraChange = 0 | 1;
function isZeraChange(value: number): value is ZeraChange {
    return value === 0 || value === 1;
}

export class ZeraHDPath<
    TPurpose extends ZeraPurpose = ZeraPurpose,
    TCoinType extends ZeraCoinType = ZeraCoinType,
    TAccount extends number = number,
    TChange extends ZeraChange = ZeraChange,
    TIndex extends number = number
> {
    public readonly purpose: TPurpose;
    public readonly coinType: TCoinType;
    public readonly account: TAccount;
    public readonly change: TChange;
    public readonly index: TIndex;

    constructor(purpose: TPurpose, coinType: TCoinType, account: TAccount, change: TChange, index: TIndex) {
        if (purpose !== 44) {
            throw new Error("Invalid purpose: Only purpose 44 is supported");
        }

        this.purpose = purpose;
        this.coinType = coinType;
        this.account = account;
        this.change = change;
        this.index = index;
    }

    /**
     * Returns the HD path as a string.
     * @returns The HD path as a string.
     */
    toString(): string {
        return `m/${this.purpose}'/${this.coinType}'/${this.account}'/${this.change}/${this.index}`;
    }

    /**
     * Creates a ZeraHDPath instance from a given path string.
     * @param path The path string.
     * @returns A ZeraHDPath instance.
     * @throws Will throw an error if the path string is invalid.
     */
    static fromString(path: string): ZeraHDPath {
        const regex = /^m\/(\d+)'\/(\d+)'\/(\d+)'\/(\d+)\/(\d+)$/;
        const match = regex.exec(path);

        if (!match) {
            throw new Error("Invalid path string");
        }

        const [_, purpose, coinType, account, change, index] = match.map(Number);
        if (!isZeraPurpose(purpose)) {
            throw new Error("Invalid purpose: must be 44, 49 or 84");
        }
        if (!isValidCoinType(coinType)) {
            throw new Error("Invalid coin type");
        }
        if (!isZeraChange(change)) {
            throw new Error("Invalid change: must be 0 or 1");
        }
        if (!Number.isInteger(account) || account < 0) {
            throw new Error("Invalid index");
        }

        return new ZeraHDPath(purpose, coinType, account, change, index);
    }
}
