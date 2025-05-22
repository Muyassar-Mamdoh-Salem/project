import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className='mt-[50px]'>
    <Swiper className="mySwiper ">
    <SwiperSlide>
  <img
    className="w-full h-[400px] object-cover opacity-70 brightness-50 relative"
    src="photo.avif"
    alt=""
  />
  <div><h2>Summer Collection 2023</h2>
  <p>Discover our new arrivals with up to 30% off on selected items</p>
  <div>
    button
  </div>
  </div>
</SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Banner
