"use client";
import { items } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState} from "react";
import faceboock from './../public/assets/icons/facebook.svg';
import whatsapp from './../public/assets/icons/whatsapp.svg';
import linkedin from './../public/assets/icons/linkedin.svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';



function BannerComponent() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);



  return (
    <div className="relative flex w-full max-h-[100vh] h-[100vh] slider">
     {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-1"></div>
        </div>
      )}
      <div className="flex flex-col h-full w-full list">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className=""
      >
       
      
        {items.map((item, index) => (
           <SwiperSlide key={item.id}>
          <div  className={`relative flex w-full h-full item ${index === 0 ? "ative" : ""}`}>
            <Image
             onLoad={() => setIsLoading(false)}
              src={item.image.src}
              alt="sliderImage"
              fill
              sizes="100vw"
              className="object-cover brightness-[.4]"
              priority={item.id === 1 ? true : false}
              loading={item.id === 1 ? "eager" : "lazy"}
            />
            <div className="content">
              <p className="font-mono lg:text-2xl md:text-xl text-base text-green-2 tracking-widest font-bold uppercase sub">
                {item.sub}
              </p>
              <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold text-green-1 titulo">
                <span className="lg:text-6xl md:text-5xl text-3xl font-bold text-white">Tecn</span>Agro
              </h2>
              <p className="text-gray-300 line-clamp-3 lg:text-xl md:text-base text-sm italic tracking-tight leading-normal whitespace-normal font-bold desc">
                {item.desc}
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-3">
                <button onClick={() => router.push("/solicitar-produto")} className="btn">
                  <span className="text-white flex">Solicitar produto</span>
                </button>
                <button onClick={() => router.push("/solicitar-produto")} className="btn btn_outline">
                  <span className="text-white flex">Solicitar serviço</span>
                </button>
              </div>
              <div className="mediaSocial">
                <Link href="https://facebook.com/share/1FdubjDfdh/?mibextid=wwXIfr" className="hover:scale-110 transition-transform">
                  <Image src={faceboock} alt="Facebook" width={24} height={24} className="animate-mediaAnimation" />
                </Link>
                <Link href="#" className="hover:scale-110 transition-transform">
                  <Image src={whatsapp} alt="WhatsApp" width={24} height={24} className="animate-mediaAnimation" />
                </Link>
                <Link href="https://linkedin.com/company/tecnagro/" className="hover:scale-110 transition-transform">
                  <Image src={linkedin} alt="X" width={24} height={24} className="animate-mediaAnimation" />
                </Link>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
        
     
      </Swiper>
      </div>
    
    </div>
  );
}

export default BannerComponent;




