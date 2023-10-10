"use client";
import { useCartContext } from "@/context/CartContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CartViewProduct } from "./CartViewProduct";

export const CartView = () => {
  const { viewCart, setViewCart, cart, cartSize, totalItems, totalPrice } =useCartContext();

  const handleCartView = () => {
    setViewCart(false);
  };

  if (viewCart)
    return (
      <div
        className={`animate-fade-left animate-duration-300 fixed top-0 right-0 w-[500px] h-full bg-black backdrop-blur-xl bg-opacity-95 
        z-[9999] text-white px-6 py-8 flex flex-col`}
      >
        <IoIosCloseCircleOutline
          type="button"
          className="text-4xl cursor-pointer absolute mx-5 mt-8 top-0 right-0 text-white"
          onClick={handleCartView}
        ></IoIosCloseCircleOutline>
        <h2 className="text-xl">Mi carrito</h2>
        <div className="w-full flex flex-col items-center mt-10 mb-6 gap-8 overflow-y-auto h-full">
          {cartSize() === 0 ? (
            <h2 className="text-3xl mt-16">Tu carrito esta vacio</h2>
          ) : (
            cart.map((prod) => <CartViewProduct prod={prod} />)
          )}
        </div>
        <div className="flex flex-col gap-5 justify-end flex-1">
          <h3 className="text-base">
            Cantidad total de productos: <strong>{totalItems()}</strong>
          </h3>
          <strong className="text-base">Total a pagar: ${totalPrice()} </strong>
          <button className=" mt-2 border-2 border-white rounded-[3px] py-3 hover:bg-white hover:text-black transition-colors">
            Finalizar compra
          </button>
        </div>
      </div>
    );
};
