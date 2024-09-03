"use client";

import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

interface TechnicalAnalysisWidgetProps {
  symbol?: string;
}

export default function TechnialAnalysisWidget({
  symbol,
}: TechnicalAnalysisWidgetProps) {
  return <TechnicalAnalysis colorTheme="dark" width="100%" symbol={symbol} />;
}
