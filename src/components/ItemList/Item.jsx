import React from 'react'
import ButtonDetail from '../Button/ButtonDetail';
import './item.css'


function Item(props) {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={props.url} alt={props.name} />
        </div>
        <div className='cardInfo'>
            <p>{props.name}</p>
            <p>${props.price}</p>
        </div>
        <ButtonDetail>Detalles del producto</ButtonDetail>
    </div>
  )
}

export default Item;