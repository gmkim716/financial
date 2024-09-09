"use client";

import styled from "@emotion/styled";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Option {
  id: string;
  description: string;
}

export default function CustomSelect() {
  const [selected, setSelected] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const options: Option[] = [
    { id: "202-01-030413", description: "[CMA] 김경민" },
    { id: "202-01-040514", description: "[CMA] 이철수" },
  ];

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <ButtonContainer onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-col">
          <span className="text-black">
            {selected ? selected.id : "계좌를 선택하세요"}
          </span>
          <span className="text-gray-500">
            {selected ? selected.description : ""}
          </span>
        </div>
        <FaChevronDown />
      </ButtonContainer>

      {isOpen && (
        <ul className="absolute border mt-1 bg-white z-10 max-h-40 overflow-y-auto">
          {options.map((option) => (
            <OptionContainer
              key={option.id}
              onClick={() => handleSelect(option)}
            >
              <div className="flex flex-col">
                <span>{option.id}</span>
                <span className="text-gray-500">{option.description}</span>
              </div>
            </OptionContainer>
          ))}
        </ul>
      )}
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    background-color: #f9fafb;
  }
`;
const OptionContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f9fafb;
  }
`;
