import React, { ReactNode } from "react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";

import { arbitrum, mainnet, polygon, sepolia } from "wagmi/chains";
import ReactQueryProvider from "../reactQuery";

const projectId = import.meta.env.VITE_APP_PROJECT_ID || "";

const metadata = {
  name: "Vesta email-wallets",
  description: "Vesta email-wallets",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum, polygon, sepolia] as const;

const config = defaultWagmiConfig({
  projectId,
  metadata,
  chains,
  //   enableEmail: true,
  auth: {
    socials: ["google", "x", "github", "discord", "apple"],
    showWallets: true,
  },
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
});

type Props = {
  children: ReactNode;
};

export function ContextProvider({ children }: Props) {
  return (
    <WagmiProvider config={config}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </WagmiProvider>
  );
}
