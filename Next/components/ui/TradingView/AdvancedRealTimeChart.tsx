"use client";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export default function AdvancedRealTimeChartWidget() {
  return (
    <AdvancedRealTimeChart
      theme="dark"
      symbol="MSFT"
      width={1500}
      height={1000}
      style="2"
      timezone="Asia/Seoul"
      locale="kr"
    />
  );
}
