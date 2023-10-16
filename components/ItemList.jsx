import { CardItem } from "./CardItem"
import { stock } from "../db/stock"

export const ItemList = ({products}) => {
    const productsToShow = products || stock; 
    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12">
            {productsToShow.map(prod => (
            <li key={prod.id}>
                <CardItem 
                key={prod.id}
                prod={...prod}
                />
            </li>
            ))}
        </ul>
    )
}
