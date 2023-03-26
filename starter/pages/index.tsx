import { useEffect } from "react";
import ZeraWordlist from "@zera-ts/wordlists";
import ZeraMnemonic from "@zera-ts/mnemonic";
import { ZeraStorageFactory } from "@zera-ts/storage";

export async function getServerSideProps() {
    const wordlist = await ZeraWordlist.get("en");
    // console.log("Wordlist in getServerSideProps", wordlist);

    const mnemonic = await ZeraMnemonic.generate();
    console.log("Mnemonic in getServerSideProps", mnemonic);

    const entropy = await mnemonic.toEntropy();
    console.log("Entropy in getServerSideProps", entropy);

    const isValid = await mnemonic.isValid();
    console.log("isValid in getServerSideProps", isValid);

    const seed = await mnemonic.toSeed();
    console.log("Seed in getServerSideProps", seed);

    const store = await ZeraStorageFactory.create();
    await store.setItem("mnemonic", mnemonic.toString());

    const mnemonicFromStore = await store.getItem("mnemonic");
    console.log("Mnemonic from store in getServerSideProps", mnemonicFromStore);

    await store.clear();
    console.log("Cleared store in getServerSideProps");

    return {
        props: {
            wordlist: JSON.parse(JSON.stringify(wordlist)),
        },
    };
}
export default function Home({ wordlist }: { wordlist: string[] }) {
    // console.log("Wordlist from getServerSideProps", wordlist);

    async function init() {
        const mnemonic = await ZeraMnemonic.generate();
        console.log("Mnemonic in browser", mnemonic);

        const store = await ZeraStorageFactory.create();
        console.log("Store in browser", store);

        await store.setItem("mnemonic", mnemonic.toString());

        const mnemonicFromStore = await store.getItem("mnemonic");
        console.log("Mnemonic from store in browser", mnemonicFromStore);
    }

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        init();
    }, []);

    return <div className="flex">Zera-test</div>;
}
