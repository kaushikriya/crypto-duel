"use client";

import { createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [ sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http("https://eth-sepolia.g.alchemy.com/v2/tIeUh0TvrHWEHDIlwb0_oE6B4BuJ8R4X"),
  },
});
