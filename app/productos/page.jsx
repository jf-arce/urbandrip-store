import { HeroCarousel } from "@/components/HeroCarousel/HeroCarousel";
import { ProductCarousel } from "@/components/ProductCarousel/ProductCarousel";
import { stock } from "@/db/stock";

export default function Productos(){

    return(
        <main>
            <HeroCarousel/>
            <div className="px-32">
                <ProductCarousel/>
            </div>
            {stock.map(prod => (
                <div>
                    <h1>{prod.nombre}</h1>
                </div>
            ))}
        </main>
    )
}


