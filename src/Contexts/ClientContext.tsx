import React, { ReactNode, createContext } from "react";
import { PublicClient, WalletClient } from "viem";
import { Config, useConfig, usePublicClient, useWalletClient } from "wagmi";
import { OrchestratorClient } from "../Lib/Orchestrator";

export interface ClientContext {
  orchestratorClient?: OrchestratorClient;
  publicClient?: PublicClient
  walletClient?: WalletClient
}

export const Context = createContext<ClientContext>({
  orchestratorClient: undefined,
  publicClient: undefined,
  walletClient: undefined
});

export interface ClientProviderProps {
 children: ReactNode
}

const ClientProvider: React.FC<ClientProviderProps> = ({children}) => {
  const config: Config = useConfig();
  const publicClient: PublicClient = usePublicClient({ config });
  const { data: walletClient } = useWalletClient({ config });

  const orchestratorClient = new OrchestratorClient()
  orchestratorClient.init(publicClient, walletClient)

  return (
    <Context.Provider value={{publicClient, walletClient, orchestratorClient}}>
      {children}
    </Context.Provider>
  );
};

export default ClientProvider;
