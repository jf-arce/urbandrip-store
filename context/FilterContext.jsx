'use client'
import { createContext, useContext, useState } from "react";

const filterContext = createContext();

export const useFilterContext = ()=> useContext(filterContext);

export const FilterContextProvider = ({children})=>{

    const [categoriesFiltered, setCategoriesFiltered] = useState([]);
    const [brandsFiltered, setBrandsFiltered] = useState([]);
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 20000,
        brand: 'all'
    });

    const filterProducts = (products) =>{
        return products.filter(product =>
            product.price >= filters.minPrice && 
            (filters.category === 'all' || filters.category.includes(product.category)) && 
            (filters.brand === 'all' || filters.brand.includes(product.brand))
        );
    };

    const filterBrands = (event) =>{
        handleFilter(event, brandsFiltered, setBrandsFiltered, 'brand');
    };

    const filterCategories = (event) =>{
        handleFilter(event, categoriesFiltered, setCategoriesFiltered, 'category');
    };


    const handleFilter = (event, state, setState, filterKey) => {
        const value = event.target.value.toLowerCase();
        if (event.target.checked) {
          const newArray = [...state, value];
          setState(newArray);
          setFilters(prevState => ({
            ...prevState,
            [filterKey]: newArray
          }));
        } else {
          const newArray = state.filter(item => item !== value);
          setState(newArray);
          setFilters(prevState => ({
            ...prevState,
            [filterKey]: newArray.length ? newArray : 'all'
          }));
        }
    };
      

    return (
        <filterContext.Provider value={{filters,setFilters,filterProducts,filterCategories,filterBrands}}>
            {children}
        </filterContext.Provider>
    )
}