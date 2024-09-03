"use client";

import { SymbolInfo } from "react-ts-tradingview-widgets";

interface SymbolInfoWidgetProps {
  symbol?: string;
}

export default function SymbolInfoWidget({ symbol }: SymbolInfoWidgetProps) {
  return <SymbolInfo colorTheme="dark" autosize locale="kr" symbol={symbol} />;
}
