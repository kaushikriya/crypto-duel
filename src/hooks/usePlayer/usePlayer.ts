"use client";

import { GameClient } from "@/Lib/gameContract";
import { PLAYER } from "@/Utils/player";
import { QUERY_KEYS } from "@/Utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

export const usePlayer = (gameClient?: GameClient) => {
  const { address } = useAccount();

  const {
    data: players,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.GAME_PLAYERS],
    queryFn: async () => {
      const [firstPlayer, secondPlayer] = await Promise.all([
        gameClient?.getFirstPlayerAddress(),
        gameClient?.getSecondPlayerAddress(),
      ]);
      return { firstPlayer, secondPlayer };
    },
    staleTime: Infinity,
    enabled: !!gameClient,
  });

  if (address === players?.firstPlayer) {
    return PLAYER.FIRST_PLAYER;
  }

  if (address === players?.secondPlayer) {
    return PLAYER.SECOND_PLAYER;
  }

  return PLAYER.UNAUTHORIZED;
};
