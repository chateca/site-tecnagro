import Image from 'next/image'
import React from 'react'

function Comentario() {
  return (
    <div className='flex flex-col bg-white  h-[300px] rounded-xl p-2  items-center'>
        <div className='flex items-center  rounded-full w-[100px] h-[100px] border-gray-400 border-[5px] p-4'>
            <Image
            src="/assets/user.jpg"
            alt="user"
            width={100}
            height={100}
           className=' object-cover'
            />  
        </div>  
        <h3 className='text-[14px] text-green-1 uppercase font-ibm-plex-serif font-bold'>Nome do Dono</h3>
         <div className='flex flex-col gap-2 p-1 w-full'>
            <h4 className=' text-gray-400 text-[12px] text-start '>Comentarios</h4>
                
                <span className='text-gray-600 text-[14px] text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut rerum recusandae.
                </span>
         </div>

         <div className='flex items-start gap-4 pb-4'>
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
            <span className='text-gray-400 text-[14px] '>Data: <span>29/1/2025</span></span>
    </div>
  )
}

export default Comentario