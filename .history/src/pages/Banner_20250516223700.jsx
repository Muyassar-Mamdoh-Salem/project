import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className='mt-[50px]'>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            {/* الصورة */}
            <img
              className="w-full h-full object-cover"
              src="photo.avif"
              alt=""
            />

            {/* طبقة التعتيم */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* النص والأزرار فوق الصورة */}
            <div className='absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4'>
              <h2 className="text-5xl font-bold mb-2">Summer Collection 2023</h2>
              <p className="mb-4 font-bold text-xl">Discover our new arrivals with up to 30% off on selected items</p>
              <div className='flex gap-4 justify-center'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>Shop Now</button>
                <button className='bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition'>View Collection</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
