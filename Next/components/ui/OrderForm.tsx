import styled from "@emotion/styled";
import { useState } from "react";
import OrderbookValueAdjuster from "./OrderbookValueAdjuster";

type TabOption = "global" | "korean";

export default function OrderbookForm() {
  const [selectedTab, setSelectedTab] = useState<TabOption>("global");

  const handleTab = (tabOption: TabOption) => {
    setSelectedTab(tabOption);
  };
  return (
    <OrderbookFormContainer>
      <TabContainer>
        <div onClick={() => handleTab("global")}>거래국가통화</div>
        <div onClick={() => handleTab("korean")}>원화</div>
      </TabContainer>
      <select>
        <option>프리마켓(지정가)</option>
        <option>시장가</option>
      </select>
      <OrderbookValueAdjuster />
    </OrderbookFormContainer>
  );
}

const OrderbookFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TabContainer = styled.div`
  display: flex;
  background-color: #f7f7f7;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  justify-content: space-around;
  font-size: 1rem;
  padding: 0.5rem 0;
`;
