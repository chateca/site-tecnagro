"use client"
import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'


import { Input } from "./ui/input"
import { useRouter } from "next/navigation"

   


function Navbar() {
 
const router = useRouter()


  return (
    <header id="navBar" className={`fixed top-0 left-0 w-full  bg-green-950  z-50 `}>
           <nav className='container flex items-center justify-between   h-16 sm:h-20'>
            <div className='relative  cursor-pointer  items-center justify-center'>
                <Image
             
                src={"/assets/logo.png"}
                alt='Logo'
                width={120}
                height={120}
                sizes="100px"
                priority
                className="object-contain size-32 left-4"
                onClick={()=>router.push("/")} 
                />
            </div>

            <div id="nav-menu" className="absolute top-0 left-[-100%] min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-full">
            <ul className='flex flex-col items-center gap-8  lg:flex-row'>
                  <li><Link className='nav-link activeLink' href={"/"}>Home</Link></li>
                  <li><Link className='nav-link' href={"/#sobre-nos"}>Sobre-nós</Link></li>
                  <li><Link className='nav-link' href={"/#produtos-servicos"}>Produtos e serviços</Link></li>
                  <li><Link className='nav-link' href={"/#contactos"}>Contactos</Link></li>
                  </ul>
                  
                  </div>
             
             <div className="hidden lg:flex">
                  <Input type="search" placeholder="Pesquisar" />
             </div>

                    <div  className='flex z-50 lg:hidden'>
                    <svg id="hamburger" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>

                  <svg id="closedMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2 cursor-pointer hidden">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                    </div>
                


           </nav>
    </header>
       
  )
}



export default Navbar


