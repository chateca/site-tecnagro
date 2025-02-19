"use client"
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
  
  sr.reveal('.about__item__1-image',   {origin:"right"})
  sr.reveal('.about__item__1-content', {origin:"left"})
  
  },[])
   
   
   
  return (
    <section id='sobre-nos' className="relative mt-20 mb-10 overflow-hidden">
    
        <div className='container space-y-10 xl:space-y-0'>
          <div className='flex flex-col items-center lg:flex-row gap-5' >
           
            <div suppressHydrationWarning={true} className=' about__item__1-content flex flex-col w-full'>
            <div className='flex flex-col   gap-3  mb-4 md:mb-8 px-10 '>
          <h2 className='titulo'>Apresentação</h2>
          <p>Venha saber mais sobre a TecnAgro</p>
        </div>
                <div className='p-8  text-white'>
                  <h3>Venha garantir o <span className='text-green-2'>sucesso</span>
                  do seu negocio com a <br/>
                  TecnAgro
                  </h3>
                  <p className='text-[20px] font-thin text-justify'>
                  A TecnAgro se destaca pela sua ampla atuação nos setores de agronegócio, ecologia, sistemas florestais e tecnologia agrícola. Além de realizar estudos específicos sobre a implementação de inovações e tecnologias agrícolas, contamos com uma equipe de consultores altamente qualificados, com vasta experiência técnica na instalação de sistemas de irrigação e no uso de equipamentos especializados.
                  </p>
                 
                </div>
                <div>
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

            <div suppressHydrationWarning={true} className='about__item__1-image relative w-full lg:h-[700px] h-[300px] overflow-hidden rounded-full animate-mediaAnimation p-12'>
                <Image
                src={'/assets/img7.jpg'}
                alt="sobre Image"
                fill
                sizes='auto'
                className='object-cover  rounded-l-2xl'

                />
            </div>
          </div>
        </div>

      </section>
  )
}

export default SobreNos