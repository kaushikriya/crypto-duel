"use client";

import { ZERO_ADDRESS } from "@/Constants/ContractAddress/address";
import { Context } from "@/Contexts/ClientContext";
import { QUERY_KEYS } from "@/Utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Address } from "viem";
import { GameBoard } from "..";
import { Button } from "../Button";

export const Dashboard = () => {
  const router = useRouter();
  const { orchestratorClient } = useContext(Context);

  const {
    data: currentGameAddress,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.GAME_ADDRESS],
    queryFn: async () => {
      const gameAddress = await orchestratorClient?.getGameAddress();
      return gameAddress as Address;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching game address</div>;
  }

  const handleStartGame = () => {
    router.push("/startGame");
  };

  return (
    <div>
      {currentGameAddress && currentGameAddress !== ZERO_ADDRESS ? (
        <GameBoard gameAddress={currentGameAddress} />
      ) : (
        <div className="w-full flex items-center justify-center h-screen">
          <Button onClick={handleStartGame}>Start Game</Button>
        </div>
      )}
    </div>
  );
};
