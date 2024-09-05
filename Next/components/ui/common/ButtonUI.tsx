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
  p = 10,
  px,
  py,
}: ButtonUIProps) {
  return (
    <button
      className={`bg-gray-600 p-${p} px-${px} py-${py} rounded-[${round}px] text-white`}
    >
      {children}
    </button>
  );
}
