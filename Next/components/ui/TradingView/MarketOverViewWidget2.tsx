"use client";

import { MarketOverview } from "react-ts-tradingview-widgets";

export default function MarketOverviewWidget() {
  return (
    <MarketOverview
      colorTheme="dark"
      height={800}
      width="100%"
      showFloatingTooltip
    />
  );
}
