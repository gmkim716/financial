"use client";

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

const TradingViewChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      if (window.TradingView) {
        if (chartRef.current) {
          new window.TradingView.widget({
            container_id: chartRef.current.id,
            width: 980,
            height: 610,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            studies: ["volume@tv-basicstudies"],
            overrides: {
              "mainSeriesProperties.candleStyle.upColor": "#ff0000",
              "mainSeriesProperties.candleStyle.downColor": "#0000ff",
              "mainSeriesProperties.candleStyle.borderUpColor": "#ff0000",
              "mainSeriesProperties.candleStyle.borderDownColor": "#0000ff",
              "mainSeriesProperties.candleStyle.wickUpColor": "#ff0000",
              "mainSeriesProperties.candleStyle.wickDownColor": "#0000ff",
            },
            studies_overrides: {
              "volume.volume.color.0": "#0000ff",
              "volume.volume.color.1": "#ff0000",
              "volume.volume.transparency": 50,
            },
          });
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="tradingview_b8bca" ref={chartRef}></div>;
};

export default TradingViewChart;
