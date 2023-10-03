"use client";

import Link from "next/link";
import { BsFillBagFill } from "react-icons/bs";
import { SearchBar } from "../SearchBar/SearchBar";
import { useScroll } from "@/hooks/useScroll";
import Navigation from "./Navigation";
import Logo from "../logo";
import "./NavBar.css";


export const NavBar = () => {
  const { position, isScrollUp } = useScroll();

  return (
    <div
      className={`
        ${position === 0 ? "bg-transparent" : "bg-black"} 
        transition-colors duration-300 text-slate-50 font-medium flex justify-between px-32 py-5 w-full 
        ${!isScrollUp && position > 200 ? "navbar-hide" : "navbar-show"}`}
    >
      <div className="flex flex-1 items-center">
        <SearchBar />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 flex-1">
        <Logo />
        <Navigation/>
      </div>

      <div className="flex items-center gap-4 flex-1 justify-end mr-2">
        <Link className="text-2xl relative" href="">
          <div className="h-6 w-6 absolute bg-[#101010] rounded-full top-4 left-3 flex justify-center items-center">
            <span className="text-sm">0</span>
          </div>
          <BsFillBagFill />
        </Link>
      </div>
    </div>
  );
};
