import { HeroCarousel } from "@/components/HeroCarousel/HeroCarousel";
import { FilterContextProvider } from "@/context/FilterContext";

export default function LayoutCategory({children}) {
    
    return (
        <div>
            <FilterContextProvider>
                <HeroCarousel/>
                <div className="px-32 grid grid-cols-[auto,1fr] py-10 gap-10">
                    {children}
                </div>
            </FilterContextProvider>
        </div>
    )   
}