interface ButtonUIProps {
  children: React.ReactNode;
  round?: number;
  p?: number;
  px?: number;
  py?: number;
}

export default function ButtonUI({
  children,
  round,
  p,
  px,
  py,
}: ButtonUIProps) {
  return (
    <button className={`bg-gray-600 p-${p} rounded-[${round}px] text-white`}>
      {children}
    </button>
  );
}
