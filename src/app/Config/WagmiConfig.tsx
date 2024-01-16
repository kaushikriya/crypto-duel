"use client";

import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [ sepolia],
  ssr:true,
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(process.env.SEPOLIA_ALCHEMY_API_KEY),
  },
});
