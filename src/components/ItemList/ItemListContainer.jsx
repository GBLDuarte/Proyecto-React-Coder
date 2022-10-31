import React from 'react'
import './itemlist.css'


function ItemListContainer(props) {
    return (
        <div className='cards'>
            <img src={props.url} alt="zapatito" />
            <p>{props.greeting}</p>
            <p>{props.descripcion}</p>
        </div>
    );
}

export default ItemListContainer;