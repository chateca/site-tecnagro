"use client"
import dynamic from 'next/dynamic'
const  BannerComponent = dynamic(()=>import("@/components/BannerComponent"), {ssr:false})
const  SobreNos= dynamic(()=>import("@/components/SobreNos"), {ssr:false})


export default function Home() {

  return (
    <section  className="flex flex-col w-full scroll-section ">
     <BannerComponent/>
     <SobreNos/>

    </section>
  );
}


