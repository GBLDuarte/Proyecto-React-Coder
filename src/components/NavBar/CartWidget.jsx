import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext'


function CartWidget() {
    
    const miContext = useContext(cartContext);
    
    return (
        <li><Link to="/cart">🛒<span>{miContext.itemsInCart()}</span></Link></li>
    );
}

export default CartWidget;