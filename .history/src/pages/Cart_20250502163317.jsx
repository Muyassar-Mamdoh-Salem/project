import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const products =UseSelector((state)=>{state.appReducer.products})
  return (
    <div className='mt-20'>
      cart
    </div>
  )
}

export default Cart
