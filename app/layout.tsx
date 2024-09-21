import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Solana Airdrop Faucet",
    description: "Get airdropped SOL tokens on the Solana Devnet easily.",
    keywords: [
        "Solana",
        "faucet",
        "airdrop",
        "Devnet",
        "crypto",
        "blockchain",
        "developer tools",
    ],
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#ffffff",
    openGraph: {
        title: "Solana Airdrop Faucet",
        description: "Receive free SOL tokens for testing on Solana Devnet.",
        url: "https://faucet.nishantcoder.com",
        siteName: "Solana Airdrop Faucet",
        images: [
            {
                url: "./images/solana-airdrop.png",
                width: 800,
                height: 600,
                alt: "Faucet Application Screenshot",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Solana Airdrop Faucet",
        description: "Get airdropped SOL tokens on the Solana Devnet easily.",
        images: "./images/solana-airdrop.png",
        site: "@NishantTechie",
        creator: "@NishantTechie",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
