import MarketOverviewWidget from "@/components/ui/tradingViewWidget/MarketOverViewWidget";
import TimeLineWidget from "@/components/ui/tradingViewWidget/TimelineWidget";

export default function MarketPage() {
  return (
    <>
      <MarketOverviewWidget />
      <TimeLineWidget feedMode="market" market="stock" />
    </>
  );
}
