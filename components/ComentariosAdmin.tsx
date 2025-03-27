"use client"
import React from 'react'
import Comentario from './Comentario'
import { ApagarCOmentario, PublicarComentario } from '@/lib/actions/comentarioAc.actions'

interface Props{
    comentarios:string
}

type Dados = {
    todos:{
    _id:string, 
    nome:string, 
    dataRegistro:string, 
    descricao:string, 
    ativo:boolean
}[]

}

function ComentariosAdmin({comentarios}:Props) {
    const dados:Dados = JSON.parse(comentarios)
    const accao = async ({id, ativo}:{id:string, ativo:boolean})=>{
        try {
              const acao = ativo ? false : true
            await PublicarComentario({id, acao })
            
        } catch (error) {
            console.log(error)
        }
    }

    const eliminar = async ({id}:{id:string})=>{
        try {
              
            await ApagarCOmentario(id)
            
        } catch (error) {
            console.log(error)
        }
    }
  
  return(
    <div className='grid grid-cols-4 gap-2 p-2'>
    {
     dados?.todos.map((item)=>(
        <div key={item._id} className='flex flex-col border-[1px] border-black-3 rounded-xl p-2 items-center justify-center gap-2'>
           <div className='flex justify-between w-full p-4 '> 
            <span className={`text-[14px] font-semibold p-2 ${item.ativo ? 'bg-green-1' : 'bg-yellow-500'}`}>{item.ativo ? "Ativa" : "Não publicada"}</span>
            <button className='text-[12px] bg-red-600 rounded-xl p-2' onClick={()=>eliminar({id:item._id})} >Eliminar</button>
           </div>
          <Comentario
          nome = {item.nome}
          descricao = {item.descricao}
          data = {item.dataRegistro}
          />
          <button onClick={()=>accao({id:item._id, ativo:item.ativo})} className='bg-green-2 p-2 rounded-xl text-[14px] uppercase font-semibold'> {item.ativo ? 'Desativar' : 'Publicar' }  </button>
        </div>
           
      ))
    } 
   
  </div>
  )
}

export default ComentariosAdmin