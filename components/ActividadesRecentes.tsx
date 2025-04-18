"use client"
import { BuscarActividadesActivasPaginaPrincipal } from '@/lib/actions/actividades.actions';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import folha1 from './../public/assets/img/folha1.png'
import folha2 from './../public/assets/img/folha2.png'


type Atividade  = {
  imagem:string, 
  _id:string, 
  descricao:string, 
  titulo:string
}[]

function ActividadesRecentes(){
const router  = useRouter()
  const [isClient, setIsClient] = useState(false)     
  const [actividades, setActividades] = useState<Atividade>([])
  const [isLoading, setIsLoading] = useState(true)
useEffect(()=>{

    const buscar = async ()=>{
      try {
        const dados = await BuscarActividadesActivasPaginaPrincipal()
        setActividades(JSON.parse(dados))
      } catch (error) {
        console.log('erro ao buscar actividades', error)
      }
   }
     buscar()
     setIsClient(true)
     
},[])
const itens  = [1,2,3,4]
  return (
    <div className='relative overflow-hidden'>
    <div data-aos="fade-down" className='flex flex-col z-30 relative  gap-3  mb-4 md:mb-8 px-10'>
          <h2 className='titulo text-center '>Actividades Recentes</h2> 

        </div>
      
    <div className="container w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-8">
           
      
              <Image
              src={folha2}
              alt='folha'
              width={200}
              height={200}
              sizes='100px'
              className='absolute bottom-0 -right-20 animate-mediaAnimation'
              loading='lazy'
              blurDataURL={'folha2'}
              placeholder='blur'
                         
              />
              <Image
              src={folha1}
              alt='folha'
              width={200}
              height={200}
              sizes='100px'
              className='absolute  -top-14 left-14 animate-mediaAnimation'
              loading='lazy'
              blurDataURL={'folha1'}
              placeholder='blur'
          
              />
      {
        isClient ?
        actividades?.map((item)=>(
          <div data-aos="fade-up" key={item._id} className='group relative rounded-2xl items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black-3 transition-shadow'>
          <div className='relative h-72 w-full'>
          {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-1"></div>
        </div>
      )}
             <Image
              onLoad={()=>setIsLoading(false)}
             src={item.imagem}
             alt={"item image"}
             fill
             sizes='384px'
             className='object-cover rounded-2xl h-full w-full group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'
             loading='lazy'
             blurDataURL={'item.image'}
             placeholder='blur'
            />
          </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000] group-hover:from-[#000]/30 group-hover:via-[#000]/60 group-hover:to-[#000]/70'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                      <h1 className='lg:text-xl md:text-lg text-sm font-bold text-green-2 line-clamp-2'>
                        {item.titulo}
                      </h1>   
                      <p className='text-lg italic text-white mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3'>
                        {item.descricao}
                      </p>
                      <button onClick={()=>router.push(`/galeriaNoTerreno/${item._id}`)} className='rounded-full shadow shadow-black-3/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                        Ver Mais
                      </button>
              </div>
        </div>
        ))
        :
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-4">
                    {itens.map((item:number, index:any) => (
                      <div key={index} className="bg-gray-200 rounded-2xl w-full h-44 animate-pulse"/>
                    ))}
                  </div>
      }
        

        
        </div>
        </div>
  )
}

export default ActividadesRecentes