import Orderbook from "./Orderbook";
import OrderbookForm from "./OrderForm";

export default function OrderbookSell() {
  return (
    <div className="flex jusitfy-between">
      <Orderbook />
      <OrderbookForm />
    </div>
  );
}
