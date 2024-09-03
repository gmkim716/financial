import MarketOverviewWidget from "@/components/ui/tradingView/MarketOverViewWidget";
import TimeLineWidget from "@/components/ui/tradingView/TimelineWidget";

export default function MarketPage() {
  return (
    <>
      <MarketOverviewWidget />
      <TimeLineWidget feedMode="market" market="stock" />
    </>
  );
}
