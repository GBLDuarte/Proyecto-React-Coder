import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { getSingleProduct } from '../../services/mockService'



function ItemDetailContainer() {
    
    const [product, setProduct] = useState([]);

    async function getSingleProductAsync() {
        try {
            let respuesta = await getSingleProduct();
            setProduct(respuesta);
        } catch (error) {
            console.error('Error desde la base de datos', error);
        }
    }

    useEffect(() => {
        getSingleProductAsync();
    }, []);

    return (
        <ItemDetail props={product} />
    )
}

export default ItemDetailContainer;