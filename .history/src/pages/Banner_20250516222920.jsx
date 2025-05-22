import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className='mt-[50px]'>
    <Swiper className="mySwiper ">
    <SwiperSlide>
  <img
    className="w-full h-[400px] object-cover opacity-70 brightness-90 relative"
    src="photo.avif"
    alt=""
  />
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
    <h2>Summer Collection 2023</h2>
  <p>Discover our new arrivals with up to 30% off on selected items</p>
  <div className='flex gap-4 '>
    <button className='bg-blue-500'>Shop Now </button>
    
    <button className='bg-white '>View Collection</button>
  </div>
  </div>
</SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Banner
