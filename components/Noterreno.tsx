"use client"
import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
 

   


function Noterreno(){
  const router = useRouter()
    

   
   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full ">
      <div className="flex flex-col items-center justify-center p-4 rounded-2xl  w-[50%] self-center conteudo-actividades">
          <h1 className="text-[28px] font-extrabold uppercase font-ibm-plex-serif text-green-2">No terreno</h1>
            <div className="w-full h-1 bg-green-2" />
        </div>
        <div className='w-full flex items-center justify-center'>
           <button onClick={()=>router.push('/galeriaNoTerreno')} className='px-4 py-1 bg-green-1 rounded-lg text-[18px] font-semibold '>Ver mais </button>
        </div>
        
        <div className='grid grid-cols-2 grid-flow-col max-sm:grid-flow-row max-sm:grid-cols-1 gap-1 p-8  max-sm:p-8 self-center'>
         <div className='grid grid-cols-2 w-full p-4'>
         <div className=" w-full  justify-between items-center  rounded-xl conteudo-actividades">
            <div className=' relative flex w-full h-full'>
              <Image
              src={"/assets/img12.jpg"}
              alt='consultoria'
              fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='object-cover'
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
              className='object-cover'
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
              className='object-cover'
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
              className='object-cover'
              />
            </div>
          

            
           
          </div>

         </div>

          <div className='flex flex-col w-full h-full'>
              <div className='w-[100%] h-[100%] '>
              <video className='size-full' controls autoPlay={true} loop={true}  src="/video/video.mp4"/>
              
              </div>
          </div>
       
        </div>


         <div className='grid grid-cols-3 h-[500px] w-full p-4'>
         <div className=" w-full  justify-between items-center  rounded-xl conteudo-actividades">
            <div className=' relative flex w-full h-full'>
              <Image
              src={"/assets/img12.jpg"}
              alt='consultoria'
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='object-cover'
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
              className='object-cover'
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
              className='object-cover'
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
              className='object-cover'
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
              className='object-cover'
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
              className='object-cover '
              />
            </div>
            
           
          </div>

         </div>

        
       
          
          
       

        </div>
  )
}

export default Noterreno