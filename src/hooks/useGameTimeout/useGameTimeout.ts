"use client";

import { Context } from "@/Contexts/ClientContext";
import { QUERY_KEYS } from "@/Utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export const useGameTimeout = () => {
  const { gameClient } = useContext(Context);
  const {
    data: lastActionData,
    isLoading: isLastActionLoading,
    isError: isLastActionError,
  } = useQuery({
    queryKey: [QUERY_KEYS.LAST_ACTION],
    queryFn: async () => {
      const [lastActionTimeStamp, secondPlayerMove] = await Promise.all([
        gameClient?.getLastAction(),
        gameClient?.getSecondPlayerMove(),
      ]);
      return {
        lastActionTimeStamp: lastActionTimeStamp,
        secondPlayerMove: secondPlayerMove,
      };
    },
    staleTime: Infinity,
    enabled: !!gameClient,
  });

  const {
    data: timeout,
    isLoading: isTimeoutLoading,
    isError: isTimeoutError,
  } = useQuery({
    queryKey: [QUERY_KEYS.TIMEOUT],
    queryFn: async () => {
      const timeout = await gameClient?.getTimeout();
      return timeout;
    },
    enabled: !!gameClient,
  });

  return {
    data: {
      lastActionData,
      timeout,
    },
    isLoading: isLastActionLoading || isTimeoutLoading,
    isError: isLastActionError || isTimeoutError,
  };
};
