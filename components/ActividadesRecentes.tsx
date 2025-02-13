"use client"
import * as React from 'react'
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {animate, scroll, stagger} from "motion"
import { useEffect } from "react";
import { BuscarActividadesActivasPaginaPrincipal } from '@/lib/actions/actividades.actions'
 


  type Dados = {
     _id:string, 
     titulo:string, 
     dataRegistro:string, 
     imagem:string, 
     descricao:string
  }
   


function ActividadesRecentes(){

    const [actividades , setActividades] = React.useState<Array<Dados>>()
    useEffect(()=>{
    
              
              document.querySelectorAll(".conteudo-actividades").forEach((item) => {
                scroll(animate(item, { opacity: [0, 1, 1, 0], y: [150, 0] }, { delay: stagger(0.1) }), {
                    target: item,
                    offset: ["start end", "end end", "start start", "end start"],
                    
                })
            })
         
       

      async function buscarPublicacoes (){
        try {
          const dados= await BuscarActividadesActivasPaginaPrincipal()
          setActividades(JSON.parse(dados))
        } catch (error) {
          console.log("nao seu buscar as publicacoes", error)
        }
      
    }

      buscarPublicacoes()
      },[])
 

   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full ">
      <div className="flex flex-col items-center justify-center p-4 rounded-2xl  md:w-[50%] w-full self-center conteudo-actividades">
          <h1 className="md:text-[28px] text-[18px] font-extrabold uppercase font-ibm-plex-serif text-green-2">Actividades Recentes</h1>
            <div className="w-full h-1 bg-green-2" />
        </div>
        <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-4 md:p-12 p-2  flex-col w-full conteudo-actividades'>
         
         {
          actividades?.map((item)=>(
             <div key={JSON.stringify(item?._id)} className="flex flex-col w-full  justify-between items-center bg-black-3 rounded-xl ">
            <div className='relative flex w-full h-[400px] max-sm:h-[200px]'>
              <Image
              src={item.imagem}
              alt='actividades'
              fill
              className='object-cover rounded-t-xl size-full brightness-75'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-2 '>
                 <h1 className='text-white font-bold md:text-[18px] text-[14px]'>{item.titulo}</h1>
                 <span className='text-gray-300 text-[11px] font-bold'>Descrição:</span>
                 <span className='text-[12px] md:text-[14px] font-semibold text-white text-wrap break-words truncate h-[80px] px-2  tracking-tighter'>{item.descricao}</span>
                  <div className='flex w-full '>
                  <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">Saber mais</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>{item.titulo}</DrawerTitle>
                        <DrawerDescription>{item.descricao} </DrawerDescription>
                    </DrawerHeader>
                    <div className="relative flex p-4 pb-0 h-[500px]">
                       <Image
                       src={item.imagem}
                       alt={item.titulo}
                       fill
                       className='roundend-xl bg-cover'
                       />
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                        <Button variant="outline">Sair</Button>
                        </DrawerClose>
                    </DrawerFooter>
                    </div>
                </DrawerContent>
                  </Drawer>
                  </div>
            </div>
           
          </div>
          ))
         }
        
        </div>

          

        </div>
  )
}

export default ActividadesRecentes