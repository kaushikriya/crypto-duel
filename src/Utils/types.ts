import { Abi, Hex } from "viem";

export interface Contract{
    abi: Abi,
    address: Hex
}