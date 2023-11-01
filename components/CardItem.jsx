"use client"
import Link from "next/link";
import { useState } from "react";
import { ButtonAddToCart } from "./ButtonAddToCart";

export const CardItem = ({prod}) => {
    const [onHover, setOnHover] = useState(false);

    const handlOnMouseEnter = () => {
        setOnHover(true);
    }
    const handlOnMouseLeave = () => {
        setOnHover(false);
    }

  return (
    <div className="shadow-md overflow-hidden rounded-b-md" onMouseEnter={handlOnMouseEnter} onMouseLeave={handlOnMouseLeave}>
        <Link href={`/product/${prod.id}`} >
            <div className="h-[300px] overflow-hidden">
                <img src={prod.image} alt={prod.title} className={`h-[300px] w-full object-cover ${ onHover && "scale-105"} transition-transform`} />
            </div>
            <div className="p-4 flex flex-col items-center">
                <h3 className="h-14 text-center">{prod.title}</h3>
                <p className="font-bold">${prod.price}</p>
            </div>
        </Link>
        <ButtonAddToCart prod={prod}/>
    </div>
  )
}
