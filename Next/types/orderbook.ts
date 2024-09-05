interface OrderbookItemProps {
  price: number;
  amount: number;
  diffRate: number;
  onClick?: () => void;
  priceState: "increasing" | "decreasing" | "none";
  tradeState: "buy" | "sell" | "none";
  isPresent: boolean;
}
