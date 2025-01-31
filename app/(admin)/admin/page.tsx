
import SolicitacoesRecentes from '@/components/SolicitacoesRecentes'
import { BuscarPedidos } from '@/lib/actions/pedidos.actions'
import React from 'react'

const getDados = async ()=>{
  try {
    const pedidosRecentes = await BuscarPedidos()
    return {pedidosRecentes:pedidosRecentes}
  } catch (error) {
    console.log("não deu buscar os dados", error)
  }
}

async function page() {
  const dados = await getDados()
  
  return (
    <section className='p-4'>
    <span className=' text-[28px] font-bold text-green-2'>
         TecnAgro Admin
    </span>

    <div className='border-[1px] border-black-3 rounded-2xl p-4'>
       <span className='text-[24px] font-semibold text-gray-400'>Dados estatisticos</span>

       <div className='grid grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 p-2 mt-4 gap-4'>
        <div className='flex w-full flex-col justify-between p-4 items-center bg-black-3 rounded-2xl'> 
          <span className='text-[18px] font-bold text-white'>Solicitações de Produtos</span>
          <span className='text-[28px] font-bold text-white'>184</span>
        </div>
       
        <div className='flex w-full flex-col justify-between p-4 items-center bg-black-3 rounded-2xl'> 
          <span className='text-[18px] font-bold text-white'>Actividades</span>
          <span className='text-[28px] font-bold text-white'>18</span>
        </div>
       </div>
    </div>
      <SolicitacoesRecentes
      dados = {JSON.stringify(dados?.pedidosRecentes)}
      />
    </section>
  )
}

export default page