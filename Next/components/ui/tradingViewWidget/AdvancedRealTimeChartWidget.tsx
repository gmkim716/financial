"use client";

import React, { useEffect, useRef, memo } from "react";
import { ColorTheme, Locales, Timezone } from "react-ts-tradingview-widgets";

interface AdvancedRealTimeChartWidgetProps {
  symbol?: string;
  colorTheme?: ColorTheme;
  locale?: Locales;
  autosize?: boolean;
  timezone?: Timezone;
  interval?: "1" | "3" | "5" | "15" | "30" | "60" | "D" | "W";
  style?: string;
  calandar?: boolean;
  width?: number;
  height?: number;
}

function AdvancedRealTimeChartWidget({
  symbol = "NASDAQ:AAPL",
  colorTheme = "dark",
  locale = "kr",
  autosize = false,
  timezone = "Etc/UTC",
  interval = "D",
  style = "1",
  calandar = false,
  width = 1500,
  height = 1000,
}: AdvancedRealTimeChartWidgetProps) {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": ${autosize},
          "width": ${autosize ? null : width},
          "height": ${autosize ? null : height},
          "symbol": "${symbol}",
          "interval": "${interval}",
          "timezone": "${timezone}",
          "theme": "${colorTheme}",
          "style": "${style}",
          "locale": "${locale}",
          "allow_symbol_change": true,
          "calendar": ${calandar},
          "support_host": "https://www.tradingview.com",
          "plotLineColorGrowing": "rgba(255, 0, 0, 1)",
          "plotLineColorFalling": "rgba(0, 255, 0, 1)",
        }`;

    if (container.current) {
      container.current.appendChild(script);
    }
  }, [
    symbol,
    colorTheme,
    locale,
    autosize,
    timezone,
    interval,
    style,
    calandar,
    width,
    height,
  ]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{
        width: autosize ? "100%" : `${width}px`,
        height: autosize ? "100%" : `${height}px`,
      }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(AdvancedRealTimeChartWidget);
