"use client";

import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function CandleStickChart() {
  const chartContainerRef = useRef(null); // DOM에 접근하기 위해 useRef를 사용, 차트를 그릴 div 요소의 참조를 저장

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: 800,
        height: 600,
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#ff0000",
        borderUpColor: "#ff0000",
        wickUpColor: "#ff0000",
        downColor: "#0000ff",
        borderDownColor: "#0000ff",
        wickDownColor: "#0000ff",
      });
      candlestickSeries.setData(testData);

      // 차트 크기 조정
      const resizeObserver = new ResizeObserver((entries) => {
        if (
          entries.length === 0 ||
          entries[0].target !== chartContainerRef.current
        ) {
          return;
        }
        const { width, height } = entries[0].contentRect;
        chart.applyOptions({ width, height });
      });
      resizeObserver.observe(chartContainerRef.current);

      return () => {
        resizeObserver.disconnect();
        chart.remove();
      };
    }
  }, []);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "300px" }} />
  );
}

const testData = [
  {
    time: "2023-12-31",
    open: 110.87,
    high: 112.45,
    low: 108.12,
    close: 111.26,
  },
  { time: "2024-01-01", open: 111.3, high: 113.9, low: 109.85, close: 112.5 },
  { time: "2024-01-02", open: 112.6, high: 115.2, low: 111.0, close: 113.85 },
  { time: "2024-01-03", open: 113.9, high: 116.45, low: 112.5, close: 114.75 },
  { time: "2024-01-04", open: 114.8, high: 117.1, low: 113.4, close: 116.0 },
  { time: "2024-01-05", open: 116.1, high: 118.56, low: 114.9, close: 117.3 },
  { time: "2024-01-06", open: 117.35, high: 119.7, low: 116.0, close: 118.65 },
  { time: "2024-01-07", open: 118.8, high: 120.45, low: 117.5, close: 109.1 },
  { time: "2024-01-08", open: 119.15, high: 121.89, low: 118.1, close: 100.5 },
  { time: "2024-01-09", open: 120.6, high: 123.2, low: 119.5, close: 122.1 },
  { time: "2024-01-10", open: 122.15, high: 124.5, low: 120.85, close: 123.4 },
  { time: "2024-01-11", open: 123.5, high: 125.9, low: 122.1, close: 124.8 },
  { time: "2024-01-12", open: 124.85, high: 127.3, low: 123.45, close: 126.0 },
  { time: "2024-01-13", open: 126.1, high: 128.5, low: 124.75, close: 127.4 },
  { time: "2024-01-14", open: 127.45, high: 129.8, low: 126.5, close: 128.9 },
  { time: "2024-01-15", open: 129.0, high: 131.2, low: 127.85, close: 130.5 },
  { time: "2024-01-16", open: 130.6, high: 133.0, low: 129.1, close: 132.3 },
  { time: "2024-01-17", open: 132.4, high: 134.8, low: 130.9, close: 133.5 },
  { time: "2024-01-18", open: 133.6, high: 136.0, low: 132.2, close: 135.4 },
  { time: "2024-01-19", open: 135.5, high: 137.8, low: 134.1, close: 136.9 },
];
