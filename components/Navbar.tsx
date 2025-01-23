"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

function Navbar() {
    useEffect(()=>{
       
        document.addEventListener('scroll', ()=>{
            const ative:any =  window.scrollY;
            let nav:any = document.querySelector('.nav')
            if(ative > 20){
              
                nav?.classList.add('bg-green-500')
            }else{
                nav?.classList.remove('bg-green-500')
            }
        })

        
    },[])
  return (
    <header className='fixed top-0 left-0 flex w-full h-[4rem] max-xl:h-[4rem] bg-green-500/40 p-2 z-30 items-center justify-center nav'>
           <nav className='flex justify-between p-8 max-md:p-4 size-full items-center'>
            <div className=''>
                <Image
                src={"/assets/logo.png"}
                alt='Logo'
                width={200}
                height={200}
                className=''
                />
            </div>
                  <ul className='flex gap-8 max-md:hidden'>
                  <li><Link className='text_link' href={"/"}>Home</Link></li>
                  <li><Link className='text_link' href={"/"}>Sobre-nós</Link></li>
                  <li><Link className='text_link' href={"/"}>Produtos e serviços</Link></li>
                  <li><Link className='text_link' href={"/"}>Parceiros</Link></li>
                  <li><Link className='text_link' href={"/login"}>Contactos</Link></li>
                  </ul>
           </nav>
    </header>
       
  )
}

export default Navbar