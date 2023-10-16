'use client'
import { CardItem } from "@/components/CardItem";
import { Filter } from "@/components/Filter";
import { ItemList } from "@/components/ItemList";
import { useFilterContext } from "@/context/FilterContext";
import { stock } from "@/db/stock";
import { useEffect } from "react";

export default function Productos({ params }) {
  const { categoryId } = params;
  
  const {filterProducts,filterCategoriesNavBar} = useFilterContext();

  useEffect(() => {
    filterCategoriesNavBar(categoryId);
  }, [categoryId]);

  const filterStock = filterProducts(stock);

  return (
    <>
      <Filter/>
      {filterStock.length === 0 ? (
        <h2>No se encuentran productos por el momento...</h2>
      ) : (
        <ItemList products={filterStock} />
      )}
    </>
  );
}
