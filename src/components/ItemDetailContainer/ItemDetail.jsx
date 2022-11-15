import React from 'react'

function ItemDetail({props}) {
 
    return (
        <div className='detailCard'>
            <div className='detailImg'>
                <img src={props.url} alt={props.name} />
                <img src={props.url} alt={props.name} />
                <img src={props.url} alt={props.name} />
            </div>
            <div className='detailBody'>
                <h3>{props.name}</h3>
                <p>Color: {props.color}</p>
                <p>{props.info}</p>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail;