import React from 'react'
import { useState } from 'react'

function ItemCount({stock, onAddToCart}) {

    let [count, setCount] = useState(0);

    function handleSuma() {
        (count < stock) && setCount(count + 1);
    }

    function handleResta() {
        (count > 1) && setCount(count - 1);
    }

    return (
        <div>
            <button onClick={handleSuma}>+</button>
            <span>{count}</span>
            <button onClick={handleResta}>-</button>
            <button onClick={()=> onAddToCart(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;