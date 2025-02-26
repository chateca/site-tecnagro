import FormPublicacao from '@/components/FormPublicacao'
import PublicacoesAdmin from '@/components/PublicacoesAdmin'
import { BuscarActividadesActivas, BuscarActividadesNaoActivas, BuscarActividadeTodas } from '@/lib/actions/actividades.actions'
import React from 'react'
const getActividade = async ()=>{

  try {
      const todas =  await BuscarActividadeTodas()
      const activas = await BuscarActividadesActivas()
      const naoActivas = await BuscarActividadesNaoActivas()
      return{
        todas:todas, 
        activas:JSON.parse(activas), 
        naoActivas:naoActivas
      }
  } catch (error) {
    console.log("nao foi possivel buscar actividade", error)
  }
}
async function page() {
  const actividade = await  getActividade()
  return (
    <section className='flex flex-col w-full p-4 max-sm:pb-10'>
      <h1 className='text-center text-[28px] mt-3 font-extrabold '>Publicações</h1>
      <div className='w-full flex p-4 gap-4 '>
       
            <FormPublicacao/>
      
      </div>

       <PublicacoesAdmin
       dados = {JSON.stringify(actividade)}
       />
     

    </section>
  )
}

export default page