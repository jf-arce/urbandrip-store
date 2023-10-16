import { CardItem } from "@/components/CardItem";
import { Filter } from "@/components/Filter";
import { HeroCarousel } from "@/components/HeroCarousel/HeroCarousel";
import { stock } from "@/db/stock";

export default function Productos(){

    return(
        <div>
            <HeroCarousel/>
            <div className="px-32 grid grid-cols-[auto,1fr] py-10 gap-10">
                <Filter/>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12">
                    {stock.map(prod => (
                        <li>
                            <CardItem 
                                key={prod.id}
                                prod={...prod}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


