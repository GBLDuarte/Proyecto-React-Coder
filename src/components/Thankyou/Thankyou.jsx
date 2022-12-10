import React from 'react'
import './ty.css'
import { useParams } from 'react-router-dom';

function Thankyou() {
  const { idOrder } = useParams();

  return (
    <div className='checkSuccess'>
      <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
      <h3>Gracias por la compra. ID: {idOrder}</h3>
      </div>
    </div>
  )
}

export default Thankyou;