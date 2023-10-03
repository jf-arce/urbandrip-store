import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavModal } from "../NavModal";
import { useState } from "react";

export default function Navigation() {
  const [isEnter, setIsEnter] = useState(false);

  const handleMouseEnter = () =>{
    setIsEnter(true)  
  }
  const handleMouseLeave = () =>{
    setIsEnter(false)
  }
  return (
    <nav className="flex items-center">
      <ul className="flex">
        <NavigationItem link="/" title="Inicio"/>
        <div className="relative">
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`hover:bg-[#ffffffde] hover:text-black px-3 mx-2 rounded-sm p-1 transition-colors cursor-pointer`}>
            <div className="flex items-center gap-1">
              <MdKeyboardArrowDown/><p>Productos</p>
            </div>
          </li>
          <NavModal isEnter={isEnter} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
        </div>
        <NavigationItem link="/accesorios" title="Accesorios"/>
        <NavigationItem link="/contact" title="Contacto"/>
        <NavigationItem link="/about" title="News"/>
      </ul>
    </nav>
  );
}

const NavigationItem = ({link,title,icon})=>{
  return(
    <li className={`hover:bg-[#ffffffde] hover:text-black px-3 mx-2 rounded-sm p-1 transition-colors cursor-pointer`}>
      <div className="flex items-center gap-1">
        {icon}<Link href={link}>{title}</Link>
      </div>
    </li>
  )
}
