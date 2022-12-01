import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { getSingleProduct } from '../../services/firestore'
import { useParams } from 'react-router-dom'



function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    async function getSingleProductAsync() {
        try {
            let respuesta = await getSingleProduct(id);
            setProduct(respuesta);
        } catch (error) {
            console.error('Error desde la base de datos', error);
        }
    }

    useEffect(() => {
        getSingleProductAsync();
    }, []);

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer;