
import ComentariosAdmin from '@/components/ComentariosAdmin'
import { BuscarComentariosTodos } from '@/lib/actions/comentarioAc.actions'
import React from 'react'


const getDados = async ()=>{
  try {
    const todos= await BuscarComentariosTodos()
 
    return { todos:todos }
  } catch (error) {
    console.log("não deu buscar os dados", error)
  }
}



async function page() {
  const dados = await getDados()
  return (
    <section className='flex flex-col w-full p-4'>
      <h1 className='text-[28px] font-extrabold  text-green-2'>Comentarios</h1>
     
   <ComentariosAdmin 
   comentarios = {JSON.stringify(dados)}
   />
    </section>
  )
}

export default page