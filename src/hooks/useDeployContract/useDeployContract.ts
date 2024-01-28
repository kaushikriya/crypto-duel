import { Context } from "@/Contexts/ClientContext";
import { useContext } from "react";
import { Abi, Hex, getContractAddress } from "viem";

export const useDeployContract = (address: Hex) => {
  const { walletClient, publicClient } = useContext(Context);

  const chain = walletClient?.chain;

  const deployContract = async <T>(
    args: T[],
    abi: Abi,
    bytecode: string,
    value: bigint
  ): Promise<Hex> => {
    if (!address) {
      throw new Error("No wallet connected");
    }

    const txHash = walletClient?.deployContract({
      abi: abi,
      bytecode: bytecode as Hex,
      args: [...args],
      account: address,
      chain: chain,
      value: value,
      gas: BigInt(1032940),
    });

    const contractAddress = await computeContractAddress();

    return contractAddress;
  };

  const computeContractAddress = async () => {
    const nonce = await publicClient?.getTransactionCount({ address });

    const contractAddress = getContractAddress({
      from: address,
      nonce: BigInt(nonce ?? 0),
    });

    return contractAddress;
  };

  return { deployContract };
};
