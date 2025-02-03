import Fotos from '@/components/galeria/Fotos'
import Videos from '@/components/galeria/Videos'
import React from 'react'

function page() {
  return (
    <section  className="flex flex-col w-full bg-[url('/assets/fundoGeral.jpg')]   bg-scroll">
     <div className='flex  w-full items-center h-[30vh] p-4'>
        <h1 className='text-white font-extrabold text-[38px] font-ibm-plex-serif'>Galeria de midia TecnAgro</h1>
 
     </div>
     
     <Videos/>

     <Fotos/>
    </section>
  )
}

export default page