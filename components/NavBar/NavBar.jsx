import Link from "next/link";
import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { SearchBar } from "../SearchBar/SearchBar";

export const NavBar = () => {
  return (
    <div className="bg-black h-24 text-slate-50 flex justify-between px-24 fixed top-0 z-50 w-full">
        <div className="flex items-center">
            <img src="/images/urbanDripIcon.png" alt="" className="max-h-12" />
        </div>
        <nav className="flex items-center">
            <ul className="flex">
                <li className="px-5">
                    <Link href="">Home</Link>
                </li>
                <li className="px-5">
                    <Link href="">Productos</Link>
                </li>
                <li className="px-5">
                    <Link href="">Accesorios</Link>
                </li>
                <li className="px-5">
                    <Link href="">Contacto</Link>
                </li>
                <li className="px-5">
                    <Link href="">News</Link>
                </li>
            </ul>
        </nav>
        <div className="flex items-center gap-4">
            <SearchBar/>
            <Link className="text-2xl relative" href="">
                <div className="h-6 w-6 absolute bg-[#101010] rounded-full top-4 left-3 flex justify-center items-center">
                    <span className="text-sm">0</span>
                </div>
                <BsFillBagFill/>
            </Link>  
        </div>
    </div>
  );
};
