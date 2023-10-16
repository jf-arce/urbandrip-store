import { useFilterContext } from "@/context/FilterContext";
import { useState } from "react";

export const ClothesSizesButton = ({ size }) => {
  const { filterBySize } = useFilterContext();
  const [sizeSelected, setSizeSelected] = useState(false);

  const handleFilterSize = (event) => {
    const updatedSizeSelected = !sizeSelected;
    setSizeSelected(updatedSizeSelected);
    filterBySize(event.target.value, updatedSizeSelected);
  };

  return (
    <li>
      <button
        value={size}
        onClick={handleFilterSize}
        className={`${sizeSelected ? 'bg-black text-white' : 'bg-white'} border-[1.5px] border-[#00000022] w-12 h-8 rounded-sm text-center transition-colors`}
      >
        {size}
      </button>
    </li>
  );
};
