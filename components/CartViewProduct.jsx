import {AiFillDelete} from "react-icons/ai"
import { useCartContext } from "@/context/CartContext";

export const CartViewProduct = ({prod}) => {
    const {deleteItem} = useCartContext();

    const handleDeleteItem = (id) => {
        deleteItem(id);
    };

  return (
    <div className="relative">
      <div key={prod.id} className="flex gap-4 items-center bg-neutral-950 px-4 rounded-[3px] animate-fade-left animate-duration-500
      after:h-[1px] after:w-full after:bg-neutral-600 after:opacity-50 after:absolute after:-bottom-4 after:left-0
      ">
        <img src={prod.image} alt={prod.title} className="w-16 object-cover rounded-[3px]" />
        <div className="flex flex-col gap-2 max-w-[260px] p-2">
          <h4 className="text-sm">{prod.title}</h4>
          <span className="text-sm">Cantidad: {prod.quantity}</span>
          <strong> ${prod.price}</strong>
        </div>
        <AiFillDelete
          onClick={() => handleDeleteItem(prod.id)}
          type="button"
          className="text-2xl cursor-pointer text-gray-400"
        ></AiFillDelete>
      </div>
    </div>
  );
};
