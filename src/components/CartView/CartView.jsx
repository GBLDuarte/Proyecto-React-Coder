import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import './cartview.css'

function CartView() {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <div className='cartContainer'>
      {cart.map((item) =>
        <div className='cartItem' key={item.id}>
          <h3>{item.name}</h3>
          <h4>{item.color}</h4>
          <h4>Cantidad: {item.count}</h4>
          <h4>Precio por unidad: {item.price}</h4>
          <button onClick={() => removeItem(item.id)}>X</button>
        </div>
      )}
    </div>
  )
}

export default CartView;