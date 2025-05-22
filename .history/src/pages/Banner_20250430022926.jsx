import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div>
    <Swiper className="mySwiper">
        <SwiperSlide><img src="public\download.webp" alt="" /></SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Banner
