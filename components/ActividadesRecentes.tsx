"use client"
import * as React from 'react'
import Image from 'next/image'
import { useEffect } from "react";
import { BuscarActividadesActivasPaginaPrincipal } from '@/lib/actions/actividades.actions'
import { useRouter } from 'next/navigation';
  type Dados = {
     _id:string, 
     titulo:string, 
     dataRegistro:string, 
     imagem:string, 
     descricao:string
  }
   


function ActividadesRecentes(){
const router  = useRouter() 
    const [actividades , setActividades] = React.useState<Array<Dados>>()
    useEffect(()=>{
      async function buscarPublicacoes (){
        try {
          const dados= await BuscarActividadesActivasPaginaPrincipal()
          setActividades(JSON.parse(dados))
        } catch (error) {
          console.log("nao foi possivel buscar as publicacoes", error)
        }
      
    }

      buscarPublicacoes()
      },[])
 
    
   
  return (
    <>
    <div suppressHydrationWarning  className='about__item__title flex flex-col z-30 relative  gap-3  mb-4 md:mb-8 px-10 '>
          <h2 className='titulo text-center '>Actividades Recentes</h2> 

        </div>
      
    <div className="container w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-8">
      {
        actividades?.map((item)=>(
          <div suppressHydrationWarning key={item._id}   className='atividade__item group relative rounded-2xl items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black-3 transition-shadow'>
          <div className='relative h-96 w-full'>
             <Image
             src={item.imagem}
             alt={"item image"}
             fill
             sizes='384px'
             className='object-cover rounded-2xl h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'
             />
          </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000] group-hover:from-[#000]/30 group-hover:via-[#000]/60 group-hover:to-[#000]/70'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                      <h1 className='lg:text-xl md:text-lg text-sm font-bold text-green-2 line-clamp-2'>
                        {item.titulo}
                      </h1>   
                      <p className='text-lg italic text-white mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3'>
                        {item.descricao}
                      </p>
                      <button onClick={()=>router.push(`/galeriaNoTerreno/${item._id}`)} className='rounded-full shadow shadow-black-3/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                        Ver Mais
                      </button>
              </div>
        </div>
        ))
      }
        

        
        </div>
        </>
  )
}

export default ActividadesRecentes