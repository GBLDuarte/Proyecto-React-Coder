import React from 'react'
import Item from '../Item/Item'

function ItemList({products}) {

    return (
        <div className='cardsList'>
            {products.map((product) => {
                return (
                    <Item key={product.id} 
                    product={product} 
                    />
                )
            })}
        </div>
    )
}

export default ItemList;