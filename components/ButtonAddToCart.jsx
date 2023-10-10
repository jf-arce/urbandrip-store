import { useCartContext } from "@/context/CartContext"

export const ButtonAddToCart = ({prod}) => {
  const { addItem,setViewCart } = useCartContext();
  
  const handleAddToCart = () => {
    addItem(prod,1);
    setViewCart(true);
  };

  return (
    <div>
      <button onClick={handleAddToCart} className="bg-black text-white p-4 w-full rounded-b-md hover:bg-[#000000cc] transition-colors">Agregar al carrito</button>
    </div>
  )
}
