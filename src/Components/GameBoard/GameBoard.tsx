"use client";

import { Context } from "@/Contexts/ClientContext";
import { PLAYER } from "@/Utils/player";
import { useGameTimeout, usePlayer } from "@/hooks";
import { useSettleGame } from "@/hooks/useSettleGame/useSettleGame";
import { useContext, useEffect } from "react";
import { Address } from "viem";
import { Counter } from "../Counter/Counter";

export const GameBoard = ({ gameAddress }: { gameAddress: Address }) => {
  const { initializeGameClient, gameClient } = useContext(Context);

  useEffect(() => {
    if (!gameClient && initializeGameClient) {
      initializeGameClient(gameAddress);
    }
  }, [gameAddress, gameClient, initializeGameClient]);

  const player = usePlayer(gameClient);

  const { data } = useGameTimeout();
  const { handleTimeout } = useSettleGame();

  const handleSettleGame = () => {
    console.log("game settled");
  };

  const handlePlayerTimeout = () => {
    handleTimeout(player);
  };

  const targetTime = Date.now() + Number(data.timeout ?? 0);

  if (player === PLAYER.FIRST_PLAYER) {
    if (!data.lastActionData) {
      return (
        <div>
          <Counter
            targetTime={targetTime}
            handleTimeout={handlePlayerTimeout}
          />
        </div>
      );
    }

    if (data.lastActionData.secondPlayerMove) {
      return (
        <div>
          <button onClick={handleSettleGame}>Settle Game</button>
        </div>
      );
    }
  } else if (player === PLAYER.SECOND_PLAYER) {
    return (
      <div>
        <Counter
          targetTime={
            targetTime - Number(data.lastActionData?.lastActionTimeStamp ?? 0)
          }
          handleTimeout={handlePlayerTimeout}
        />
      </div>
    );
  }
};
