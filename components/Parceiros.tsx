"use client"
import * as React from 'react'

import Image from 'next/image';
import { parceiros } from '@/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay} from 'swiper/modules';

 
function Parceiros() {
  return (
    <div className="container flex flex-col w-full overflow-hidden ">
    
      <div className='py-2'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="swiper"
      >
        {
        
        parceiros.map((item)=>(
          <SwiperSlide key={item.id}>
           <div
             className='relative bg-white  w-full h-44 rounded-2xl'
             >
              <Image
             src={`/assets/icons/${item.image}`}
             alt='Icons'
             fill
             sizes="auto"
              className='object-contain rounded-2xl'
             />
             </div>
          </SwiperSlide>
      ))}
      </Swiper>
           

            
       
          
           
      </div>
        

      </div>
  )
}

export default Parceiros