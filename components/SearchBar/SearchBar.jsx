"use client"

import { HiOutlineSearch } from "react-icons/hi";
import './SearchBar.css'
import { useState } from "react";

export const SearchBar = () => {
    const [clickSearch, setClickSearch] = useState(false);
    
    const handleClickSearch = () => {
        setClickSearch(!clickSearch);
    }

    return (
        <div className="relative left-0 flex justify-start items-center gap-2 "> 
            <div 
                className={`text-2xl flex justify-center items-center z-50 `} 
                href="/" 
                onClick={handleClickSearch}
            >
                <HiOutlineSearch/>
            </div>
            <input type="text" className={` text-white py-1 px-2 rounded-sm focus:outline-none bg-[#ffffff52]`}/>
        </div>
    )
}
