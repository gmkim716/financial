"use client";

import styled from "@emotion/styled";

interface MarketStateProps {
  state: "free";
}

export default function MarketState({ state }: MarketStateProps) {
  return <StateContainer>{state}</StateContainer>;
}

const StateContainer = styled.div`
  border: 1px solid black;
  color: #666666;
  width: 50px;
  text-align: center;
  align-items: center;
  border-radius: 16px;
  border-color: #adadad;
`;
