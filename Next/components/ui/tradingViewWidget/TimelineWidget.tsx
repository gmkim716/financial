"use client";

import { Timeline } from "react-ts-tradingview-widgets";

interface TimeLineWidgetProps {
  colorTheme?: "light" | "dark";
  height?: number;
  feedMode?: "symbol" | "market" | "all_symbols";
  symbol?: string;
  market?: "crypto" | "forex" | "stock" | "index" | "futures" | "cfd";
}

export default function TimeLineWidget({
  colorTheme = "dark",
  height = 400,
  feedMode = "all_symbols",
  symbol,
  market,
}: TimeLineWidgetProps) {
  const commonProps = {
    colorTheme,
    height,
    width: "100%",
  };

  return (
    <>
      {feedMode === "symbol" && (
        <Timeline {...commonProps} feedMode="symbol" symbol={symbol} />
      )}
      {feedMode === "market" && (
        <Timeline {...commonProps} feedMode="market" market={market} />
      )}
      {feedMode === "all_symbols" && (
        <Timeline {...commonProps} feedMode="all_symbols" />
      )}
    </>
  );
}
