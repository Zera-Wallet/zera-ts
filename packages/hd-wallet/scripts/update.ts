/// <reference lib="dom" />
import fs from "fs";

type BIP44Coin = {
    type: number;
    symbol?: string;
    name?: string;
};

function extractCoinsFromMarkdown(markdown: string): BIP44Coin[] {
    const tableRegex = /\| Coin type\s*\|.*\n\|.*\n(\|.*\n)+/g;
    const rowRegex = /\| (\d+)\s*\| (0x[0-9a-fA-F]+)\s*\| ([A-Z]* ?)\s*\| (.+?)\s*\|/g;

    const tableMatch = tableRegex.exec(markdown);
    if (!tableMatch) {
        throw new Error("Table not found in the markdown");
    }

    const tableContent = tableMatch[0];
    const coinTypes: BIP44Coin[] = [];

    let rowMatch;
    while ((rowMatch = rowRegex.exec(tableContent)) !== null) {
        coinTypes.push({
            type: parseInt(rowMatch[1], 10),
            symbol: rowMatch[3].trim() || undefined,
            name: rowMatch[4].trim() || undefined,
        });
    }

    return coinTypes;
}

async function fetchSLIP0044(): Promise<string> {
    const SLIP_0044_URL = "https://raw.githubusercontent.com/satoshilabs/slips/master/slip-0044.md";
    const response = await fetch(SLIP_0044_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch SLIP_0044: ${response.status} ${response.statusText}`);
    }

    return response.text();
}

async function updateCoinTypes(): Promise<void> {
    try {
        const data = await fetchSLIP0044();
        const coinTypes = extractCoinsFromMarkdown(data);
        if (!coinTypes || coinTypes.length === 0) {
            throw new Error("Failed to extract coinTypes from markdown");
        }

        const newFileContent = `export type ZeraCoinType = (typeof ZERA_COIN_TYPES)[number];\nexport const ZERA_COIN_TYPES = ${JSON.stringify(
            coinTypes.map((coin) => coin.type),
            undefined,
            4
        )} as const;\n\nexport function isValidCoinType(value: number): value is ZeraCoinType { return ZERA_COIN_TYPES.includes(value as ZeraCoinType); }`;

        fs.writeFile("./src/types/index.ts", newFileContent, (err) => {
            if (err) {
                console.error("Error writing coins to file:", err);
            } else {
                console.log("Coins written to file coins.ts");
            }
        });
    } catch (error) {
        console.error("Error updating coin types:", error);
    }
}

updateCoinTypes();
