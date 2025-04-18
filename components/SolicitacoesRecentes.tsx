"use client"

import { useState } from 'react'
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
import { AccaoDoPedido, DescartarPedido } from '@/lib/actions/pedidos.actions'



interface Props{
    dados:string
}

type Optios = [{
    _id:string, 
    nome:string, 
    dataRegistro:string, 
    email:string, 
    telefone:string,
    descricao:string,
    status:string,
    endereco:string
}]
type Details =  {
    id:string, 
    nome:string, 
    dataRegistro:string, 
    email:string, 
    telefone:string,
    descricao:string,
    status:string, 
    endereco:string,
}

function SolicitacoesRecentes({dados}:Props) {
    const arrayItems:Optios = JSON.parse(dados)||[]
    const [enviando, setEnviando] = useState(false)

    const accaoPedido = async ({status, id}:{status:string, id:string })=>{
        setEnviando(true)
          try {
            const dados:{id:string, status:string} = {
                id:id, 
                status:status
            }
            await AccaoDoPedido(dados)
            setEnviando(false)
          } catch (error) {
            console.log(error)
          }
    }

    const descartarPedido = async (id:string)=>{
        try {
            await DescartarPedido(id)
        } catch (error) {
            console.log(error)
        }

    }

    const detalhesDoPedido = ({id,nome, email, dataRegistro, telefone, descricao, status, endereco}:Details)=>{
        return(
            <DrawerContent className='flex flex-col w-full bg-white text-black-3 ' >
            <div className="flex flex-col w-full ">
            <DrawerHeader className='flex flex-col w-full items-center '>
                <DrawerTitle className='text-[28px]'>Solicitação de produto</DrawerTitle>
                <DrawerDescription className='text-[18px]'>Dados sobre o pedido de produtos</DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col  w-full p-4 pb-0 overflow-y-scroll">
               <div className={`flex flex-col  w-full gap-4 p-2 rounded-xl ${status ==="Aceite" ? 'bg-green-2/30' : status === "Negado" ? 'bg-red-500/30' : 'bg-black-3/80' }`}>
               <div className='flex flex-col w-full px-4 '>
                <span className='text-end text-[14px] uppercase font-bold'>{status}</span>
               <span className='lg:text-[18px] md:text-base text-sm text-center font-bold  uppercase'>Pedido feito por: <span className='text-white lg:text-[18px] md:text-base text-sm'>{nome}</span></span>
               <span className='lg:text-[14px]  md:text-base text-sm text-center  font-semibold text-gray-400'>Data em que o pedido foi feito: <span className='lg:text-[14px] md:text-base text-sm'>{ new Date(dataRegistro).toLocaleDateString()}</span> </span>
               </div>
              
              <div className='flex flex-row flex-wrap  w-full items-center justify-center space-x-4 '>
                     
              <div className='flex flex-col items-center justify-center'>
               <span className='lg:text-[18px] md:text-base text-sm font-bold  uppercase'>Telefone:</span>
               <span className='lg:text-[18px] md:text-base text-sm  font-semibold text-gray-400'>{telefone}</span>
               </div>

               <div className='flex flex-col items-center justify-center'>
               <span className='lg:text-[18px] md:text-base text-sm font-bold  uppercase'>Email:</span>
               <span className='lg:text-[18px] md:text-base text-sm  font-semibold text-gray-400'> {email}</span>
               </div>

               <div className='flex flex-col items-center justify-center'>
               <span className='lg:text-[18px] md:text-base text-sm font-bold  uppercase'>Endereço:</span>
               <span className='lg:text-[18px] md:text-base text-sm  font-semibold text-gray-400'>{endereco}</span>
               </div>
              </div>
               </div>
               <div className='w-full h-[200px] p-4 border-[1px] mt-3 rounded-xl'>
                <h2 className='text-center lg:text-[18px] md:text-base text-sm text-green-3 font-bold uppercase'>Detalhes do Pedido</h2>
                    <span className='text-[14px] text-black-3 font-medium '>
                       {descricao}
                    </span>

                </div>
            <DrawerFooter className='w-full justify-end'>
                <Button  onClick={()=>accaoPedido({status:"Aceite", id:id})}  className={`bg-green-2 text-black-3 text-[14px] font-bold uppercase  ${enviando ? 'disabled:opacity-75':""}`}>{enviando ? 'Enviando pedido':'Aceitar Pedido'}</Button>
                <Button  onClick={()=>accaoPedido({status:"Negado", id:id})}   className={`bg-red-500 text-black-3 text-[14px] font-bold uppercase  ${enviando ? 'disabled:opacity-75':""}`}>{enviando ? 'Enviando pedido':'Negar Pedido'}</Button>
                <Button  onClick={()=>descartarPedido(id)}   className={`bg-gray-500 text-black-3 text-[14px] font-bold uppercase  ${enviando ? 'disabled:opacity-75':""}`}>{enviando ? 'Enviando pedido':'Descartar Pedido'}</Button>
                <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
                
            </div>
           
            </div>
        </DrawerContent>
        )
      }
  
    
  return (
    <div className='w-full h-full mt-3'>
    <h1 className='text-[18px] font-semibold text-gray-500 '>Solicitações de produtos recentes:</h1>
      <ul>
      <li className='flex gap-4 bg-green-2 p-2  justify-between'>
            <span className='text-[14px] font-semibold  uppercase'>Nome</span>
            <span>Status</span>
            <span className='text-gray-600 text-[14px]'>Data</span>
            <span>Acção</span>
          </li>
      </ul>
     <ul className='mt-4 flex flex-col gap-4'>
        {
        arrayItems.length <= 0 &&
        <span className='text-center text-[24px] font-bold  uppercase text-gray-600'>
           De Momento Não existe Pedidos Novos!
        </span>
        }
        {
            arrayItems?.map((item)=>(
                
                <li key={item._id} className={`flex gap-4 ${item.status ==="Aceite" ? 'bg-green-2/30' : item.status === "Negado" ? 'bg-red-500/30' : 'bg-yellow-400/30' } p-2 rounded-xl justify-between`}>
                    <span className='text-[14px] font-semibold  uppercase'>{item.nome}</span>
                    <span>{item.status}</span>
                    <span className='text-gray-600 text-[14px]'>{ new Date(item?.dataRegistro).toLocaleDateString()}</span>
                    
                      <Drawer>
                                    <DrawerTrigger asChild>
                                        <Button className='text-sm'  variant="outline">Detalhes</Button>
                                    </DrawerTrigger>
                                     {
                                      detalhesDoPedido({
                                        id :item._id,
                                        nome:item.nome, 
                                        email:item.email, 
                                        telefone:item.telefone, 
                                        dataRegistro:item.dataRegistro, 
                                        descricao:item.descricao, 
                                        status:item?.status, 
                                        endereco:item?.endereco
                                      }
                                      )
                                     }
                                </Drawer>

                </li>
             
            ))
        }
         
     </ul>

  </div>
  )
}

export default SolicitacoesRecentes