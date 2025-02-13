import Image from 'next/image'
import React from 'react'

function Comentario({nome, descricao, data}:{nome:string, descricao:string, data:string}) {
  return (
    <div className='flex flex-col bg-gradient-to-t from-white to-green-2  w-full rounded-xl p-2 shadow-2xl shadow-black-3   items-center'>
        <div className='flex relative items-center  rounded-full w-[100px] h-[100px] border-gray-400 border-[5px] p-4'>
            <Image
            src="/assets/user.jpg"
            alt="user"
           fill
           className=' object-cover rounded-full'
            />  
        </div>  
        <h3 className='text-[14px] text-green-1 uppercase font-ibm-plex-serif font-bold'>{nome}</h3>
         <div className='flex flex-col gap-2 p-1 w-full'>
            <h4 className=' text-gray-400 text-[12px] text-start '>Comentarios</h4>
                
                <span className='text-gray-600 text-[14px] text-wrap '>
                {descricao}
                </span>
         </div>

         <div className='flex items-center justify-center md:gap-4 gap-2 pb-4 w-full'>
         <Image
            src="/assets/estrela.jpg"
            alt="user"
            width={24}
            height={24}
           className=' object-cover'
            /> 

            <Image
            src="/assets/estrela.jpg"
            alt="user"
            width={24}
            height={24}
           className=' object-cover'
            /> 

           <Image
            src="/assets/estrela.jpg"
            alt="user"
            width={24}
            height={24}
           className=' object-cover'
            /> 

            <Image
            src="/assets/estrela.jpg"
            alt="user"
            width={24}
            height={24}
           className=' object-cover'
            /> 

         </div>
            <span className='text-gray-400 text-[14px] '>Data: <span>{data}</span></span>
    </div>
  )
}

export default Comentario