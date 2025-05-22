import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const products =useSelector((state)=>{state.appReducer.products})
  return (
    <div className='mt-20'>
    {products.map((product)=>{
<div key={product.id}>
<img src={product.image}/>

      <p>{product.title}</p>
      <p>{product.price}</p>
      
      </div>

    })}
    </div>
  )
}

export default Cart
