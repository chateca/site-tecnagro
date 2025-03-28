"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import * as React from 'react'

function SobreNos() {   
  const router = useRouter()
  return (
 
        <div className='container space-y-10 xl:space-y-0 pb-4'>
          <div className='flex flex-col items-center lg:flex-row gap-5' >
            <div suppressHydrationWarning className='about__item__1-content flex flex-col w-full'>
            <div suppressHydrationWarning  className='about__item__title flex flex-col   gap-3   mb-4 md:mb-8 px-10 '>
          <h2 className='titulo'>Apresentação</h2> 
        </div>
                <div className='p-8  text-white'>
                  <h3 className='text-2xl font-mono'>Venha garantir o <span className='text-green-2 text-2xl'>sucesso </span>
                   do seu agro negocio com a <br/>
                    <span className='text-3xl font-mono text-green-2'>Tecn<span className='text-2xl text-green-1'>Agro</span></span>
                  </h3>
                  <p className='text-base italic text-justify text-gray-300 font-bold'>
                  A TecnAgro se destaca pela sua ampla atuação nos setores de agronegócio, ecologia, sistemas florestais e tecnologia agrícola. Além de realizar estudos específicos sobre a implementação de inovações e tecnologias agrícolas, contamos com uma equipe de consultores altamente qualificados, com vasta experiência técnica na instalação de sistemas de irrigação e no uso de equipamentos especializados.
                  </p>
                 
                </div>
                <div >
                  <button onClick={()=>router.push("/")} className='btn'>
                  
                    <span className='flex gap-2'>
                      Saber mais
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                      </span>
                  </button>
                </div>
            </div>

            <div suppressHydrationWarning className='about__item__1-image relative  items-center justify-center flex  w-full   animate-mediaAnimation'>
                <div className='relative h-96 w-96  z-96'>
                <Image
                src={'/assets/img/sobre.jpg'}
                alt="sobre Image"
                fill
                sizes='100%'
                className='object-cover rounded-xl'
                />
                </div>
            </div>
          </div>

          <div suppressHydrationWarning  className='container about__item__1-numbers  grid lg:grid-cols-3 grid-cols-2 mt-4 px-2 gap-x-3'>
             <div  className='flex lg:items-center lg:justify-center relative space-x-1 lg:w-48 w-32 h-28'>
                  <span className='md:text-2xl ms:text-xl text-lg font-mono text-gray-300 font-bold' >Formações realizadas:</span>
                  <span className='lg:text-6xl md:text-5xl text-4xl text-green-2 font-bold'>20</span>
             </div>
             <div  className=' flex lg:items-center lg:justify-center relative  lg:w-48 w-32 h-28'>
                  <span className='md:text-2xl sm:text-xl text-lg  font-mono text-gray-300 font-bold' >Projectos elaborados:</span>
                  <span className='lg:text-6xl md:text-5xl text-4xl text-green-2 font-bold'>15</span>
             </div>
             <div className='relative  lg:w-80  w-auto h-auto lg:col-span-1 col-span-2 '>    
                  <Image
                  src={"/assets/img/sucesso.jpg"}
                  alt="sucesso"
                  width={100}
                  height={100}
                 
                  unoptimized
                  sizes='100px'
                  className='rounded-xl float-right w-[100px] h-[100px]'
                  />
                  <span className='text-lg italic font-medium leading-normal text-gray-200'>
                  Com a TecnAgro, você tem inovação, confiança e soluções inteligentes para impulsionar o seu agronegócio. 
                  Cresça com quem entende do campo!
                  </span>
             </div>
          </div>
        </div>
    
  )
}

export default SobreNos