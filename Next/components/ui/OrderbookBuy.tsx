import Orderbook from "./Orderbook";
import OrderbookForm from "./OrderForm";

export default function OrderbookBuy() {
  return (
    <div className="flex justify-between">
      <Orderbook />
      <OrderbookForm />
    </div>
  );
}
