"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props{
    imagem:string,
    titulo:string, 
    descricao:string, 
    id:number 

}

function ProdutoServicoItem({imagem, titulo, id}:Props) {
    const router=useRouter()
  return (
    <div   suppressHydrationWarning={true} className='atividade__item shadow-green-2 shadow-lg group relative rounded-2xl items-center justify-center overflow-hidden cursor-pointer pb-4'>
    <div className='relative h-96 w-full'>
       <Image
       src={`/assets/img/${imagem}`}
       alt={"item image"}
       fill
       sizes='384px'
       className='object-cover rounded-2xl h-full w-full '
       />
    </div>

        <div className='flex flex-col items-center justify-center px-9 text-center'>
                <h1 className='text-2xl font-bold text-green-1/90 font-mono'>
                  {titulo}
                </h1>   
               
                <button onClick={()=>router.push(`/produtos-servicos/${id}`)}  className='btn'>
                <span className='text-sm text-white font-bold'> Ver Mais</span> 
                </button>
        </div>
  </div>
  )
}

export default ProdutoServicoItem