"use client"
import Image from 'next/image'
import React from 'react'

function Comentario({nome, descricao, data}:{nome:string, descricao:string, data:string}) {

  return (
    <div className='flex flex-col gap-5 bg-green-950 rounded-md p-6'>
        
        <p className='font-mono text-sm text-white'>
        {descricao}
        </p>
        <div className='flex items-center  gap-1'>
          <div className='relative w-12 h-12'>
          <Image
            src="/assets/img/img13.jpg"
            alt="user"
           fill
           sizes='auto'
           className=' rounded-full'
            /> 
          </div>
            
             <div className='ml-2'>
          <p className='text-green-2 font-sans text-base font-bold'>{nome}</p>
         </div>
           </div>
        

      
            <span className='text-gray-400 text-[14px] '>Data: <span>{data}</span></span>
    </div>
  )
}

export default Comentario