import AccountPassword from "./AccountPassword";
import AccountSelect from "./AccountSelect";
import MarketState from "./MareketState";

export default function OrderbookHeader() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <MarketState state="free" />
        <div className="text-gray-600">XLU | 미국 | 증50</div>
      </div>
      <table className="table-fixed w-full">
        <tbody>
          <tr>
            <td className="w-1/2 text-red-600 font-medium text-4xl text-lg">
              76.3285
            </td>
            <td className="w-1/4 text-red-600 text-right">▲ 0.4185</td>
            <td className="w-1/4 text-gray-500 text-right">8588</td>
          </tr>
          <tr>
            <td className="text-red-600">₩ 102,585</td>
            <td className="text-red-600 text-right">0.55%</td>
            <td className="text-gray-500 text-right">무료실시간</td>
          </tr>
        </tbody>
      </table>
      <div className="flex">
        <AccountSelect />
        <AccountPassword />
      </div>
    </>
  );
}
