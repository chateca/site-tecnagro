"use client"
import React, { useEffect} from 'react'
import { animate, stagger } from 'motion'
import { useRouter } from 'next/navigation'
 

function ServicesComponents() {

const router = useRouter()
  useEffect(()=>{
    animate(".servicoItem", { opacity: 1, y: [200, 0] }, { delay: stagger(0.5) })  
   
  },[])
   

  return (
    <div className="absolute -top-[25rem] max-xl:-top-[15rem]  w-full  grid grid-cols-3 gap-8 max-sm:gap-3 px-[18rem] max-sm:px-2 max-xl:px-[10rem] ">
    <div onClick={()=>router.push('#servicos')} className="relative cursor-pointer flex h-[20rem]  max-xl:h-[12rem] w-full bg-[url('/assets/img9.png')] bg-cover  rounded-xl items-center justify-center servicoItem ">
      
    <div className='flex flex-col items-center justify-center rounded-2xl p-4  z-20'>
    <h1 className='text-white max-xl:text-[18px] text-[28px] max-sm:text-[14px] font-extrabold '>Solicitar produtos e Serviços</h1>
    </div>
    </div>

    <div onClick={()=>router.push('#consultorias')} className="relative cursor-pointer flex  h-[20rem]  max-xl:h-[12rem] w-full bg-[url('/assets/img9.png')] bg-cover  rounded-xl items-center justify-center servicoItem">
    <div className='flex flex-col items-center justify-center rounded-2xl p-4'>
    <h1 className='text-white max-xl:text-[18px] text-[28px] max-sm:text-[14px] font-extrabold '>Consultorias e Formações</h1>
    </div>
    </div>

    <div 
    className="relative cursor-pointer flex h-[20rem]  max-xl:h-[12rem] w-full bg-[url('/assets/img9.png')] bg-cover  rounded-xl items-center justify-center servicoItem">
      
    <div className='flex flex-col items-center justify-cente  rounded-2xl p-4'>
    <h1 className='text-white max-xl:text-[18px] text-[28px] font-extrabold max-sm:text-[14px]'>Elaboração de projectos</h1>
    </div>
    </div>


       

    </div>
  )
}

export default ServicesComponents