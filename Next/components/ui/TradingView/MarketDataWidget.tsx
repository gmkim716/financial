"use client";

import { MarketData } from "react-ts-tradingview-widgets";

export default function MarketDataWidget() {
  return <MarketData colorTheme="dark" width="100%" height={400} locale="kr" />;
}
