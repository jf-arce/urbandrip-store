// Desc: Hook para controlar el scroll de la página
import { useState, useEffect } from "react";

export const useScroll = () => {
  const [isScrollUp, setIsScrollUp] = useState(true);
  const [position, setPosition] = useState(0);
 
 //Controla si el scroll es hacia arriba
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const position = window.scrollY;
      setPosition(position);

      if (position > lastScroll) {
        setIsScrollUp(false);
      } else {
        setIsScrollUp(true);
      }

      lastScroll = position;
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {position,isScrollUp}
}
