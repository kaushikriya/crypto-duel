import { Contract } from "@/Utils/types";
import { Address, Chain, Hex, PublicClient, WalletClient } from "viem";
import { orchestratorAbi } from "../Constants/ABIs/Orchestrator";
import { ORCHESTRATOR_ADDRESS } from "../Constants/ContractAddress/address";

export class OrchestratorClient {
  private contract: Contract = {
    abi: orchestratorAbi,
    address: ORCHESTRATOR_ADDRESS as Hex,
  };

  private _publicClient: PublicClient | undefined;
  private _walletClient: WalletClient | undefined;
  private _chain: Chain | undefined;

  init(publicClient: PublicClient, walletClient?: WalletClient) {
    this._publicClient = publicClient;
    this._walletClient = walletClient;
    this._chain = publicClient.chain;
  }

  async getGameAddress() {
    return this._publicClient?.readContract({
      ...this.contract,
      functionName: "getGameAddress",
    });
  }

  async setGameAddress(address: Address, gameContractAddress: Address) {
    return this._walletClient?.writeContract({
      ...this.contract,
      account: address,
      chain: this._chain,
      functionName: "setGameAddress",
      args: [gameContractAddress],
    });
  }
}
