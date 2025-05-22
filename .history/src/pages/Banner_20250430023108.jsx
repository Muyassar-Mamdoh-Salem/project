import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div>
    <Swiper className="mySwiper">
        <SwiperSlide ><img className="w-800 h-96 bg-cover"  src="download.webp" alt="" /></SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Banner
