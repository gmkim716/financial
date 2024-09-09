"use client";

import { useState } from "react";

export default function OrderbookValueAdjuster() {
  const [value, setValue] = useState<number | undefined>();

  const handleDecrease = () => {
    if (!value || value === 0) return;
    setValue((prev) => (prev ? prev - 1 : 0));
  };

  const handleIncrease = () => {
    setValue((prev) => (prev ? prev + 1 : 1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      e.target.value === "" ? undefined : parseInt(e.target.value);
    setValue(newValue);
  };

  return (
    <>
      <div className="flex items-center border rounded-full overflow-hidden w-60">
        <button
          onClick={handleDecrease}
          className="w-1/5 py-2 flex justify-center items-center text-green-500 hover:bg-gray-100"
        >
          <span className="text-xl">-</span>
        </button>
        <input
          value={value}
          placeholder="수량 (1주 단위)"
          onChange={handleInputChange}
        />

        <button
          onClick={handleIncrease}
          className="w-1/5 py-2 flex justify-center items-center text-green-500 hover:bg-gray-100"
        >
          <span className="text-xl">+</span>
        </button>
      </div>
    </>
  );
}
