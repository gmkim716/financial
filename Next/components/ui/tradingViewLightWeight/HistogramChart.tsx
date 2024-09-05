"use client";

import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function HistogramChart() {
  const chartContainerRef = useRef(null); // DOM에 접근하기 위해 useRef를 사용, 차트를 그릴 div 요소의 참조를 저장

  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions = {
        layout: {
          textColor: "black",
          background: { type: "solid", color: "white" },
        },
      };
      const chart = createChart(chartContainerRef.current, {
        width: 800,
        height: 600,
      });
      const histogramSeries = chart.addHistogramSeries({ color: "#26a69a" });

      const data = [
        { value: 1, time: "2022-01-17" },
        { value: 8, time: "2022-01-18" },
        { value: 10, time: "2022-01-19" },
        { value: 20, time: "2022-01-20" },
        { value: 3, time: "2022-01-21", color: "red" },
        { value: 43, time: "2022-01-22" },
        { value: 41, time: "2022-01-23", color: "red" },
        { value: 43, time: "2022-01-24" },
        { value: 56, time: "2022-01-25" },
        { value: 46, time: "2022-01-26", color: "red" },
      ];
      histogramSeries.setData(data);

      chart.timeScale().fitContent();

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
