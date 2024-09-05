"use client";

import { MarketOverview } from "react-ts-tradingview-widgets";

export default function MarketOverviewWidget() {
  return (
    <MarketOverview
      colorTheme="light"
      height={800}
      width="100%"
      showFloatingTooltip
      plotLineColorGrowing="#ff0000"
      belowLineFillColorGrowing="rgba(244, 204, 204)"
      belowLineFillColorGrowingBottom="#ffffff"
    />
  );
}
