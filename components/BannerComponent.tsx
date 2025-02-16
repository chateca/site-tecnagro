"use client"
import React from 'react'
import * as motion from "motion/react-client"
import Image from 'next/image'

function BannerComponent() {
    
  return (
    <div className="relative flex max-h-[100vh] h-[100vh] bg-cover  w-full bg-[url('/assets/img8.jpg')] ">
    <div className="flex flex-col w-full items-center  mt-[100px] max-xl:mt-[200px] max-lg:mt-[100px]  max-sm:mt-[150px] max-sm:p-4 ">
            <motion.div 
            className='relative flex w-full  px-8 items-center justify-center'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            >
            <div  className="absolute xl:mt-[30px] lg:-mt-[30px]  md:mt-[100px] sm:mt-[100px]  mt-[60px] right-8 max-sm:right-0 flex flex-col rounded-2xl bg-white/30  w-[45%] max-sm:w-full items-center justify-center p-4">
                    <div className='flex gap-8 flex-wrap p-1 w-full items-center justify-center'>
                        <div className='flex p-2 rounded-full bg-green-2/30 border-[2px] border-green-3'>
                            <Image
                            src={"/icons/whatsapp.svg"}
                            alt='whatsapp'
                            width={25}
                            height={25}
                            placeholder='empty'
                            />
                        </div> 
                        <div className='flex p-2 rounded-full bg-green-2/30 border-[2px] border-green-3'>
                            <Image
                            src={"/icons/x.svg"}
                            alt='whatsapp'
                            width={25}
                            height={25}
                            placeholder='empty'
                            />
                        </div> 
                        
                    </div>
                 <h1 className="text-white max-xl:text-[18px] text-[28px]  font-extrabold">TecnAgro a solução para o seu agro negocio</h1>
                 <span className="text-center text-[18px] max-xl:text-[12px] text-white font-ibm-plex-serif uppercase">Seja bem vindo a éra moderna do Agro</span>
            </div>
            </motion.div>
            
    </div>
  </div>
  )
}

export default BannerComponent