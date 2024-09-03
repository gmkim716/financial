import TickerTapeWidget from "./tradingView/TickerTapeWidget";

export default function Header() {
  return (
    <header>
      <input placeholder="주식 종목 검색창" />
      <TickerTapeWidget />
    </header>
  );
}
