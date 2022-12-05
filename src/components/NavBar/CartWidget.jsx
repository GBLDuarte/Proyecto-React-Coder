import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext'


function CartWidget() {
    
    const miContext = useContext(cartContext);
    
    return (
        <li><a href="#">🛒<span>{miContext.itemsInCart()}</span></a></li>
    );
}

export default CartWidget;