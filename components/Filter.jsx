"use client";

import { ClothesSizesButton } from "./ClothesSizesButton";
import { PriceRangeFilter } from "./PriceRangeFilter";
import { useFilterContext } from "@/context/FilterContext";

export const Filter = () => {

  const brands = ['Vans','Nike','Fear of God'];
  const categories = ['Hoodies','Remeras','Pantalones'];

  const {filterCategories,filterBrands} = useFilterContext();

  const handleFilterBrands = (event) => {
    filterBrands(event);
  };

  const handleFilterCategories = (event) => {
    filterCategories(event)
  };

  return (
    <div className="border-2 border-[#00000015] rounded-sm max-w-[300px] relative">
      <FilterContainer>
        <h3 className="text-base font-bold">Talle</h3>
        <ul className="flex gap-4">
          <ClothesSizesButton size='S'/>
          <ClothesSizesButton size='M'/>
          <ClothesSizesButton size='L'/>
          <ClothesSizesButton size='XL'/>
        </ul>
      </FilterContainer>
      <FilterContainer>
        <h3 className="text-base font-bold">Marca</h3>
        <ul className="flex flex-col gap-2">
          {brands.map((brand, index) => {
            return (
              <li className="flex gap-2" key={index}>
                <input
                  onChange={handleFilterBrands}
                  id={brand}
                  name={brand}
                  type="checkbox"
                  value={brand}
                />
                <label htmlFor={brand}>{brand}</label>
              </li>
            );
          })}
        </ul>
      </FilterContainer>
      <FilterContainer>
        <h3 className="text-base font-bold">Categorias</h3>
        <ul className="flex flex-col gap-2">
          {categories.map((categorie, index) => {
            return (
              <li className="flex gap-2" key={index}>
                <input
                  onChange={handleFilterCategories}
                  id={categorie}
                  name={categorie}
                  type="checkbox"
                  value={categorie}
                />
                <label htmlFor={categorie}>{categorie}</label>
              </li>
            );
          })}
        </ul>
      </FilterContainer>
      <FilterContainer>
        <PriceRangeFilter/>
      </FilterContainer>
    </div>
  );
};


const FilterContainer = ({children}) => {
  return(
    <div className="p-6 flex flex-col gap-5 after:w-full after:h-[2px] after:bg-[#00000015] after:mt-5">
      {children}
    </div>
  )
}