import { Context } from "@/Contexts/ClientContext";
import { useContext } from "react";
import { Abi, Hex } from "viem";
import { useAccount } from "wagmi";

export const useDeployContract = () => {
  const { walletClient } = useContext(Context);

  const { address } = useAccount();
  const chain = walletClient?.chain;

  const deployContract = <T>(
    args: T[],
    abi: Abi,
    bytecode: string,
    value: bigint
  ) => {
    if (!address) {
      throw new Error("No wallet connected");
    }

    walletClient?.deployContract({
      abi: abi,
      bytecode: bytecode as Hex,
      args: [...args],
      account: address,
      chain: chain,
      value: value,
      gas: BigInt(1032940),
    });
  };

  return { deployContract };
};
