"use client"
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const ButtonScroll = () => {

    const scrollToDestino = () => {
        document.querySelector('#novedades').scrollIntoView({behavior: "smooth"});
    };
  return (
    <button onClick={scrollToDestino}>
        <BsFillArrowDownCircleFill className="text-5xl mx-auto mt-24 animate-bounce"/>
    </button> 
  )
}
