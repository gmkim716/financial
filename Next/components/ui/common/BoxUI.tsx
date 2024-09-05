/**
 * name: BoxUI.tsx
 * details: 둥근 모서리 / 음영
 * action: onClick
 * usages: UI
 */

"use client";

interface BoxUIProps {
  children: React.ReactNode;
  p?: number;
  px?: number;
  py?: number;
  round?: number;
  bgColor?: string;
  fontSize?: number;
  colorTheme?: "light" | "dark";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function BoxUI({
  children,
  round = 16,
  p = 16,
  px,
  py,
  fontSize,
  colorTheme = "light",
  onClick,
}: BoxUIProps) {
  const theme = colorTheme === "light" ? "bg-white" : "bg-black text-white";

  return (
    <div
      className={`flex flex-col ${theme}`}
      style={{
        fontSize: `${fontSize}px`,
        borderRadius: `${round}px`,
        padding: `${p}px`,
        paddingLeft: `${px}px`,
        paddingRight: `${px}px`,
        paddingTop: `${py}px`,
        paddingBottom: `${py}px`,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
