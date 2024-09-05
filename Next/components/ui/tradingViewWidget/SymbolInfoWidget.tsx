"use client";

import { ColorTheme, SymbolInfo } from "react-ts-tradingview-widgets";

interface SymbolInfoWidgetProps {
  symbol?: string;
  colorTheme?: ColorTheme;
}

export default function SymbolInfoWidget({
  symbol,
  colorTheme,
}: SymbolInfoWidgetProps) {
  return (
    <SymbolInfo colorTheme={colorTheme} autosize locale="kr" symbol={symbol} />
  );
}
