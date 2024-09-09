"use client";

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface OrderbookItemProps {
  price: number;
  amount: number;
  diffRate: number;
  priceState: "increasing" | "decreasing" | "none";
  tradeState: "buy" | "sell" | "none";
  isPresent: boolean;
  onClick: () => void;
}

const MAX_AMOUNT = 10000;

export default function OrderbookItem({
  price,
  amount,
  diffRate,
  priceState,
  tradeState,
  isPresent,
  onClick,
}: OrderbookItemProps) {
  return (
    <OrderbookItemContainer
      onClick={onClick}
      priceState={priceState}
      tradeState={tradeState}
    >
      <OrderPriceContainer isPresent={isPresent} tradeState={tradeState}>
        <div className="text-lg font-semibold">{price.toLocaleString()}</div>
        <div className="text-xs font-light text-black">
          {diffRate.toFixed(2)}%
        </div>
      </OrderPriceContainer>
      <OrderAmountContainer tradeState={tradeState} amount={amount}>
        <div className="text-lg font-semibold">{amount.toLocaleString()}</div>
      </OrderAmountContainer>
    </OrderbookItemContainer>
  );
}

const OrderbookItemContainer = styled.div<{
  priceState: "increasing" | "decreasing" | "none";
  tradeState: "buy" | "sell" | "none";
}>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  color: ${({ priceState }) =>
    priceState === "increasing"
      ? "#E92F2A"
      : priceState === "decreasing"
      ? "#2C7CF0"
      : "#029D83"};

  &:hover {
    background-color: #e5e7eb;
  }
`;
const OrderItemContainer = styled.div<{ tradeState: "buy" | "sell" | "none" }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: right;
  padding: 0 8px; 
  background-color: ${({ tradeState }) =>
    tradeState === "buy"
      ? "#FFE9E8"
      : tradeState === "sell"
      ? "#E7F2FF"
      : "white"};
}`;
const OrderPriceContainer = styled.div<{
  isPresent: boolean;
  tradeState: "buy" | "sell" | "none";
}>`
  text-align: right;
  padding: 0 4px;
  width: 100%;
  background-color: ${({ tradeState }) =>
    tradeState === "buy"
      ? "#FFE9E8"
      : tradeState === "sell"
      ? "#E7F2FF"
      : "white"};
  border: ${({ isPresent }) =>
    isPresent ? "1px solid black" : "1px solid white"};
`;
const OrderAmountContainer = styled(OrderItemContainer)<{ amount: number }>`
  text-align: right;
  background: linear-gradient(
    to left,
    ${({ tradeState }) => (tradeState === "buy" ? "#FFE9E8" : "#E7F2FF")}
      ${({ amount }) => (amount / MAX_AMOUNT) * 100}%,
    transparent
  );
`;
