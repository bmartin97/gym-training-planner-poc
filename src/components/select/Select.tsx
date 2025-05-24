import { useState } from "react";
import "./Select.css";

interface Props {
  options: { value: string; label: string }[];
  onSelect?: (value: string[]) => void;
  limit?: number;
}

export const Select = ({ options, onSelect = () => {}, limit = 1 }: Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const limitReached = selected?.length === Math.min(limit, options.length);
  const isMultiSelect = limit > 1;

  function handleSelect(value: string): void {
    const newState = [...selected, value];
    setSelected(newState);
    onSelect(newState);
  }

  function handleDeselect(value: string): void {
    const newState = selected.filter((v) => v !== value);
    setSelected(newState);
    onSelect(newState);
  }

  return (
    <div>
      {options.map((option) => {
        const isSelected = selected.includes(option.value);

        return (
          <button
            key={option.value}
            disabled={isMultiSelect && limitReached && !isSelected}
            className={isSelected ? "select selected" : "select"}
            onClick={() => {
              if (isMultiSelect) {
                if (isSelected) {
                  handleDeselect(option.value);
                } else {
                  handleSelect(option.value);
                }
              } else {
                setSelected([option.value]);
                onSelect([option.value]);
              }
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
