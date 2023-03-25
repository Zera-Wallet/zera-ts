import { useEffect } from "react";
import ZeraWordlist from "@zera-ts/wordlists";
import ZeraMnemonic from "@zera-ts/mnemonic";

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

    return {
        props: {
            wordlist: JSON.parse(JSON.stringify(wordlist)),
        },
    };
}
export default function Home({ wordlist }: { wordlist: string[] }) {
    // console.log("Wordlist from getServerSideProps", wordlist);

    async function init() {
        const _wordlist = await ZeraWordlist.get("en");
        // console.log("Wordlist in browser", _wordlist);
    }

    useEffect(() => {
        init();
    }, []);

    return <div className="flex">Zera-test</div>;
}
