"use client";

import { CompanyProfile } from "react-ts-tradingview-widgets";

interface CompanyProfileWidgetProps {
  symbol?: string;
}

export default function CompanyProfileWidget({
  symbol,
}: CompanyProfileWidgetProps) {
  return (
    <CompanyProfile
      symbol={symbol}
      colorTheme="dark"
      height={400}
      width="100%"
      locale="kr"
    />
  );
}
