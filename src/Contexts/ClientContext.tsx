"use client";

import { GameClient } from "@/Lib/gameContract";
import React, { ReactNode, createContext, useState } from "react";
import { Address, PublicClient, WalletClient } from "viem";
import { Config, useConfig, usePublicClient, useWalletClient } from "wagmi";
import { OrchestratorClient } from "../Lib/orchestrator";

export interface ClientContext {
  orchestratorClient?: OrchestratorClient;
  publicClient?: PublicClient;
  walletClient?: WalletClient;
  gameClient?: GameClient;
  initializeGameClient?: (address: Address) => void;
}

export const Context = createContext<ClientContext>({
  orchestratorClient: undefined,
  publicClient: undefined,
  walletClient: undefined,
  gameClient: undefined,
});

export interface ClientProviderProps {
  children: ReactNode;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const config: Config = useConfig();
  const publicClient: PublicClient = usePublicClient({ config });
  const { data: walletClient } = useWalletClient({ config });
  const [gameClient, setGameClient] = useState<GameClient>();

  const orchestratorClient = new OrchestratorClient();
  orchestratorClient.init(publicClient, walletClient);

  const initializeGameClient = (gameAddress: Address) => {
    const gameContractClient = new GameClient();
    gameContractClient.init(gameAddress, publicClient, walletClient);
    setGameClient(gameContractClient);
  };

  return (
    <Context.Provider
      value={{
        publicClient,
        walletClient,
        orchestratorClient,
        gameClient,
        initializeGameClient,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ClientProvider;
