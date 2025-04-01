
import ActividadesRecentes from '@/components/ActividadesRecentes'
import { BuscarAtividadeUser } from '@/lib/actions/actividades.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner4 from './../../../../public/assets/img/banner4.jpg'


type Atividade  = {
  imagem:string, 
  _id:string, 
  descricao:string, 
  titulo:string
}



const getActivite = async (id:string)=>{
            try {
             return  await BuscarAtividadeUser(id) 
            } catch (error) {
              console.log("nao foi possivel buscar o produto", error)
            }
}

async function page({params}:{params:{id:string}}) {
  const {id} = await params
  const getAtividade:Atividade = await  getActivite(id)
  
console.log(getActivite)

  return (
    <div className='relative pt-14 bg-white'>
         <div className='relative w-full h-80 item'>
                            <Image
                            src={banner4}
                            alt="banner"
                            fill
                            sizes='auto'
                            className='object-cover w-[100%] h-[100%] brightness-50 '
                            />
            </div>
      <div className='container pt-14 pb-20'>
      <h1 className='titulo'>{getAtividade?.titulo}</h1>

      <div className='flex justify-between gap-8 p-4'>
        <div className='relative w-full h-96'>
             <Image
             src={`${getAtividade?.imagem}`}
             alt={`${getAtividade?.titulo}`}
             fill 
             sizes='100%'
             className='object-cover rounded-xl'            
             />
        </div>

        <div className='flex flex-col items-center space-y-14'>
             <span className=' lg:text-2xl md:text-xl text-sm text-gray-500 font-mono'>{getAtividade?.descricao}</span>
             <div className='flex gap-8 justify-between'>
             <Link href={"/solicitar-produto"}  className='btn btn_outline'>
              <span className='text-green-3 flex'>
                Solicitar serviço
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
              </svg>

              </span>
             </Link>
             </div>

        </div>

      </div>
      </div>

      <div className='container mb-10'>
       <ActividadesRecentes/>
      </div>
        
    </div>
  )
}

export default page