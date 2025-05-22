import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className='mt-[50px]'>
    <Swiper className="mySwiper ">
    <SwiperSlide>
  <img
    className="w-full h-84 object-cover opacity-70 brightness-50"
    src="photo.avif"
    alt=""
  />
</SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Banner
