import AdvancedRealTimeChartWidget from "@/components/ui/tradingViewWidget/AdvancedRealTimeChartWidget";
import AdvancedRealTimeChartWidget2 from "@/components/ui/tradingViewWidget/AdvancedRealTimeChartWidget2";
import CompanyProfileWidget from "@/components/ui/tradingViewWidget/CompanyProfileWidget";
import CryptoCoinsHeatmapWidget from "@/components/ui/tradingViewWidget/CryptoCoinsHeatmapWidget";
import CryptoCurrencyMarketWidget from "@/components/ui/tradingViewWidget/CrytocurrencyMarketWidget";
import EconomicCalendarWidget from "@/components/ui/tradingViewWidget/EconomicCalanderWidget";
import ForexCrossRatesWidget from "@/components/ui/tradingViewWidget/ForexCrossRatesWidget";
import ForexHeatMapWidget from "@/components/ui/tradingViewWidget/ForexHeatMapWidget";
import MarketDataWidget from "@/components/ui/tradingViewWidget/MarketDataWidget";
import MarketOverviewWidget from "@/components/ui/tradingViewWidget/MarketOverViewWidget";
import MiniChartWidget from "@/components/ui/tradingViewWidget/MiniChartWidget";
import ScreenerWidget from "@/components/ui/tradingViewWidget/ScreenerWidget";
import { SimpleChart } from "@/components/ui/tradingViewWidget/SimpleChart";
import SingleTickerWidget from "@/components/ui/tradingViewWidget/SingleTickerWidget";
import StockHeatMapWidget from "@/components/ui/tradingViewWidget/StockHeatMapWidget";
import StockMarketWidget from "@/components/ui/tradingViewWidget/StockMarketWidget";
import SymbolInfoWidget from "@/components/ui/tradingViewWidget/SymbolInfoWidget";
import { SymbolOverviewWidget } from "@/components/ui/tradingViewWidget/SymbolOverviewWidget";
import TechnialAnalysisWidget from "@/components/ui/tradingViewWidget/TechnicalAnalysisWidget";
import TickerTapeWidget from "@/components/ui/tradingViewWidget/TickerTapeWidget";
import TickerWidget from "@/components/ui/tradingViewWidget/TickerWidget";
import TimeLineWidget from "@/components/ui/tradingViewWidget/TimelineWidget";

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
        {/* <SimpleChart data={initialData} /> */}
        <h1>1. Advanced Real Time Chart</h1>
        <AdvancedRealTimeChartWidget />
        {/* <AdvancedRealTimeChartWidget2 /> */}
        <h1>2. Technical Analysis - OK</h1>
        <TechnialAnalysisWidget />
        <h1>3. Market Overview - OK</h1>
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
