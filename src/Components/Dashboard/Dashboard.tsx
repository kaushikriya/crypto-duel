"use client";

import { Context } from "@/Contexts/ClientContext";
import { QUERY_KEYS } from "@/Utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Address } from "viem";
import { GameBoard } from "..";

export const Dashboard = () => {
  const { orchestratorClient, gameClient, initializeGameClient } =
    useContext(Context);

  const router = useRouter();

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

  const handleViewGame = () => {
    if (!gameClient && currentGameAddress && initializeGameClient) {
      initializeGameClient(currentGameAddress);
    }
    router.push("./gameBoard");
  };

  return (
    <div>
      {currentGameAddress ? (
        <GameBoard gameAddress={currentGameAddress} />
      ) : (
        <div className="w-full flex items-center justify-center h-screen">
          <Link href="/initialise">Start Game</Link>
        </div>
      )}
    </div>
  );
};
