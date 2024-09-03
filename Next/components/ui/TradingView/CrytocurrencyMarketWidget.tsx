"use client";

import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

export default function CryptoCurrencyMarketWidget() {
  return (
    <CryptoCurrencyMarket
      colorTheme="dark"
      width="100%"
      height={400}
    ></CryptoCurrencyMarket>
  );
}
