"use client";

import { SymbolOverview } from "react-ts-tradingview-widgets";

export default function SymbolOverviewWidget() {
  return (
    <SymbolOverview
      colorTheme="dark"
      autosize
      chartType="candlesticks"
      downColor="#800080"
      borderDownColor="#800080"
      wickDownColor="#800080"
      dateFormat="yyyy/MM/dd"
    />
  );
}
