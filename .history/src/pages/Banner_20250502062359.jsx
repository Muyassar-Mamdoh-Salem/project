import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div>
    <Swiper className="mySwiper">
    <SwiperSlide>
  <img
    className="w-100-vh h-96 object-cover"
    src="photo.avif"
    alt=""
  />
</SwiperSlide>
     
      </Swiper>
    </div>
  )
}

export default Banner
