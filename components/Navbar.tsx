"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

function Navbar() {
    const [colorBar , setColorBar] = useState('bg-green-500/40')
    useEffect(()=>{
        
        document.addEventListener('scroll', ()=>{
            const ative =  window.scrollY;
            const  nav = document.querySelector('.nav')
            if(ative > 100){
                setColorBar("")
                nav?.classList.remove('bg-green-500/40')
                nav?.classList.add('bg-green-500')
            }else{
                nav?.classList.remove('bg-green-500')
                nav?.classList.add('bg-green-500/40')
            }
        })
    },[])
  return (
    <header className={`fixed top-0 left-0 flex w-full h-[4rem] max-xl:h-[4rem] p-2 z-30 items-center justify-center nav ${colorBar}`}>
           <nav className='flex justify-between p-8 max-md:p-4 size-full items-center'>
            <div className=''>
                <Image
                src={"/assets/logo.png"}
                alt='Logo'
                width={200}
                height={200}
                placeholder='empty'
                />
            </div>
                  <ul className='flex gap-8 max-md:hidden'>
                  <li><Link className='text_link' href={"/"}>Home</Link></li>
                  <li><Link className='text_link' href={"/#sobre-nos"}>Sobre-nós</Link></li>
                  <li><Link className='text_link' href={"/#produtos-servicos"}>Produtos e serviços</Link></li>
                  <li><Link className='text_link' href={"/#parceiros"}>Parceiros</Link></li>
                  <li><Link className='text_link' href={"/#contactos"}>Contactos</Link></li>
                  </ul>


                    <div className='flex  md:hidden'>
                   <Sheet >
                <SheetTrigger>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 bg-white rounded-lg p-2 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                </SheetTrigger>
                <SheetContent side={'left'}>
                    <SheetHeader>
                    <SheetTitle className='text-[28px] mb-4 text-green-2'>TecnAgro</SheetTitle>
                    
                    <ul className='flex flex-col gap-8 '>
                  <li><Link className='text-green-1 text-[14px] font-ibm-plex-serif uppercase bg-black-3/30 p-2 rounded-lg' href={"/"}>Home</Link></li>
                  <li><Link className='text-green-1 text-[14px] font-ibm-plex-serif uppercase bg-black-3/30 p-2 rounded-lg' href={"/#sobre-nos"}>Sobre-nós</Link></li>
                  <li><Link className='text-green-1 text-[14px] font-ibm-plex-serif uppercase bg-black-3/30 p-2 rounded-lg' href={"/#produtos-servicos"}>Produtos e serviços</Link></li>
                  <li><Link className='text-green-1 text-[14px] font-ibm-plex-serif uppercase bg-black-3/30 p-2 rounded-lg' href={"/#parceiros"}>Parceiros</Link></li>
                  <li><Link className='text-green-1 text-[14px] font-ibm-plex-serif uppercase bg-black-3/30 p-2 rounded-lg' href={"/#contactos"}>Contactos</Link></li>
                  </ul>
                    
                    </SheetHeader>
                </SheetContent>
                </Sheet>
                    </div>
                


           </nav>
    </header>
       
  )
}

export default Navbar