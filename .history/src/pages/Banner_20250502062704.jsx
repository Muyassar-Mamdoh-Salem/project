import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div>
    <Swiper className="mySwiper">
    <SwiperSlide>
  <img
    className="w-full h-9 object-cover opacity-60"
    src="photo.avif"
    alt=""
  />
</SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Banner
