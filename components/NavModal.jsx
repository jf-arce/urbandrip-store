import Link from "next/link"

export const NavModal = ({isEnter,handleMouseEnter,handleMouseLeave}) => {
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${isEnter ? "block" : "hidden"} w-64 px-3 py-5 top-8 absolute bg-[#000] rounded-b-md mx-[8px] `}>
        <ul>
            <li className={`hover:bg-[#ffffffde] hover:text-black px-3 rounded-sm p-1 transition-colors cursor-pointer`}>
                <div className="flex items-center gap-1">
                    <Link href="/">Buzos</Link>
                </div>
            </li>
            <li className={`hover:bg-[#ffffffde] hover:text-black px-3 rounded-sm p-1 transition-colors cursor-pointer`}>
                <div className="flex items-center gap-1">
                    <Link href="/">Remeras</Link>
                </div>
            </li>
            <li className={`hover:bg-[#ffffffde] hover:text-black px-3 rounded-sm p-1 transition-colors cursor-pointer`}>
                <div className="flex items-center gap-1">
                    <Link href="/">Pantalones</Link>
                </div>
            </li>
           
        </ul>
    </div>
  )
}
