import { useEffect } from "react";
import ZeraWordlist from "@zera-ts/wordlists";
import ZeraMnemonic from "@zera-ts/mnemonic";
import { ZeraStorageFactory, ZeraStorage } from "@zera-ts/storage";
import ZeraLogger from "@zera-ts/logger";

const zlogger = new ZeraLogger("debug");

export async function getServerSideProps() {
    const wordlist = await ZeraWordlist.get("en");
    // console.log("Wordlist in getServerSideProps", wordlist);

    const mnemonic = ZeraMnemonic.generate(128, wordlist);
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
    console.log("Store cleared in getServerSideProps");

    zlogger.error("Error in getServerSideProps");
    zlogger.warn("Warn in getServerSideProps");
    zlogger.info("Info in getServerSideProps");
    zlogger.debug("Debug in getServerSideProps", {
        test: "test",
    });

    const perf = await zlogger.performance(
        async () => {
            for (let i = 0; i < 10; i++) {
                const mnemonic = await ZeraMnemonic.generate(128);

                const seed = mnemonic.toSeed();
            }
        },
        {
            label: "10 mnemonics",
        }
    );

    return {
        props: {},
    };
}
export default function Home() {
    async function init() {
        const mnemonic = await ZeraMnemonic.generate(128);
        console.log("Mnemonic in browser", mnemonic);

        const store = await ZeraStorageFactory.create();
        console.log("Store in browser", store);

        await store.setItem("mnemonic", mnemonic.toString());

        const perf = await zlogger.performance(
            async () => {
                for (let i = 0; i < 10; i++) {
                    const mnemonic = await generateAndSaveMnemonic(store, `mnemonic-${i}`);

                    const isValid = await mnemonic.isValid();
                    console.log("isValid in browser", isValid);

                    const seed = await mnemonic.toSeed();
                }
            },
            {
                label: "10 mnemonics",
            }
        );

        console.log("Performance in browser", perf);

        zlogger.error("Error in browser");
        zlogger.warn("Warn in browser");
        zlogger.info("Info in browser");
        zlogger.debug("Debug in browser", {
            test: "test",
        });

        await store.clear();
        console.log("Store cleared in browser");
    }

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        init();
    }, []);

    return <div className="flex">Zera-test</div>;
}

async function generateAndSaveMnemonic(store: ZeraStorage, key: string) {
    const mnemonic = await ZeraMnemonic.generate(128);
    await store.setItem(key, mnemonic.toString());
    return mnemonic;
}
