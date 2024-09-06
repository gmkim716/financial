"use client";

/**
 * ButtonUI 컴포넌트
 * @param {React.ReactNode} children 내용
 * @param {string} colorTheme 색상 테마
 * @param {number} round 둥근 정도
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick 클릭 이벤트
 */

interface ButtonUIProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  colorTheme?: "light" | "dark";
  round?: number;
}

export default function ButtonUI({
  children,
  colorTheme = "dark",
  round = 8,
  onClick,
}: ButtonUIProps) {
  const theme =
    colorTheme === "light" ? "bg-white text-black" : "bg-black text-white";
  return (
    <button
      className={theme}
      style={{ borderRadius: `${round}px` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
