"use client";

import React, { useEffect, useRef, memo } from "react";
import { SymbolOverviewProps } from "react-ts-tradingview-widgets";

export function SymbolOverviewWidget({
  symbols = [
    ["Apple", "AAPL|1D"],
    ["Google", "GOOGL|1D"],
    ["Microsoft", "MSFT|1D"],
  ],
  chartOnly = false,
  width = "100%",
  height = "100%",
  locale = "kr",
  colorTheme = "dark",
  autosize = false,
  showVolume = false,
  hideDateRanges = false,
  scalePosition = "right",
  scaleMode = "Normal",
  fontSize = "10",
  lineColor = "#2962FF",
  lineWidth = 2,
  hideMarketStatus = false,
  valuesTracking = "1",
  chartType = "area",
}: SymbolOverviewProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": ${symbols},
          "chartOnly": ${chartOnly},
          "width": ${width},
          "height": ${height},
          "locale": ${locale},
          "colorTheme": ${colorTheme},
          "autosize": ${autosize},
          "showVolume": ${showVolume},
          "showMA": false,
          "hideDateRanges": ${hideDateRanges},
          "hideMarketStatus": ${hideMarketStatus},
          "hideSymbolLogo": false,
          "scalePosition": ${scalePosition},
          "scaleMode": ${scaleMode},
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": ${fontSize},
          "noTimeScale": false,
          "valuesTracking": ${valuesTracking},
          "changeMode": "price-and-percent",
          "chartType": ${chartType},
          "areaBackgroundColor": "#ff0000",
          "maLineColor": ${lineColor} ,
          "maLineWidth": 1,
          "maLength": 9,
          "headerFontSize": "medium",
          "lineWidth": ${lineWidth},
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;

    if (container.current) {
      container.current.appendChild(script);
    }
  }, [
    symbols,
    chartOnly,
    width,
    height,
    locale,
    colorTheme,
    autosize,
    showVolume,
    hideDateRanges,
    scalePosition,
    scaleMode,
    fontSize,
    lineColor,
    lineWidth,
    hideMarketStatus,
    valuesTracking,
    chartType,
  ]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
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

export default memo(SymbolOverviewWidget);
