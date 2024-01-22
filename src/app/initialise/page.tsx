"use client";

import GameInitialiser from "@/Components/GameInitializer/GameInitializer";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");

  return <GameInitialiser />;
}
