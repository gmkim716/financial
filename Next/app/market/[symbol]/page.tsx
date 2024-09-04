import AdvancedRealTimeChartWidget from "@/components/ui/tradingView/AdvancedRealTimeChartWidget";
import CompanyProfileWidget from "@/components/ui/tradingView/CompanyProfileWidget";
import SymbolInfoWidget from "@/components/ui/tradingView/SymbolInfoWidget";
import { SymbolOverviewWidget } from "@/components/ui/tradingView/SymbolOverviewWidget";
import TechnialAnalysisWidget from "@/components/ui/tradingView/TechnicalAnalysisWidget";
import TimeLineWidget from "@/components/ui/tradingView/TimelineWidget";

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
