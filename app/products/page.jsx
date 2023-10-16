'use client'

import { CardItem } from "@/components/CardItem";
import { useFilterContext } from "@/context/FilterContext";
import { stock } from "@/db/stock";


export default function Productos(){

  const {filterProducts} = useFilterContext();

  const filteredProducts = filterProducts(stock);

  return(
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12">
        {filteredProducts.map(prod => (
          <li key={prod.id}>
            <CardItem 
              key={prod.id}
              prod={...prod}
            />
          </li>
        ))}
      </ul>
    </>
  )
}