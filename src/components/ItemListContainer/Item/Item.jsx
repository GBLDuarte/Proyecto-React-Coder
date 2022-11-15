import React from 'react'
import ButtonDetail from '../../Button/ButtonDetail';
import './item.css'


function Item({product}) {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={product.url} alt={product.name} />
        </div>
        <div className='cardInfo'>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
        <ButtonDetail>Detalles del producto</ButtonDetail>
    </div>
  )
}

export default Item;