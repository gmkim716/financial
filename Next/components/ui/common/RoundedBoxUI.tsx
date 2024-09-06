"use client";

/**
 * 둥근 테두리 박스 컴포넌트
 * @param {React.ReactNode} children - 컴포넌트 내부에 들어갈 요소
 * @param {string} colorTheme - 색상 테마
 * @param {string} boxShadow - 박스 쉐도우 타입
 * @param {React.MouseEventHandler<HTMLDivElement>} onClick - 클릭 이벤트
 * @param {number} round - 둥근 정도
 */

interface RoundedBoxUIProps {
  children: React.ReactNode;
  colorTheme?: "light" | "dark";
  boxShadow?: "type1" | "type2"; // ex) type1: 학습-레벨, type2: 학습-카테고리
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  round?: number;
}

export default function RoundedBoxUI({
  children,
  colorTheme = "light",
  boxShadow,
  round = 16,
  onClick,
}: RoundedBoxUIProps) {
  const theme =
    colorTheme === "light" ? "bg-white text-black" : "bg-black text-white";

  const boxShadowStyles: { [key: string]: string } = {
    type1: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    type2: "0px -4px 10px rgba(0, 0, 0, 0.15)",
  };

  const shadow = boxShadow ? boxShadowStyles[boxShadow] : undefined;

  return (
    <div
      className={`flex flex-col text-center ${theme}`}
      style={{
        boxShadow: shadow,
        borderRadius: `${round}px`,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
