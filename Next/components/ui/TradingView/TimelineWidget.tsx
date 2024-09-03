"use client";

import { Timeline } from "react-ts-tradingview-widgets";

export default function TimeLineWidget() {
  return (
    <Timeline
      colorTheme="dark"
      feedMode="market"
      market="crypto"
      height={400}
      width="100%"
    />
  );
}
