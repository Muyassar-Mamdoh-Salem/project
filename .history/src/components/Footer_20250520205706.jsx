import React from 'react'
import { AiFillTruck ,AiFillCreditCard 

const Footer = () => {
  return (
    <div className='bg-slate-900 '>
      <footer className=' text-white  gap-4 grid grid-cols-2 container mx-auto md:grid-cols-4 py-10 '>

        <div >
          
  <div className='flex items-center gap-4'>
  <AiFillTruck className='text-3xl text-blue-600' />
  <div>
    <h3 className='text-lg font-semibold'>Free Shipping</h3>
    <p className='opacity-70 text-sm'>On orders over $50</p>
  </div>
</div>


        

        
          <div className='mt-16 '>
            <h3 dir='ltr'>ShopEase</h3>
            <p>Your premier destination for quality products <br /> and exceptional customer service since 2023.</p>
            <div></div>
          </div>
        </div>


<div>
        <div className='flex items-center gap-4'>
          <AiFillCreditCard className='text-3xl text-blue-600' />
          <div>
            <h3>Secure Payment</h3><p className='opacity-70'>100% secure checkout</p>
          </div>
          </div>
          

          <div className='mt-16 '>
            <h3>Quick Links</h3>


            <ul>
              <li>Home </li>
              <li>Shop</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>

          </div>
        </div>


        <div><h3>Quality Guarantee</h3><p className='opacity-70'>Product quality assured</p>

          <div className='mt-16 '>
            <h3>Customer Service</h3>
            <ul>
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Wishlist</li>
              <li>Shipping Policy</li>
              <li> Returns & Refunds</li>

            </ul>

          </div>
        </div>
        <div ><h3>24/7 Support</h3><p className='opacity-70'>Dedicated support</p>
        
          <div className=' mt-16'><h3>Newsletter</h3>
          <p>Subscribe to get updates on new arrivals, special offers and other discount information.</p>
          <div className='flex items-center '><input type="email" placeholder='Enter your email' className='p-2' /><button className='bg-blue-800 text-white p-2'>Subscribe</button></div>
        </div>
        </div>


      </footer>
      <section className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-10 bg-slate-900 text-white container mx-auto '>





      


      </section>
    </div>
  )
}

export default Footer
