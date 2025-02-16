import Image from 'next/image'
import React from 'react'

function Fotos() {
  return (
       <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 h-[500px] w-full p-4 gap-4'>
             <div className=" w-full  justify-between items-center  rounded-xl conteudo-actividades">
                <div className=' relative flex w-full h-full'>
                  <Image
                  src={"/assets/img12.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
              
              </div>
    
              <div className=" flex w-full flex-col  justify-between items-center  rounded-xl conteudo-actividades">
                <div className='relative flex w-full h-full'>
                  <Image
                  src={"/assets/img14.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
               
              </div>
    
              
              <div className="flex w-full flex-col  justify-between items-center  rounded-xl conteudo-actividades">
              <div className='relative flex h-full w-full '>
                  <Image
                  src={"/assets/img13.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>   
              </div>
    
              <div className="flex w-full flex-col justify-between items-center rounded-xl conteudo-actividades">
                <div className='relative flex w-full h-full'>
                  <Image
                  src={"/assets/img15.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
                
               
              </div>
            
    
              <div className="flex w-full flex-col  justify-between items-center  rounded-xl conteudo-actividades">
              <div className='relative flex h-full w-full '>
                  <Image
                  src={"/assets/img13.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
              
    
                
               
              </div>
    
              <div className="flex w-full flex-col justify-between items-center rounded-xl conteudo-actividades">
                <div className='relative flex w-full h-full'>
                  <Image
                  src={"/assets/img15.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
                
               
              </div>

              <div className=" w-full  justify-between items-center  rounded-xl conteudo-actividades">
                <div className=' relative flex w-full h-full'>
                  <Image
                  src={"/assets/img12.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
              
              </div>
    
              <div className=" flex w-full flex-col  justify-between items-center  rounded-xl conteudo-actividades">
                <div className='relative flex w-full h-full'>
                  <Image
                  src={"/assets/img14.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
               
              </div>
    
              
              <div className="flex w-full flex-col  justify-between items-center  rounded-xl conteudo-actividades">
              <div className='relative flex h-full w-full '>
                  <Image
                  src={"/assets/img13.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>   
              </div>
    
              <div className="flex w-full flex-col justify-between items-center rounded-xl conteudo-actividades">
                <div className='relative flex w-full h-full'>
                  <Image
                  src={"/assets/img15.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
                
               
              </div>
            
    
              <div className="flex w-full flex-col  justify-between items-center  rounded-xl conteudo-actividades">
              <div className='relative flex h-full w-full '>
                  <Image
                  src={"/assets/img13.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
              
    
                
               
              </div>
    
              <div className="flex w-full flex-col justify-between items-center rounded-xl conteudo-actividades">
                <div className='relative flex w-full h-full'>
                  <Image
                  src={"/assets/img15.jpg"}
                  alt='consultoria'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='absolute object-cover size-full'
                  />
                </div>
                
               
              </div>
    
             </div>
  )
}

export default Fotos