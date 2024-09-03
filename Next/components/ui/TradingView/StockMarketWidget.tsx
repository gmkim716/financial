"use client";

import { StockMarket } from "react-ts-tradingview-widgets";

export default function StockMarketWidget() {
  return (
    <StockMarket colorTheme="dark" height={400} width="100%" locale="kr" />
  );
}
