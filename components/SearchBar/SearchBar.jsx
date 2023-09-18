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
        <div className="relative left-0"> 
            <div 
                className={`${clickSearch ? "text-black" : "text-white" } text-2xl h-full absolute right-0 top-0 flex justify-center items-center z-50 transition-colors`} 
                href="/" 
                onClick={handleClickSearch}
            >
                <HiOutlineSearch/>
            </div>
            <input type="text" className={`${clickSearch ? "search-animation" : "hidden" } text-black p-1 rounded-sm`}/>
        </div>
    )
}
