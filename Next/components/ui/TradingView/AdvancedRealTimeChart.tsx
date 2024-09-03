"use client";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

interface AdvancedRealTimeChartWidgetProps {
  symbol?: string;
}

export default function AdvancedRealTimeChartWidget({
  symbol = "AAPL",
}: AdvancedRealTimeChartWidgetProps) {
  return (
    <AdvancedRealTimeChart
      theme="dark"
      symbol={symbol}
      style="2"
      timezone="Asia/Seoul"
      locale="kr"
      width={1500}
    />
  );
}
