"use client";

export default function OrderbookItem({
  price,
  amount,
  diffRate,
  priceState,
  tradeState,
  isPresent,
}: OrderbookItemProps) {
  const priceStateClass =
    priceState === "none"
      ? "text-green-500"
      : priceState === "increasing"
      ? "text-red-500"
      : "text-blue-500";

  const tradeStateClass =
    tradeState === "none"
      ? "bg-green-100"
      : tradeState === "buy"
      ? "bg-red-100"
      : "bg-blue-100";

  const borderClass = isPresent
    ? "border border-black"
    : "border border-gray-300";

  return (
    <div
      className={`orderbook-item flex justify-between items-center p-2 hover:bg-gray-200 cursor-pointer
      ${priceStateClass} 
      ${tradeStateClass} 
      ${borderClass}`}
    >
      <div className="text-lg font-bold">
        {price.toLocaleString()}
        <div className="text-sm font-light">{diffRate.toFixed(2)}%</div>
      </div>
      <div className="text-sm">{amount.toLocaleString()}</div>
    </div>
  );
}
