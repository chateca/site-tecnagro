import SolicitacoesRecentes from '@/components/SolicitacoesRecentes'
import { BuscarPedidosTodos } from '@/lib/actions/pedidos.actions'
import React from 'react'

const getDados = async ()=>{
  try {
    const pedidosRecentes = await BuscarPedidosTodos()
    return {pedidosRecentes:pedidosRecentes}
  } catch (error) {
    console.log("não deu buscar os dados", error)
  }
}


async function page() {
  const dados = await getDados()
  return (
    <section className='flex flex-col w-full p-4'>
      <h1 className='text-[28px] font-extrabold font-ibm-plex-serif text-green-2'>Solicitações de compra de produtos</h1>
      <div className='w-full p-2 flex justify-between gap-2 mt-4'>
            <button className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-black-3/30 p-4 font-semibold justify-center uppercase'>Todas</button>
            <button className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-green-1/60 p-4 font-semibold justify-center uppercase'>Resolvidas</button>
            <button className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-yellow-400/30 p-4 font-semibold justify-center uppercase'>Pendentes</button>
            <button className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-red-500/30 p-4 font-semibold justify-center uppercase'>Rejeitadas</button>
        </div>
        <SolicitacoesRecentes
      dados = {JSON.stringify(dados?.pedidosRecentes)}
      />

    </section>
  )
}

export default page