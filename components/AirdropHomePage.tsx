import Image from "next/image";
import React, { useState } from "react";
import solanaLogo from "@/app/images/solanaLogo.svg";
import { Input } from "./ui/input";
import ConnectWallet from "./ConnectWallet";
import { Button } from "./ui/button";
import { RefreshCw, SendIcon } from "lucide-react";
import { Label } from "./ui/label";
import { motion } from "framer-motion";
const AirdropHomePage = () => {
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <div>
                <div className="flex items-center justify-center w-full p-8 mx-auto">
                    <Image
                        alt="Solana Logo"
                        loading="lazy"
                        width="242"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        className="text-transparent"
                        src={solanaLogo}
                    />
                </div>

                <section className="p-4 mx-auto space-y-10 md:p-0 md:space-y-0">
                    <main className="items-center justify-center w-full space-y-8 md:py-20">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full mx-auto md:max-w-lg">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                                    <div className="flex items-center justify-between gap-3">
                                        <span>Request Airdrop</span>

                                        <ConnectWallet />
                                    </div>
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Maximum of 5 requests per hour
                                </p>
                            </div>

                            <div className="p-6 ">
                                <div className=" flex justify-between items-center ">
                                    <h1 className="font-semibold">Balance</h1>

                                    <Button variant={"ghost"}>
                                        {" "}
                                        <RefreshCw
                                            size={16}
                                            className="pr-1"
                                        />{" "}
                                        Refresh{" "}
                                    </Button>
                                </div>

                                <h1 className="p-2 my-2 bg-slate-950 font-bold text-2xl text-center ">
                                    45 SOL{" "}
                                </h1>

                                <div className="space-y-2 mt-2 ">
                                    <Label
                                        htmlFor="amount"
                                        className="text-sm font-medium text-gray-300 dark:text-gray-300"
                                    >
                                        Airdrop Amount (SOL)
                                    </Label>
                                    <Input
                                        id="amount"
                                        type="number"
                                        placeholder="Enter amount in SOL"
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(Number(e.target.value))
                                        }
                                    />
                                </div>

                                <Button className="w-full my-3">
                                    {true ? (
                                        <motion.div
                                            className="flex items-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <motion.div
                                                className="mr-2 h-4 w-4 border-t-2 border-b-2 border-current rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            />
                                            Processing Transfer...
                                        </motion.div>
                                    ) : (
                                        <Button>
                                            <SendIcon className="mr-2 h-4 w-4" />
                                            Confirm Airdrop
                                        </Button>
                                    )}
                                </Button>
                            </div>
                        </div>

                        <div className="pointer-events-none fixed top-1/2 mb-20 ml-32 left-1/2 -translate-x-1/2 translate-y-1/2 w-52 h-28 bg-fuchsia-500/80 blur-[120px]"></div>
                    </main>
                </section>
            </div>
        </div>
    );
};

export default AirdropHomePage;
