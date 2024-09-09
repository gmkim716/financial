import AreaChart from "@/components/ui/tradingViewLightWeight/AreaChart";
import CandleStickChart from "@/components/ui/tradingViewLightWeight/CandleStickChart";
import HistogramChart from "@/components/ui/tradingViewLightWeight/HistogramChart";
import LineChart from "@/components/ui/tradingViewLightWeight/LineChart";
import TradingViewChart from "@/components/ui/tradingViewLightWeight/TradingViewChart";

export default function LightWeightPage() {
  return (
    <>
      {/* 테스트 진행 중인 컴포넌트 */}
      <TradingViewChart />

      <h1>CandleStick</h1>
      <CandleStickChart />

      <h1>AreaChart</h1>
      <AreaChart />

      <h1>Histogram</h1>
      <HistogramChart />

      <h1>Line</h1>
      <LineChart />
    </>
  );
}
