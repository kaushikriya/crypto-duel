import { gameContractAbi } from "@/Constants/ABIs/RPS";
import { Contract } from "@/Utils/types";
import { Chain, Hex, PublicClient, WalletClient } from "viem";

export class GameClient {
  private _publicClient: PublicClient | undefined;
  private _walletClient: WalletClient | undefined;
  private _chain: Chain | undefined;

  private _contract: Contract | undefined;

  init(
    gameContractAddress: string,
    publicClient?: PublicClient,
    walletClient?: WalletClient
  ) {
    this._publicClient = publicClient;
    this._walletClient = walletClient;
    this._chain = publicClient?.chain;
    this._contract = {
      abi: gameContractAbi,
      address: gameContractAddress as Hex,
    };
  }

  async triggerFirstPlayerTimeout() {
    const address = await this._walletClient?.getAddresses();

    if (this._contract && address && address.length > 0) {
      return this._walletClient?.writeContract({
        ...this._contract,
        account: address[0],
        chain: this._chain,
        functionName: "j1Timeout",
        args: [],
      });
    }
  }

  async triggerSecondPlayerTimeout() {
    const address = await this._walletClient?.getAddresses();
    if (this._contract && address && address?.length > 0) {
      return this._walletClient?.writeContract({
        ...this._contract,
        account: address[0],
        chain: this._chain,
        functionName: "j2Timeout",
        args: [],
      });
    }
  }

  async getFirstPlayerAddress() {
    if (this._contract) {
      return this._publicClient?.readContract({
        ...this._contract,
        functionName: "getFirstPlayerAddress",
      });
    }
  }

  async getStake() {
    if (this._contract) {
      return this._publicClient?.readContract({
        ...this._contract,
        functionName: "getStake",
      });
    }
  }

  async getTimeout() {
    if (this._contract) {
      return this._publicClient?.readContract({
        ...this._contract,
        functionName: "getTimeout",
      });
    }
  }

  async getLastAction() {
    if (this._contract) {
      return this._publicClient?.readContract({
        ...this._contract,
        functionName: "getLastAction",
      });
    }
  }

  async getSecondPlayerAddress() {
    if (this._contract) {
      return this._publicClient?.readContract({
        ...this._contract,
        functionName: "getSecondPlayerAddress",
      });
    }
  }

  async getSecondPlayerMove() {
    if (this._contract) {
      return this._publicClient?.readContract({
        ...this._contract,
        functionName: "getSecondPlayerMove",
      });
    }
  }

  async setSecondPlayerMove(move: number) {
    const address = await this._walletClient?.getAddresses();
    if (this._contract && address && address.length > 0) {
      return this._walletClient?.writeContract({
        ...this._contract,
        account: address[0],
        chain: this._chain,
        functionName: "play",
        args: [move],
      });
    }
  }

  async settleGame(move: number, salt: number) {
    const address = await this._walletClient?.getAddresses();
    if (this._contract && address && address.length > 0) {
      return this._walletClient?.writeContract({
        ...this._contract,
        account: address[0],
        chain: this._chain,
        functionName: "solve",
        args: [move, salt],
      });
    }
  }
}
