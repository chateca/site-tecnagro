"use client"
import dynamic from 'next/dynamic'
const  BannerComponent = dynamic(()=>import("@/components/BannerComponent"), {ssr:false})
const  SobreNos= dynamic(()=>import("@/components/SobreNos"), {ssr:false})


export default function Home() {

  return (
    <section  className="relative  flex flex-col w-full scroll-section ">
     <BannerComponent/>

     <section id='sobre-nos' className="relative mt-20 mb-10 overflow-hidden">
     <SobreNos/>
    </section>
    </section>
  );
}


