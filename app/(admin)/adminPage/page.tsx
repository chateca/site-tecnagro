import SolicitacoesRecentes from '@/components/SolicitacoesRecentes'
import { TotalActividades } from '@/lib/actions/actividades.actions'
import { BuscarPedidos, TotalPedidos } from '@/lib/actions/pedidos.actions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'


const getDados = async ()=>{
  try {
    const pedidosRecentes = await BuscarPedidos()
    const totalPedidos  = await TotalPedidos()
    const totalActividade = await TotalActividades()
    return {
      pedidosRecentes:pedidosRecentes, 
      totalPedidos:totalPedidos,
      totalActividades:totalActividade
    }
  } catch (error) {
    console.log("não deu buscar os dados", error)
  }
}


async function page() {
  const session = (await cookies()).get('session')?.value
  if (!session) return redirect('/login')
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
          <span className='text-[28px] font-bold text-white'>{dados?.totalPedidos.length}</span>
        </div>
       
        <div className='flex w-full flex-col justify-between p-4 items-center bg-black-3 rounded-2xl'> 
          <span className='text-[18px] font-bold text-white'>Actividades</span>
          <span className='text-[28px] font-bold text-white'>{dados?.totalActividades.length}</span>
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