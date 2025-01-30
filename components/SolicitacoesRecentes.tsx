"use client"
import Link from 'next/link'
import React from 'react'


interface Props{
    dados:string
}

function SolicitacoesRecentes({dados}:Props) {
    const arrayItems = JSON.parse(dados)
  return (
    <div className='w-full h-full mt-3'>
    <span className='text-[24px] font-semibold text-gray-500 '>Solicitações de produtos recentes:</span>
      <ul>
      <li className='flex gap-4 bg-green-2 p-2  justify-between'>
            <span className='text-[14px] font-semibold  uppercase'>Nome</span>
            <span>Status</span>
            <span className='text-gray-600 text-[14px]'>Data</span>

          </li>
      </ul>
     <ul className='mt-4 flex flex-col gap-4'>
        {
            arrayItems.map((item:any)=>(
                <Link key={item._id}  href="/">
                <li className='flex gap-4 bg-yellow-300 p-2 rounded-xl justify-between'>
                    <span className='text-[14px] font-semibold  uppercase'>{item.nome}</span>
                    <span>Pendente</span>
                    <span className='text-gray-600 text-[14px]'>Data: {item.dataRegistro}</span>

                </li>
                </Link>
            ))
        }
                
        
    
        

         
     </ul>

  </div>
  )
}

export default SolicitacoesRecentes