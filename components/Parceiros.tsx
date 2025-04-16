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
  const [isLoading, setIsLoading] = useState(true)


  return (
    <div className="container  relative  flex-col w-full items-center justify-center overflow-hidden py-8">
        <h1 className='titulo2 text-center'>Conheça nossos Parceiros</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4 py-2">
{
            parceiros.map((item, index)=>(
              <div key={index} className='relative w-32 max-sm:w-20 max-sm:h-16 h-24 rounded-2xl bg-white'>
                      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-1"></div>
        </div>
      )}
                <Image
                onLoad={()=>setIsLoading(false)}
                  src={item.image}
                  alt={'Parceiro'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain rounded-2xl"
                  priority={true}
                />
              </div>
   
            ))}
          </div>
      </div>
  )
}

export default Parceiros