'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { parceiros } from '@/constants'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Parceiros() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <h1 className='titulo2 text-center mt-12 '>Nossos Parceiros</h1>
      <div className="container flex items-center justify-center py-2">
        {isClient ? 
          
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={true}
            freeMode={true}
            pagination={{ clickable: true }}
            breakpoints={{
              200: { slidesPerView: 1, spaceBetween: 1 },
              640: { slidesPerView: 1, spaceBetween: 1 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
            
            modules={[Autoplay, Pagination]}
            
          >
            {
            parceiros.map((item, index)=>(
             <SwiperSlide key={item.id} virtualIndex={index} className="relative bg-white w-full h-44 rounded-2xl flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={'Parceiro'}
                   width={100}
                   height={100}
                   style={{
                    width:"100%",
                    height:"100px"
                   }}
                  className="object-contain rounded-2xl"
                  loading='lazy'
                  blurDataURL={'item.image'}
                />
              </SwiperSlide>
            ))
          }
          </Swiper>
          
        :
          <div className="grid grid-cols-3 gap-4">
            {parceiros.map((item) => (
              <div key={item.id} className="bg-gray-200 rounded-2xl h-44 animate-pulse"/>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Parceiros