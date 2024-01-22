"use client";

import { useState } from "react";

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

export default function GameInitialiser() {
  // const { deployContract } = useDeployContract();
  // const [formInput, setFormInput] = useState<FormInputType>({
  //   move: 0,
  //   address: "0x801a96DDDb619a30d8f1a97E86De1e56ea4a80ce",
  // });

  // const handleFormInput = (key: FormInput, value: string | number) => {
  //   setFormInput({ ...formInput, [FormInput[key]]: value });
  // };

  const [input, setInput] = useState("");

  // console.log(formInput);

  // const handleStartGame = async () => {
  //   const abi = gameContractAbi;
  //   const bytecode = gameContractBytecode;
  //   const encodedMove = keccak256(
  //     encodePacked(["uint256", "uint256"], [BigInt(formInput.move), BigInt(1)])
  //   );
  //   const args = [encodedMove, formInput.address];
  //   await deployContract(args, abi, bytecode, BigInt(formInput?.stake ?? 10));
  // };

  // const options: Array<Record<string, number>> = [
  //   { Rock: 0 },
  //   { Paper: 1 },
  //   { Scissor: 2 },
  //   { Lizard: 3 },
  //   { Spock: 4 },
  // ];

  console.log(input);

  return (
    <input value={input} onChange={(e) => setInput(e.target.value)} />
    // <div className="flex justify-center items-center w-full h-full">
    //   <div className="grid w-1/2 items-center">
    //     <div className="flex justify-center items-center">
    //       <input
    //         id="address"
    //         name="address"
    //         placeholder="address"
    //         className="rounded-lg p-2 w-2/3"
    //         value={address}
    //         onChange={(e) => {
    //           setAddress(e.target.value);
    //         }}
    //       />
    //       <input
    //         className="rounded-lg p-2 w-2/3"
    //         placeholder="stake"
    //         value={formInput.stake?.toString()}
    //         onChange={(event) => {
    //           handleFormInput(FormInput.stake, event.target.value);
    //         }}
    //       />
    //     </div>
    //     <div className="w-full p-5 flex justify-between items-center">
    //       {options.map((op, index) => {
    //         const [key, value] = Object.entries(op)[0];
    //         return (
    //           <button
    //             key={index}
    //             onClick={() => handleFormInput(FormInput.move, value)}
    //             className={classNames(
    //               "rounded-lg p-3 w-1/4 m-2 bg-purple-400",
    //               { "bg-purple-500": formInput.move === value }
    //             )}
    //           >
    //             {key}
    //           </button>
    //         );
    //       })}
    //       <button
    //         className="rounded-lg p-3 w-1/2 m-2 bg-purple-600"
    //         onClick={handleStartGame}
    //       >
    //         Start Game
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
