import AdvancedRealTimeChartWidget from "@/components/ui/tradingView/AdvancedRealTimeChart";
import CompanyProfileWidget from "@/components/ui/tradingView/CompanyProfileWidget";
import SymbolInfoWidget from "@/components/ui/tradingView/SymbolInfoWidget";
import TechnialAnalysisWidget from "@/components/ui/tradingView/TechnicalAnalysisWidget";
import TimeLineWidget from "@/components/ui/tradingView/TimelineWidget";

interface StockPageProps {
  params: {
    symbol: string;
  };
}

export default function StockPage({ params }: StockPageProps) {
  const { symbol } = params;

  return (
    <>
      <div>{symbol}</div>
      <SymbolInfoWidget symbol={symbol} />
      <AdvancedRealTimeChartWidget symbol={symbol} />
      <CompanyProfileWidget symbol={symbol} />
      <TechnialAnalysisWidget symbol={symbol} />
      <TimeLineWidget symbol={symbol} />
    </>
  );
}
