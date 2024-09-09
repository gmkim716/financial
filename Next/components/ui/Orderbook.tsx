"use client";

/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import OrderbookItem from "@/components/ui/OrderbookItem";
import { useEffect, useState } from "react";

export default function Orderbook() {
  const [orderPrice, setOrderPrice] = useState<number | undefined>();

  const handleOrderbookItemClick = (price: number) => {
    setOrderPrice(price);
  };

  useEffect(() => {
    console.log("orderPrice", orderPrice);
  }, [orderPrice]);

  return (
    <OrderbookContainer>
      {orderbookData.map((item, index) => (
        <OrderbookItem
          key={index}
          price={item.price}
          amount={item.amount}
          diffRate={item.diffRate}
          priceState={item.priceState}
          tradeState={item.tradeState}
          isPresent={orderPrice === item.price}
          onClick={() => handleOrderbookItemClick(item.price)}
        />
      ))}
    </OrderbookContainer>
  );
}

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
const OrderbookContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;
