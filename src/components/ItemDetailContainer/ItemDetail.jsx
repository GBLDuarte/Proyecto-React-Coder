import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import '../ItemListContainer/Item/item.css'
import './itemdetail.css'

function ItemDetail({ product }) {

    const { addToCart } = useContext(cartContext);

    function onAddToCart(count) {
        console.log(`${count} productos agregados al carrito`)
        addToCart(product, count);
    }

    return (
        <div className='detailCard'>
            <div className='card'>
                <div className='cardImg'>
                    <img src={product.url} alt={product.name} />
                    <img src={product.url} alt={product.name} />
                    <img src={product.url} alt={product.name} />
                </div>
                <div className='cardInfoDetail'>
                    <h3>{product.name}</h3>
                    <p>Color: {product.color}</p>
                    <p>{product.info}</p>
                    <p className='strong'>${product.price}</p>
                </div>
                <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;