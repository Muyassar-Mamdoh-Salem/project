import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const product =useSelector((state)=>{state.appReducer.p})
  return (
    <div className='mt-20'>
      cart
    </div>
  )
}

export default Cart
