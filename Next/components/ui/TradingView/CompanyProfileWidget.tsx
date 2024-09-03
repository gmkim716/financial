"use client";

import { CompanyProfile } from "react-ts-tradingview-widgets";

export default function CompanyProfileWidget() {
  return (
    <CompanyProfile
      symbol="MSFT"
      colorTheme="dark"
      height={400}
      width="100%"
      locale="kr"
    />
  );
}
