import React from 'react'
import {
  AiFillTruck,
  AiFillCreditCard,
  AiFillSafetyCertificate,
  AiOutlineQuestionCircle,
} from 'react-icons/ai'

const features = [
  {
    icon: <AiFillTruck className='text-3xl text-blue-600' />,
    title: 'Free Shipping',
    desc: 'On orders over $50',
  },
  {
    icon: <AiFillCreditCard className='text-3xl text-blue-600' />,
    title: 'Secure Payment',
    desc: '100% secure checkout',
  },
  {
    icon: <AiFillSafetyCertificate className='text-2xl text-blue-600' />,
    title: 'Quality Guarantee',
    desc: 'Product quality assured',
  },
  {
    icon: <AiOutlineQuestionCircle className='text-2xl text-blue-600' />,
    title: '24/7 Support',
    desc: 'Dedicated support',
  },
]

const Footer = () => {
  return (
    <div className='bg-slate-900 mt ' id="footer" >
      <footer className='text-white grid gap-8 grid-cols-1 px-4 sm:px-0  sm:grid-cols-2 lg:grid-cols-4 container mx-auto py-10'>
        {features.map((item, index) => (
          <div key={index}>
            <div className='flex items-start gap-4'>
              {item.icon}
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='opacity-70 text-sm'>{item.desc}</p>
              </div>
            </div>

            {/* المحتوى الإضافي لكل عمود حسب ما هو موجود في النسخة الأصلية */}
            {index === 0 && (
              <div className='mt-16'>
                <h3 dir='ltr'>ShopEase</h3>
                <p>
                  Your premier destination for quality products <br /> and
                  exceptional customer service since 2023.
                </p>
              </div>
            )}

            {index === 1 && (
              <div className='mt-16'>
                <h3>Quick Links</h3>
                <ul>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>Blog</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            )}

            {index === 2 && (
              <div className='mt-16'>
                <h3>Customer Service</h3>
                <ul>
                  <li>My Account</li>
                  <li>Order Tracking</li>
                  <li>Wishlist</li>
                  <li>Shipping Policy</li>
                  <li>Returns & Refunds</li>
                </ul>
              </div>
            )}

            {index === 3 && (
              <div className='mt-16'>
                <h3>Newsletter</h3>
                <p>
                  Subscribe to get updates on new arrivals, special offers and
                  other discount information.
                </p>
                <div className='flex items-center mt-5'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='p-2'
                  />
                  <button className='bg-blue-800 text-white p-2'>
                    Subscribe
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </footer>
    </div>
  )
}

export default Footer
