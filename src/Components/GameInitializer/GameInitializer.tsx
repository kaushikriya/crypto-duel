"use client";

import { gameContractAbi, gameContractBytecode } from "@/Constants/ABIs/RPS";
import { Context } from "@/Contexts/ClientContext";
import { PLAYER } from "@/Utils/player";
import { useDeployContract } from "@/hooks";
import { useSettleGame } from "@/hooks/useSettleGame/useSettleGame";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { encodePacked, keccak256, stringToHex } from "viem";
import { useAccount } from "wagmi";

type FormInputType = {
  move: number;
  address?: string;
  stake?: number;
};

enum FormInput {
  move,
  address,
  stake,
}

export default function GameInitialiser({
  player = PLAYER.FIRST_PLAYER,
}: {
  player?: PLAYER;
}) {
  const { address } = useAccount();
  const { deployContract } = useDeployContract(address ?? stringToHex(""));
  const [formInput, setFormInput] = useState<FormInputType>({
    move: 0,
    address: "0x801a96DDDb619a30d8f1a97E86De1e56ea4a80ce",
  });

  const router = useRouter();

  const handleFormInput = (key: FormInput, value: string | number) => {
    setFormInput({ ...formInput, [FormInput[key]]: value });
  };

  const { orchestratorClient } = useContext(Context);

  const { handleSecondPlayerMove } = useSettleGame();

  const handleStartGame = async () => {
    const abi = gameContractAbi;
    const bytecode = gameContractBytecode;
    const encodedMove = keccak256(
      encodePacked(["uint256", "uint256"], [BigInt(formInput.move), BigInt(1)])
    );
    const args = [encodedMove, formInput.address];
    const contractAddress = await deployContract(
      args,
      abi,
      bytecode,
      BigInt(formInput?.stake ?? 10)
    );

    if (address && contractAddress) {
      orchestratorClient?.setGameAddress(address, contractAddress);
    }
  };

  const handleGame = () => {
    if (player === PLAYER.FIRST_PLAYER) {
      handleStartGame();
    } else {
      handleSecondPlayerMove(formInput.move);
    }
    router.push("/gameBoard");
  };

  const options: Array<Record<string, number>> = [
    { Rock: 0 },
    { Paper: 1 },
    { Scissor: 2 },
    { Lizard: 3 },
    { Spock: 4 },
  ];

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="grid w-1/2 items-center">
        {player === PLAYER.FIRST_PLAYER && (
          <div className="flex justify-center items-center gap-2">
            <input
              id="address"
              name="address"
              placeholder="address"
              className="rounded-lg p-2 w-2/3"
              value={formInput.address}
              onChange={(event) => {
                handleFormInput(FormInput.stake, event?.target.value);
              }}
            />
            <input
              className="rounded-lg p-2 w-2/3"
              placeholder="stake"
              value={formInput.stake?.toString()}
              onChange={(event) => {
                handleFormInput(FormInput.stake, event.target.value);
              }}
            />
          </div>
        )}
        <div className="w-full p-5 flex justify-between items-center">
          {options.map((op, index) => {
            const [key, value] = Object.entries(op)[0];
            return (
              <button
                key={index}
                onClick={() => handleFormInput(FormInput.move, value)}
                className={classNames(
                  "rounded-lg p-3 w-1/4 m-2 bg-purple-400",
                  { "bg-purple-500": formInput.move === value }
                )}
              >
                {key}
              </button>
            );
          })}
          <button
            className="rounded-lg p-3 w-1/2 m-2 bg-purple-600"
            onClick={handleGame}
          >
            {player === PLAYER.FIRST_PLAYER ? "Start Game" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
}
