"use client";

import { ForexHeatMap } from "react-ts-tradingview-widgets";

export default function ForexHeatMapWidget() {
  return (
    <ForexHeatMap
      colorTheme="dark"
      autosize
      locale="kr"
      currencies={["USD", "JPY", "EUR", "CNY", "KRW"]}
    />
  );
}
