import React from 'react'
import Item from './Item'
import getProducts from '../../services/mockService'
import { useState, useEffect } from 'react'
import './itemlist.css'


function Itemlist() {

    const [products, setProducts] = useState([]);

    async function getProductsAsync() {
        try {
            let respuesta = await getProducts();
            setProducts(respuesta);
        } catch (error) {
            console.error('Error desde la base de datos', error);
        }
    }

    useEffect(() => {
        getProductsAsync();
    }, []);

    return (
        <div className='cardsList'>
            {products.map((product) => {
                return (
                    <Item
                        key={product.id}
                        url={product.url}
                        name={product.name}
                        price={product.price}
                    />
                )
            })}
        </div>
    )
}

export default Itemlist;