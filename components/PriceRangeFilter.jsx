"use client"

import { useFilterContext } from "@/context/FilterContext";
import { useId } from "react"

export const PriceRangeFilter = () => {
    const minPriceFilterId = useId();

    const {filters,setFilters} = useFilterContext();

    const handleMinPrice = (e) =>{
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }));
    }

  return (
    <>
        <label htmlFor="price" className="text-base font-bold">Precio</label>
        <span>Minimo: ${filters.minPrice}</span>
        <input 
            type="range"
            id={minPriceFilterId}
            min='20000'
            max='100000'
            value={filters.minPrice}
            onChange={handleMinPrice}
        />
  
    </>
  )
}
