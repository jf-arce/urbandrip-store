import Link from "next/link"

export const NavModal = ({isEnter,handleMouseEnter,handleMouseLeave}) => {

    const categories = ['hoodies','remeras', 'pantalones', 'gorras', 'camperas'];

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${isEnter ? "block" : "hidden"} w-64 px-3 py-5 top-8 absolute bg-[#000] rounded-b-md mx-[8px] `}>
            <ul>
                {categories.map((categorie,index) =>(
                    <li key={index} className={`hover:bg-[#ffffffde] hover:text-black px-3 rounded-sm p-1 transition-colors cursor-pointer`}>
                        <Link href={`/products/category/${categorie}`}>
                            <div className="flex items-center gap-1">
                                <span className="capitalize">{categorie}</span>
                            </div>
                        </Link>
                    </li>
                ))}     
            </ul>
        </div>
    )
}
