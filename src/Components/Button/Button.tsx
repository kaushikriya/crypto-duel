export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button className="bg-purple-800 rounded-md p-1" onClick={onClick}>
      {children}
    </button>
  );
};
