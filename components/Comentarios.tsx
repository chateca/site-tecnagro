"use client"
import * as React from 'react'
import {animate, scroll, stagger} from "motion"
import { useEffect } from "react";
import Comentario from './Comentario';

 


function Comentarios() {

    const comentarios = [1,2,3,4]
  useEffect(()=>{
        
        document.querySelectorAll(".conteudo-actividades").forEach((item) => {
          scroll(animate(item, { opacity: [0, 1, 1, 0], y: [150, 0] }, { delay: stagger(0.1) }), {
              target: item,
              offset: ["start end", "end end", "start start", "end start"],
              
          })
      })
      },[])
   
   
   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full conteudo-actividades mt-10">
    
    <h1 className='text-center text-white text-[28px] uppercase font-ibm-plex-serif font-extrabold'>Comentários</h1>
      <div className='grid grid-cols-4 gap-4 p-8 flex-wrap  w-full justify-between  rounded-2xl'>
    
      {comentarios.map((item)=>(
          <Comentario key={item}/>
      ))}
     
      </div>
        

      </div>
  )
}

export default Comentarios
