import AdvancedRealTimeChartWidget from "@/components/ui/tradingView/AdvancedRealTimeChart";
import CompanyProfileWidget from "@/components/ui/tradingView/CompanyProfileWidget";
import CryptoCoinsHeatmapWidget from "@/components/ui/tradingView/CryptoCoinsHeatmapWidget";
import CryptoCurrencyMarketWidget from "@/components/ui/tradingView/CrytocurrencyMarketWidget";
import EconomicCalendarWidget from "@/components/ui/tradingView/EconomicCalanderWidget";
import ForexCrossRatesWidget from "@/components/ui/tradingView/ForexCrossRatesWidget";
import ForexHeatMapWidget from "@/components/ui/tradingView/ForexHeatMapWidget";
import MarketDataWidget from "@/components/ui/tradingView/MarketDataWidget";
import MarketOverviewWidget from "@/components/ui/tradingView/MarketOverViewWidget";
import MiniChartWidget from "@/components/ui/tradingView/MiniChartWidget";
import ScreenerWidget from "@/components/ui/tradingView/ScreenerWidget";
import { SimpleChart } from "@/components/ui/tradingView/SimpleChart";
import SingleTickerWidget from "@/components/ui/tradingView/SingleTickerWidget";
import StockHeatMapWidget from "@/components/ui/tradingView/StockHeatMapWidget";
import StockMarketWidget from "@/components/ui/tradingView/StockMarketWidget";
import SymbolInfoWidget from "@/components/ui/tradingView/SymbolInfoWidget";
import SymbolOverviewWidget from "@/components/ui/tradingView/SymbolOverviewWidget";
import TechnialAnalysisWidget from "@/components/ui/tradingView/TechnicalAnalysisWidget";
import TickerTapeWidget from "@/components/ui/tradingView/TickerTapeWidget";
import TickerWidget from "@/components/ui/tradingView/TickerWidget";
import TimeLineWidget from "@/components/ui/tradingView/TimelineWidget";

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

export default function TutorialsPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen items-center p-12 gap-12">
        <h1>0. Simple Chart</h1>
        <SimpleChart data={initialData} />
        <h1>1. Advanced Real Time Chart</h1>
        <AdvancedRealTimeChartWidget />
        <h1>2. Technical Analysis</h1>
        <TechnialAnalysisWidget />
        <h1>3. Market Overview</h1>
        <MarketOverviewWidget />
        <h1>4. Market Data</h1>
        <MarketDataWidget />
        <h1>5. Stock Market Widget</h1>
        <StockMarketWidget />
        <h1>6. Economic Calendar</h1>
        <EconomicCalendarWidget />
        <h1>7. Ticker widget</h1>
        <TickerWidget />
        <h1>8. Ticker Tape Widget</h1>
        <TickerTapeWidget />
        <h1>9. Single Ticker Widget</h1>
        <SingleTickerWidget />
        <h1>10. Mini Chart Widget</h1>
        <MiniChartWidget />
        <h1>11. Symbol Overview Widget</h1>
        <SymbolOverviewWidget />
        <h1>12. Symbol Info Widget</h1>
        <SymbolInfoWidget />
        <h1>13. Forex Cross Rates Widget</h1>
        <ForexCrossRatesWidget />
        <h1>14. Forex Heat Map Widget</h1>
        <ForexHeatMapWidget />
        <h1>15. Forex Heat Map Widget</h1>
        <ScreenerWidget />
        <h1>16. Cryptocurrency Market Widget</h1>
        <CryptoCurrencyMarketWidget />
        <h1>17. Forex Heat Map Widget</h1>
        <ForexHeatMapWidget />
        <h1>18. Company Profile Widget</h1>
        <CompanyProfileWidget />
        <h1>19. Timeline Widget</h1>
        <TimeLineWidget />
        <h1>20. Stock Heatmap Widget</h1>
        <StockHeatMapWidget />
        <h1>21. Crypto Coins Heatmap Widget</h1>
        <CryptoCoinsHeatmapWidget />
      </main>
    </>
  );
}
