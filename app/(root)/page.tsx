"use client"

import ActividadesRecentes from '@/components/ActividadesRecentes';
import Comentarios from '@/components/Comentarios';
import Contacto from '@/components/Contacto';
import Parceiros from '@/components/Parceiros';

import dynamic from 'next/dynamic'
const  BannerComponent = dynamic(()=>import("@/components/BannerComponent"), {ssr:false})
const  SobreNos= dynamic(()=>import("@/components/SobreNos"), {ssr:false})
const ProdutosEservicos = dynamic(()=> import('@/components/ProdutosEservicos'), {ssr:false});

export default function Home() {

  return (
    <section  className="flex flex-col w-full scroll-section ">
     <BannerComponent/>

     <section id='sobre-nos' className="relative lg:mt-20 xl:mt-20 mt-20 mb-10 overflow-hidden">
     <SobreNos/>
    </section>

        <section id='produtos-servicos' className="relative bg-white overflow-hidden text-green-2 py-20 xl:py-16  ">
        <ProdutosEservicos/>
       </section>
        
        <section className='relative py-20 bg-green-900'>
          <ActividadesRecentes/>
        </section>

        <section>
          <Parceiros/>
        </section>

        <section className='bg-green-900'>
          <Comentarios/>
        </section>

        <section className='relative bg-[#000] text-white py-20'>
          <Contacto/>
        </section>

    </section>
  );
}


