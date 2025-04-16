'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { parceiros } from '@/constants'
import { Virtual } from 'swiper/modules';
// core version + navigation, pagination modules:
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

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
    <div className="container  relative  flex-col w-full overflow-hidden">
      <div className="py-2">
        {isClient?
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            breakpoints={{
              200: { slidesPerView: 1, spaceBetween: 1 },
              640: { slidesPerView: 1, spaceBetween: 1 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
            
            modules={[EffectFade, Autoplay, Pagination, Virtual]}
            effect='fade'
            virtual
          >
            {
            parceiros.map((item, index)=>(
             <SwiperSlide key={item.id} virtualIndex={index} className="relative bg-white w-full h-44 rounded-2xl">
                <Image
                  src={item.image}
                  alt={'Parceiro'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain rounded-2xl"
                  priority={false}
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