import React from 'react'
import ItemList from './ItemList/ItemList'
import getProducts from '../../services/mockService'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    async function getProductsAsync() {
        try {
            let respuesta = await getProducts(idCategory);
            setProducts(respuesta);
        } catch (error) {
            console.error('Error desde la base de datos', error);
        }
    }

    useEffect(() => {
        getProductsAsync();
    }, [idCategory]);

    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer;