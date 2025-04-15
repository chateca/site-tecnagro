"use client"
import Image from 'next/image'
import Link from 'next/link'
import {links} from '@/constants/index'
import { logout } from '@/lib/actions/atuth.actions'
import sair from './../public/assets/img/sair.png'

function LeftSideBar() {
  return (
    <>
    <div className='flex flex-col w-[300px] bg-green-1 justify-between max-sm:hidden'>
        
            <Link href={'/'}>
            <div className='p-4 bg-black-3'>
                <Image
                src={'/assets/img/logo.png'}
                alt='logo'
                sizes='100px'
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
                    <li  className='text-[18px] text-green-3 text-center font-semibold uppercase'>
                      <button onClick={logout} className='px-8 py-4 bg-white/60 '>Sair</button>
                    </li>
                  
              <Link  href={'/'} className='flex bg-white/60 p-2 items-center justify-center' >
                    <li  className='text-[18px] text-green-3 text-center font-semibold uppercase'>Config Site </li>
                    </Link>

              </ul>
            </div>
    </div>
      <div className='md:hidden flex backdrop-blur-3xl bg-black-3/40 rounded-t-2xl h-16 w-full absolute bottom-0'>
      <ul className='flex  p-4 gap-8 items-center  justify-between w-full px-3'>
              {
                links.map((item)=>(
                  
                  <Link key={item.nome} href={item.link} className='p-2 rounded-md' >
                    <li  className='relative flex flex-col items-center justify-center '>
                      <Image
                      src={item.icon}
                      alt={item.nome}
                      sizes='40px'
                      width={40}
                      height={40}
                      className='object-cover rounded-full'
                      />
                      <span className='text-[8px] line-clamp-1'>{item.nome}</span>
                    </li>
                    </Link>
               
                ))
              }
              <li  className=' flex flex-col items-center justify-center'>
                      <button onClick={logout} className=''>
                      <Image
                      src={sair}
                      alt={"logoutIcon"}
                      sizes='40px'
                      width={40}
                      height={40}
                      className='object-cover rounded-full'
                      />
                      
                      </button>
                      <span className='text-[8px] line-clamp-1'>Sair</span>
                    </li>
            </ul>
      </div>
    </>
  )
}

export default LeftSideBar