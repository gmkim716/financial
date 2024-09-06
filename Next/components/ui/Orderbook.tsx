"use client";

import OrderbookItem from "@/components/ui/OrderbookItem";

const orderbookData = [
  {
    price: 1400,
    amount: 1000,
    diffRate: 0.5,
    priceState: "increasing" as "increasing" | "decreasing" | "none",
    tradeState: "sell" as "buy" | "sell" | "none",
  },
  {
    price: 1300,
    amount: 1000,
    diffRate: 0.5,
    priceState: "increasing" as "increasing" | "decreasing" | "none",
    tradeState: "sell" as "buy" | "sell" | "none",
  },
  {
    price: 1200,
    amount: 1000,
    diffRate: 0.5,
    priceState: "increasing" as "increasing" | "decreasing" | "none",
    tradeState: "sell" as "buy" | "sell" | "none",
  },
  {
    price: 1100,
    amount: 1000,
    diffRate: 0.5,
    priceState: "increasing" as "increasing" | "decreasing" | "none",
    tradeState: "sell" as "buy" | "sell" | "none",
  },
  {
    price: 1000,
    amount: 1000,
    diffRate: 0.5,
    priceState: "increasing" as "increasing" | "decreasing" | "none",
    tradeState: "buy" as "buy" | "sell" | "none",
  },
  {
    price: 900,
    amount: 1000,
    diffRate: 0.5,
    priceState: "none" as "increasing" | "decreasing" | "none",
    tradeState: "buy" as "buy" | "sell" | "none",
  },
  {
    price: 800,
    amount: 1000,
    diffRate: 0.5,
    priceState: "decreasing" as "increasing" | "decreasing" | "none",
    tradeState: "buy" as "buy" | "sell" | "none",
  },
  {
    price: 700,
    amount: 1000,
    diffRate: 0.5,
    priceState: "decreasing" as "increasing" | "decreasing" | "none",
    tradeState: "none" as "buy" | "sell" | "none",
  },
  {
    price: 100,
    amount: 1000,
    diffRate: 0.5,
    priceState: "decreasing" as "increasing" | "decreasing" | "none",
    tradeState: "buy" as "buy" | "sell" | "none",
  },
];

interface OrderbookProps {
  handleOrderbookItemClick: (price: number) => void;
}

export default function Orderbook({
  handleOrderbookItemClick,
}: OrderbookProps) {
  const tempIsPresent = 1000;

  return (
    <div className="flex flex-col max-w-40">
      {orderbookData.map((item, index) => (
        <OrderbookItem
          key={index}
          price={item.price}
          amount={item.amount}
          diffRate={item.diffRate}
          priceState={item.priceState}
          tradeState={item.tradeState}
          isPresent={tempIsPresent === item.price}
          onClick={() => handleOrderbookItemClick(item.price)}
        />
      ))}
    </div>
  );
}
