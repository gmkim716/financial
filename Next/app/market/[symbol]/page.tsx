import AdvancedRealTimeChartWidget from "@/components/ui/tradingViewWidget/AdvancedRealTimeChartWidget";
import CompanyProfileWidget from "@/components/ui/tradingViewWidget/CompanyProfileWidget";
import SymbolInfoWidget from "@/components/ui/tradingViewWidget/SymbolInfoWidget";
import { SymbolOverviewWidget } from "@/components/ui/tradingViewWidget/SymbolOverviewWidget";
import TechnialAnalysisWidget from "@/components/ui/tradingViewWidget/TechnicalAnalysisWidget";
import TimeLineWidget from "@/components/ui/tradingViewWidget/TimelineWidget";

interface StockPageProps {
  params: {
    symbol: string;
  };
}

export default function StockPage({ params }: StockPageProps) {
  const { symbol } = params;

  const colorTheme = "dark";

  return (
    <>
      <div>{symbol}</div>
      <SymbolInfoWidget symbol={symbol} colorTheme={colorTheme} />
      <SymbolOverviewWidget
        colorTheme={colorTheme}
        width={800}
        height={600}
        autosize={false}
      />
      <AdvancedRealTimeChartWidget symbol={symbol} colorTheme={colorTheme} />
      <CompanyProfileWidget symbol={symbol} />
      <TechnialAnalysisWidget symbol={symbol} />
      <TimeLineWidget symbol={symbol} />
    </>
  );
}
