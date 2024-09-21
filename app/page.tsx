"use client";
import AirdropHomePage from "@/components/AirdropHomePage";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import UiLoader from "@/components/common/UiLoader";

export default function Home() {
    const [isMount, setIsMount] = useState(true);

    useEffect(() => {
        setIsMount(false);
    }, []);

    return isMount ? (
        <UiLoader />
    ) : (
        <ConnectionProvider endpoint="https://api.devnet.solana.com">
            <WalletProvider autoConnect wallets={[]}>
                <AirdropHomePage />
                <Toaster />
            </WalletProvider>
        </ConnectionProvider>
    );
}
