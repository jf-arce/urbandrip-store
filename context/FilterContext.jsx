'use client'
import { createContext, useContext, useState } from "react";

const filterContext = createContext();

export const useFilterContext = ()=> useContext(filterContext);

export const FilterContextProvider = ({children})=>{

    const [brandsFiltered, setBrandsFiltered] = useState([]);
    const [sizesFiltered, setSizesFiltered] = useState([]);
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 20000,
        brand: 'all',
        size: 'all'
    });

    const filterProducts = (products) =>{
        return products.filter(product =>{
                return product.price >= filters.minPrice && 
                (filters.category === 'all' || filters.category.includes(product.category)) && 
                (filters.brand === 'all' || filters.brand.includes(product.brand)) &&
                (filters.size === 'all' || product.size.some((size) => filters.size.includes(size)))
            }
        );
    };

    const filterBrands = (event) =>{
        const value = event.target.value.toLowerCase();
        if (event.target.checked) {
          const newArray = [...brandsFiltered, value];
          setBrandsFiltered(newArray);
          setFilters(prevState => ({
            ...prevState,
            brand: newArray
          }));
        } else {
          const newArray = brandsFiltered.filter(item => item !== value);
          setBrandsFiltered(newArray);
          setFilters(prevState => ({
            ...prevState,
            brand: newArray.length ? newArray : 'all'
          }));
        }
    };

    const filterCategoriesNavBar =(categorie)=>{
        setFilters(prevState => ({
            ...prevState,
            category: categorie
        }));
    }

    const filterBySize = (size,sizeSelected) =>{
        if(sizeSelected){
            const newArraySizes = [...sizesFiltered, size.toLowerCase()];
            setSizesFiltered(newArraySizes);
             setFilters(prevState => ({
                 ...prevState,
                 size: newArraySizes
             }));
        }else{
            const newArraySizes = sizesFiltered.filter(item => item !== size.toLowerCase());
            setSizesFiltered(newArraySizes);
            setFilters(prevState => ({
                ...prevState,
                size: newArraySizes.length ? newArraySizes : 'all'
            }));
        }
    };
      

    return (
        <filterContext.Provider value={{filters,setFilters,filterProducts,filterBrands,filterCategoriesNavBar,filterBySize}}>
            {children}
        </filterContext.Provider>
    )
}