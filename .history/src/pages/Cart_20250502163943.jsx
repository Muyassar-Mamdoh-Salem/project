import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const products = useSelector((state) => { state.appReducer.products })
  return (
    <div className='mt-20'>
      {products.map((product) => {
        <div key={product.id}>

          <h2>{product.title}</h2>
          <img src={product.image} />

          <p>{product.description}</p>
          <p>{product.price}</p>
          <button

        </div>

      })}
    </div>
  )
}

export default Cart
