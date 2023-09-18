import { Button } from "@/components/Button/Button";
import { HeroCarousel } from "@/components/HeroCarousel/HeroCarousel";
import { ProductCarousel } from "@/components/ProductCarousel/ProductCarousel";

export default function Home() {
  return (
    <main className="mt-24">
      <HeroCarousel/>
      <div className="px-32">
        <h1 className="text-center p-12 text-5xl font-bold uppercase animate-fade-up">Bienvenido a Urban Drip Store</h1>
        <h3 className="text-center text-3xl mb-16">Novedades</h3>
        <ProductCarousel/>
        <div className="flex justify-center my-16">
          <Button text="Ver todos los productos" url="/"/>
        </div>
        <div>
          <img src="https://media.newera.com.ar/wysiwyg/sliders/newera/banner-Julio_03-desk-min.jpg" alt="" />
        </div>
        
      </div>

    </main>
  )
}
