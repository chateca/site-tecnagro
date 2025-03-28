"use client"

import Image from 'next/image'
import Link from 'next/link'

import React  from 'react'

type Atividades = {
imagem:string, 
_id:string, 
descricao:string, 
dataRegistro:string, 
titulo:string
}[]



function Fotos({page, perPage, atividades, total}:{page:number, perPage:number, atividades:string, total:number}) {

  const totalAtividades:Atividades = JSON.parse(atividades)

  const totalPage = Math.ceil((total / Number(perPage)))
  const prevPage = Number(page ) - 1 > 0 ? Number(page) - 1 : 1
const nextPage = Number(page)  + 1  

const pageNumbers = []
const offSetNumber = 3;
for(let i = page - offSetNumber ; i <= page + offSetNumber; i++ ){
  if(i >= 1 && i <= totalPage){
    pageNumbers.push(i)
  }
}

  return (
    <>
       <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 w-full p-4 gap-4'>
          
              {
                  totalAtividades.map((item)=>(
                  <div key={item?._id}  suppressHydrationWarning={true} className='atividade__item group relative rounded-2xl items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black-3 transition-shadow'>
                  <div className='relative h-96 w-full'>
                     <Image
                     src={`${item.imagem}`}
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
                              <Link href={`/galeriaNoTerreno/${item._id}`} className='rounded-full shadow shadow-black-3/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                                Ver Mais
                              </Link>
                      </div>
                </div>
                ))
              }
             </div>


          <div className='flex justify-center items-center mt-4 mb-3'>
            <div className='flex border gap-4 rounded-lg border-green-3 p-4 '>
             {
              Number(page) === 1 ?
              <div className='opacity-60  text-sm font-mono font-bold uppercase' aria-disabled="true" >Anterior</div>
            :
            <Link className='text-sm text-green-2 font-mono font-bold uppercase' href={`?page=${prevPage}`} aria-label='Previous Page'>
            Anterior
            </Link> 
            }
            {
              pageNumbers.map((item)=>(
              <Link className='text-sm hidden md:flex text-green-2 font-mono font-bold uppercase' key={item} href={`?page=${item}`}>{item}</Link>
              ))
            }

              {
              Number(page) === totalPage ?
              <div className='opacity-60 text-sm  font-mono font-bold uppercase' aria-disabled="true" >Proxima</div>
            :
            <Link className='text-sm text-green-2 font-mono font-bold uppercase' href={`?page=${nextPage}`} aria-label='Next Page'>
            Proximo
            </Link> 
            }
            </div>
             </div>
             </>
      
  )
}

export default Fotos