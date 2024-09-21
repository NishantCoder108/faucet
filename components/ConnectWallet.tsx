import {
    BaseWalletMultiButton,
    WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletIcon } from "lucide-react";

const LABELS = {
    "change-wallet": "Change wallet",
    connecting: "Connecting ...",
    "copy-address": "Copy address",
    copied: "Copied",
    disconnect: "Disconnect",
    "has-wallet": "Connect",
    "no-wallet": "Connect Wallet",
} as const;

const ConnectWallet = () => {
    const wallet = useWallet();
    const isWalletConnected = wallet.connected;

    return (
        <div className="flex items-center justify-center sm:gap-3">
            <div className=" flex items-center text-black   ">
                <WalletIcon className="mr-2 h-4 w-4  hidden   sm:block" />
            </div>
            <WalletModalProvider>
                <div className="flex items-center justify-between">
                    <BaseWalletMultiButton
                        style={
                            isWalletConnected
                                ? connectedStyle
                                : disconnectedStyle
                        }
                        labels={LABELS}
                    />
                </div>
            </WalletModalProvider>
        </div>
    );
};

const connectedStyle = {
    background: "transparent",
    height: "2.5rem",
    width: "10rem",
    fontSize: ".875rem",
    borderRadius: ".30rem",
    // border: "0.5px solid rgba(128, 128, 128, 0.2)",
    color: "white",
    cursor: "pointer",
};
const disconnectedStyle = {
    background: "#f9f8fa",
    height: "2.5rem",
    width: "10rem",
    fontSize: ".875rem",
    borderRadius: ".30rem",
    border: ".5px solid gray",
    color: "black",
};

export default ConnectWallet;
