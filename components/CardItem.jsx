import Link from "next/link";

export const CardItem = ({img,title,price}) => {
  return (
    <div className="shadow-md overflow-hidden">
        <Link href="/" >
            <picture>
                <img src={img} alt={title} className="h-[300px] w-full object-cover hover:scale-105 transition-transform" />
            </picture>
            <div className="p-4 flex flex-col items-center">
                <h3 className="h-14 text-center">{title}</h3>
                <p className="font-bold">${price}</p>
            </div>
        </Link>
        <div>
            <button className="bg-black text-white p-4 w-full rounded-b-md hover:bg-[#000000ba] transition-colors">Agregar al carrito</button>
        </div>
    </div>
  )
}
