import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div>
    <Swiper className="mySwiper">
        <SwiperSlide ><img className="w-100vh h-96 bg-cover"  src="download.webp" alt="" /></SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Banner
