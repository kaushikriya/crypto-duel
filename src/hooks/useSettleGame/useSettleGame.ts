"use client";

import { Context } from "@/Contexts/ClientContext";
import { PLAYER } from "@/Utils/player";
import { useContext } from "react";

export const useSettleGame = () => {
  const { gameClient } = useContext(Context);

  const handleTimeout = async (player: PLAYER) => {
    let handleTimeoutFn;
    switch (player) {
      case PLAYER.FIRST_PLAYER:
        handleTimeoutFn = gameClient?.triggerSecondPlayerTimeout;
      case PLAYER.SECOND_PLAYER:
        handleTimeoutFn = gameClient?.triggerFirstPlayerTimeout;
      default:
        null;
    }

    if (!handleTimeoutFn) return;
    return await handleTimeoutFn();
  };

  const handleSecondPlayerMove = async (move: number) => {
    return await gameClient?.setSecondPlayerMove(move);
  };

  const handleSettleGame = async (move: number, salt: number) => {
    return await gameClient?.settleGame(move, salt);
  };

  return { handleTimeout, handleSecondPlayerMove, handleSettleGame };
};
