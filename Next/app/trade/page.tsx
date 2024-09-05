"use client";

import Orderbook from "@/components/ui/Orderbook";
import { useEffect, useState } from "react";

export default function TradePage() {
  const [orderPrice, setOrderPrice] = useState<number | undefined>();

  // todo. 정상동작 여부 확인 필요
  const handleOrderbookItemClick = (price: number) => {
    setOrderPrice(price);
  };

  return (
    <>
      {orderPrice}
      <Orderbook />
    </>
  );
}
