import { BsFillBagFill } from "react-icons/bs";
import { useCartContext } from "@/context/CartContext";

export const CardWidget = () => {
    const { totalItems,setViewCart } = useCartContext();

    const handleCartView = () => {
        setViewCart(true);
    };

    return (
        <div onClick={handleCartView} className="text-2xl relative cursor-pointer">
            <div className="h-6 w-6 absolute bg-[#101010] rounded-full top-4 left-3 flex justify-center items-center">
            <span className="text-sm">{totalItems()}</span>
            </div>
            <BsFillBagFill />
        </div>
    );
};
