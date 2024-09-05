/**
 * name: BoxUI.tsx
 * details: 둥근 모서리 / 그림자
 * action: onClick
 * usages: UI
 */

"use client";

interface BoxUIProps {
  children: React.ReactNode;
  round?: number;
  bgColor?: string;
  colorTheme?: "light" | "dark";
  boxShadow?: "type1" | "type2"; // ex) type1: 학습-레벨, type2: 학습-카테고리
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function BoxUI({
  children,
  round = 16,
  colorTheme = "light",
  boxShadow,
  onClick,
}: BoxUIProps) {
  const theme =
    colorTheme === "light" ? "bg-white text-black" : "bg-black text-white";

  const boxShadowStyles: { [key: string]: string } = {
    type1: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    type2: "0px -4px 10px rgba(0, 0, 0, 0.15)",
  };

  const shadow = boxShadow ? boxShadowStyles[boxShadow] : undefined;

  return (
    <div
      className={`flex flex-col text-center ${theme} ${shadow}`}
      style={{
        borderRadius: `${round}px`,
        boxShadow: shadow,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
