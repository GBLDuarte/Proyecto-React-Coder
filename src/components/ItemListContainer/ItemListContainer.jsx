import React from 'react'
import ItemList from './ItemList/ItemList'
import './ItemList/itemlist.css'
import getProducts from '../../services/mockService'
import { useState, useEffect } from 'react'



function ItemListContainer() {

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
        <ItemList products={products} />
    )
}

export default ItemListContainer;