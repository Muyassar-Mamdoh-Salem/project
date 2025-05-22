import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='bg-slate-900 text-white text-center gap-4 grid grid-cols-2 md:grid-cols-4 py-10 '>
       
<div className='' ><h3>Free Shipping</h3><p>On orders over $50</p>

<div className='mt-16 ' draggable><h3>ShopEase</h3>
<p>Your premier destination for quality products <br/> and exceptional customer service since 2023.</p>
<div></div>
</div>
</div>



<div><h3>Secure Payment</h3><p>100% secure checkout</p></div>
<div><h3>Quality Guarantee</h3><p>Product quality assured</p></div>
<div><h3>24/7 Support</h3><p>Dedicated support</p></div>
       

      </footer>
     <section className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-10 bg-slate-900 text-white container mx-auto '>




<div><h3>Quick Links</h3></div>
<div><h3>Customer Service</h3></div>
<div><h3>Newsletter</h3>
<p>Subscribe to get updates on new arrivals, special offers and other discount information.</p>
<div className='flex items-center '><input type="email" placeholder='Enter your email'/><button className='bg-blue-800 text-white p-2'>Subscribe</button></div>
</div>

        
      </section>
    </div>
  )
}

export default Footer
