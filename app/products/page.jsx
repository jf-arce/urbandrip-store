'use client'

import { Filter } from "@/components/Filter";
import { ItemList } from "@/components/ItemList";
import { useFilterContext } from "@/context/FilterContext";
import { stock } from "@/db/stock";


export default function Productos(){

  const {filterProducts} = useFilterContext();

  const filteredProducts = filterProducts(stock);

  return(
    <>
      <Filter/>
      <ItemList products={filteredProducts}/>
    </>
  )
}