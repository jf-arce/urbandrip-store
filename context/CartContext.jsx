"use client"

const { createContext, useContext, useState } = require("react");

const cartContext = createContext();

export const useCartContext = () => useContext(cartContext);

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [viewCart, setViewCart] = useState(false);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            console.log("ya esta en el carrito");
            const newCart = cart.map(prod => {
                if(prod.id === item.id){
                    prod.quantity += quantity;
                }
                return prod;
            });
            setCart(newCart);
        }else{
            setCart([...cart, {...item, quantity}]);
        }       
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const deleteItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id);
        setCart(newCart);
    };

    const cartSize = () => {
        return cart.length;
    };

    const totalItems = () => {
        return cart.reduce((tot, prod) => tot + prod.quantity, 0);
    };
  
    const totalPrice = () => {
        return cart.reduce((tot, prod) => tot + prod.price * prod.quantity, 0);
    };


    return (
        <cartContext.Provider value={{cart,addItem,deleteItem,totalItems,cartSize,totalPrice,viewCart,setViewCart}}>
            {children}
        </cartContext.Provider>
    )
};

