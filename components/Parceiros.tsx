"use client"
import * as React from 'react'
import {animate, scroll, stagger} from "motion"
import { useEffect } from "react";
import Image from 'next/image';
 


function Parceiros() {

    useEffect(()=>{
        
        document.querySelectorAll(".conteudo-actividades").forEach((item) => {
          scroll(animate(item, { opacity: [0, 1, 1, 0], y: [150, 0] }, { delay: stagger(0.1) }), {
              target: item,
              offset: ["start end", "end end", "start start", "end start"],
              
          })
      })
      },[])
 
   
   
   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full">
    
      
      <div className='flex  gap-4 p-12  w-full justify-between bg-green-1/30 rounded-2xl'>
      
      <Image
            src={"/icons/gene-sequence-svgrepo-com.svg"}
            alt='Icons'
            width={100}
            height={100}
            />
         
           

            <Image
            src={"/icons/gene-sequence-svgrepo-com.svg"}
            alt='Icons'
            width={100}
            height={100}
            />

            <Image
            src={"/icons/protein-svgrepo-com.svg"}
            alt='Icons'
            width={100}
            height={100}
            />

           <Image
            src={"/icons/genetic-data-svgrepo-com.svg"}
            alt='Icons'
            width={100}
            height={100}
            />
     
      </div>
        

      </div>
  )
}

export default Parceiros