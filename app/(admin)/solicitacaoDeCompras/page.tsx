import Solicitacoes from '@/components/Solicitacoes'
import { BuscarPedidosAceites, BuscarPedidosNaoAtivos, BuscarPedidosNegados, BuscarPedidosPendente, BuscarPedidosTodos } from '@/lib/actions/pedidos.actions'
import React from 'react'

const getDados = async ()=>{
  try {
    const pedidosRecentes = await BuscarPedidosTodos()
    const naoAtivos = await BuscarPedidosNaoAtivos()
    const negados = await BuscarPedidosNegados()
    const aceites = await BuscarPedidosAceites()
    const pendentes = await BuscarPedidosPendente() 
    return {
      pedidosRecentes:pedidosRecentes, 
      naoAtivos:naoAtivos, 
      negados:negados, 
      aceites:aceites, 
      pendentes:pendentes 
    }
  } catch (error) {
    console.log("não deu buscar os dados", error)
  }
}


async function page() {
  const dados = await getDados()
  return (
    <section className='flex flex-col w-full p-4'>
      <h1 className='text-[28px] max-sm:text-lg font-extrabold  text-green-2'>Solicitações de compra de produtos</h1>
      <Solicitacoes
      items = {JSON.stringify(dados)}
      />
       
    </section>
  )
}

export default page