"use client";

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import OrderbookBuy from "./OrderbookBuy";
import OrderbookSell from "./OrderbookSell";

type TabOption = "buy" | "sell" | "modify/cancle" | "order" | "balance";

export default function OrderbookMenu() {
  const [selectTab, setSelectedTab] = useState<TabOption | undefined>();

  const handleTab = (tabOption: TabOption) => {
    setSelectedTab(tabOption);
  };

  useEffect(() => {
    console.log(selectTab);
  }, [selectTab]);

  return (
    <>
      <MenuContainer>
        <MenuItem onClick={() => handleTab("buy")} active={selectTab === "buy"}>
          매수
        </MenuItem>
        <MenuItem
          onClick={() => handleTab("sell")}
          active={selectTab === "sell"}
        >
          매도
        </MenuItem>
        <MenuItem
          onClick={() => handleTab("modify/cancle")}
          active={selectTab === "modify/cancle"}
        >
          정정/취소
        </MenuItem>
        <MenuItem
          onClick={() => handleTab("order")}
          active={selectTab === "order"}
        >
          주문/예약내역
        </MenuItem>
        <MenuItem
          onClick={() => handleTab("balance")}
          active={selectTab === "balance"}
        >
          잔고
        </MenuItem>
      </MenuContainer>

      {selectTab === "buy" && <OrderbookBuy />}
      {selectTab === "sell" && <OrderbookSell />}
    </>
  );
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
`;
const MenuItem = styled.div<{ active?: boolean }>`
  color: ${({ active }) => (active ? "black" : "gray")};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
  &:hover {
    color: black;
  }
`;
