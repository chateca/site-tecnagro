"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {links} from '@/constants/index'

function LeftSideBar() {
  return (
    <div className='flex flex-col w-[300px] bg-green-1 justify-between max-sm:hidden'>
        
            <Link href={'/'}>
            <div className='p-4 bg-black-3'>
                <Image
                src={'/assets/logo.png'}
                alt='logo'
                width={100}
                height={100}
                />
            </div>
            </Link>
      
           <div className='w-full'>
            <ul className='flex flex-col p-4 gap-8'>
              {
                links.map((item)=>(
                  
                  <Link key={item.nome} href={item.link} className='flex bg-white/60 p-2 rounded-md' >
                    <li  className='text-[18px] text-green-3 font-semibold uppercase'>  {item.nome}</li>
                    </Link>
               
                ))
              }
            </ul>
           </div>
           <div className='flex w-full  bottom-4'>
              <ul className='flex flex-col w-full gap-2 '>
              <Link  href={'/'} className='flex bg-white/60 p-2 items-center justify-center' >
                    <li  className='text-[18px] text-green-3 text-center font-semibold uppercase'>Sair</li>
                    </Link>
              <Link  href={'/'} className='flex bg-white/60 p-2 items-center justify-center' >
                    <li  className='text-[18px] text-green-3 text-center font-semibold uppercase'>Config Site </li>
                    </Link>

              </ul>
            </div>
    </div>
  )
}

export default LeftSideBar