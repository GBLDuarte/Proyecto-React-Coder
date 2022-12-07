import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props) {

    const [cart, setCart] = useState([]);

    function addToCart(product, count) {
        let itemAlreadyInCart = cart.findIndex((itemInCart) => itemInCart.id === product.id);
        let newCart = [...cart];

        if (itemAlreadyInCart ==! -1) {
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart);
        } else {
            product.count = count;
            newCart.push(product);
            setCart(newCart);
        }
    }

    function itemsInCart() {
        let total = 0;
        cart.forEach((itemInCart) => total = total + itemInCart.count)
        return total;
    }
    
    function removeItem(idRemove) {
        console.log('eliminando el item ' + idRemove)
    }

    function clear() {

    }

    function totalPriceInCart() {

    }


    return (
        <cartContext.Provider value={{ cart, addToCart, itemsInCart, removeItem, totalPriceInCart, clear }}>
            {props.children}
        </cartContext.Provider>
    )
}