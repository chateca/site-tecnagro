"use client"
import { delay } from 'motion'
import Image from 'next/image'

import * as React from 'react'



 


function SobreNos() {
  React.useEffect(()=>{
   //@ts-ignore 
  const sr = ScrollReveal(({
      origin:"top", 
      distance:"60px", 
      duration:2500, 
      delay:300, 
      reset:true
  }))
  
  sr.reveal('.about__item__title')
  sr.reveal('.about__item__1-image',   {origin:"right"})
  sr.reveal('.about__item__1-content', {origin:"left"})
  sr.reveal('.about__item__1-numbers', {delay:500, scale:0.5})
  
  })
   
   
   
  return (
    <section id='sobre-nos' className="relative mt-20 mb-10 overflow-hidden">
    
        <div className='container space-y-10 xl:space-y-0 pb-4'>
          <div className='flex flex-col items-center lg:flex-row gap-5' >
           
            <div suppressHydrationWarning className='about__item__1-content flex flex-col w-full'>
            <div className='about__item__title flex flex-col   gap-3  mb-4 md:mb-8 px-10 '>
          <h2 className='titulo'>Apresentação</h2>
         
        </div>
                <div className='p-8  text-white '>
                  <h3 className='text-2xl font-mono'>Venha garantir o <span className='text-green-2 text-2xl'>sucesso </span>
                   do seu negocio com a <br/>
                    <span className='text-3xl font-mono text-green-2'>Tecn<span className='text-2xl text-green-1'>Agro</span></span>
                  </h3>
                  <p className='text-base italic text-justify text-gray-300 font-bold'>
                  A TecnAgro se destaca pela sua ampla atuação nos setores de agronegócio, ecologia, sistemas florestais e tecnologia agrícola. Além de realizar estudos específicos sobre a implementação de inovações e tecnologias agrícolas, contamos com uma equipe de consultores altamente qualificados, com vasta experiência técnica na instalação de sistemas de irrigação e no uso de equipamentos especializados.
                  </p>
                 
                </div>
                <div className=''>
                  <button className='btn'>
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

          <div className='container grid lg:grid-cols-3 grid-cols-2 mt-4 px-2 gap-x-3'>
             <div className='about__item__1-numbers flex lg:items-center lg:justify-center relative space-x-1 lg:w-48 w-32 h-28'>
                  <span className='md:text-2xl ms:text-xl text-lg font-mono text-gray-300 font-bold' >Formações realizadas:</span>
                  <span className='lg:text-6xl md:text-5xl text-4xl text-green-2 font-bold'>20</span>
             </div>
             <div className='about__item__1-numbers flex lg:items-center lg:justify-center relative  lg:w-48 w-32 h-28'>
                  <span className='md:text-2xl sm:text-xl text-lg  font-mono text-gray-300 font-bold' >Projecto elaborados:</span>
                  <span className='lg:text-6xl md:text-5xl text-4xl text-green-2 font-bold'>15</span>
             </div>
             <div className='about__item__1-numbers relative  lg:w-80 h-28 w-full lg:col-span-1   col-span-2 '>
                 
                  <Image
                  src={"/assets/img/sucesso.jpg"}
                  alt="sucesso"
                  width={100}
                  height={100}
                  sizes='100px'
                  className='rounded-xl float-right'
                  />
                  <p className='text-lg italic font-semibold leading-normal text-gray-200'>
                  Com a TecnAgro, você tem inovação, confiança e soluções inteligentes para impulsionar o seu agronegócio. 
                  Cresça com quem entende do campo!🌱🚜
                  </p>
             </div>
          </div>
        </div>

      </section>
  )
}

export default SobreNos