import { ButtonScroll } from "@/components/ButtonScroll";
import { HeroCarousel } from "@/components/HeroCarousel/HeroCarousel";
import { ProductCarousel } from "@/components/ProductCarousel/ProductCarousel";
import Link from "next/link";


export default function Home() {

  return (
    <div>
      <div className="relative flex justify-center items-center">
        <video src="/videos/streetclothes.mp4" muted loop autoPlay className="w-full h-screen object-cover "></video>
        <div className="absolute top-1/4 flex flex-col justify-center items-center text-white z-20">
          <h1 className="text-center p-12 text-5xl font-bold uppercase animate-fade-up">Bienvenido a Urban Drip Store</h1>
          <h2 className="text-2xl">Estilo urbano, sin límites</h2>
          <ButtonScroll/>
        </div>
        <div className="bg-black opacity-60 absolute top-0 w-full h-screen z-10"></div>
      </div>
      <div className="px-10 md:px-24 lg:px-32">
        <h3 id="novedades" className="text-center text-3xl mb-16 mt-9">Novedades</h3>
        <ProductCarousel/>
        <div className="flex flex-col justify-center items-center gap-12 my-16 before:h-[2px] before:w-[85%] before:bg-[#0000004b]">
          <div>
            <Link href="/shop" className="w-full border-[2px] rounded-sm border-black p-3 hover:bg-black hover:text-white transition-colors">
              Ver más productos 
            </Link>
          </div>
        </div>
        <HeroCarousel/>
        MARCAS
      </div>
    </div>
  )
}
