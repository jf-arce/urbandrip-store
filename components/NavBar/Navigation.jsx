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
        <li className="relative">
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`hover:bg-[#ffffffde] hover:text-black px-3 mx-2 rounded-[3px] p-1 transition-colors cursor-pointer flex items-center gap-1`}>
            <MdKeyboardArrowDown/><p>Productos</p>
          </div>
          <NavModal isEnter={isEnter} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
        </li>
        <NavigationItem link="/products" title="Shop"/>
        <NavigationItem link="/accesorios" title="Accesorios"/>
        <NavigationItem link="/contact" title="Contacto"/>
      </ul>
    </nav>
  );
}

const NavigationItem = ({link,title,icon})=>{
  return(
    <li className="flex">
      <Link href={link} className={`hover:bg-[#ffffffde] hover:text-black px-3 rounded-[3px] p-1 mx-2 transition-colors duration-[250ms] cursor-pointer`}>
        <div className="flex items-center gap-1">
          {icon}<span>{title}</span>
        </div>
      </Link>
    </li>
  )
}
