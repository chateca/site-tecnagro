"use client"
import * as React from 'react'

import Image from 'next/image';
import { parceiros } from '@/constants';
 


function Parceiros() {

   
   
  
   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full">
    
    <h1 className='text-center text-green-2 text-[28px] uppercase font-ibm-plex-serif font-extrabold'>Parceiros e Clientes</h1>
      <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 self-center w-full gap-4 p-4  bg-gradient-to-r from-green-1 via-green-2 to-green-3 rounded-2xl'>
           {
            parceiros.map((item)=>(
              <div
              key={item.id}
              className='relative flex  h-[100px]'
              >
               <Image
              src={`/icons/${item.image}`}
              alt='Icons'
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               className='bg-contain rounded-lg'
              />
              </div>
             
            ))
           }
           
      </div>
        

      </div>
  )
}

export default Parceiros