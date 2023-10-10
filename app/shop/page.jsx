import { CardItem } from "@/components/CardItem";
import { Filter } from "@/components/Filter";
import { HeroCarousel } from "@/components/HeroCarousel/HeroCarousel";
import { stock } from "@/db/stock";

export default function Productos(){

    return(
        <div>
            <HeroCarousel/>
            <div className="px-32 grid grid-flow-col py-10">
                <Filter/>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
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


