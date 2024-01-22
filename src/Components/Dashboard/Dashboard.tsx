import Link from "next/link";

export const Dashboard = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <Link href="/initialise">Start Game</Link>
    </div>
  );
};
