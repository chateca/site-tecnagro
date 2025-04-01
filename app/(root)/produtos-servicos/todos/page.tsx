
import ProdutoServicoItem from '@/components/ProdutoServicoItem'
import { itemsProdutosServicos } from '@/constants'
import React from 'react'

function page() {
  return (
    <div className='bg-white w-full flex flex-col pt-28 pb-10'>
      <div className='container'>
      <div className='w-full flex mb-4'>
         <h1 className='titulo'>Produtos e Serviços</h1>
      </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4'>
          {
            itemsProdutosServicos.map((item)=>(
              <ProdutoServicoItem
              key={item.id}
              imagem={item.image.src}
              titulo={item.titulo}
              descricao={item.desc}
              id={item.id}
              />
            ))
          }
       
        
        </div>
      </div>

      <div className='items-center justify-center flex space-x-4 mt-8'>
      <button title='proximo' className='flex items-center justify-center' id='proximoItem'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
        </svg>
         </button>

         <span className='text-2xl text-green-2 font-bold'>1</span>
         <button title='anterior' className='flex items-center justify-center' id='anteriorItem'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
          </svg>

         </button>
        
      </div>

    </div>
  )
}

export default page