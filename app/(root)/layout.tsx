'use client'
import NavBar from "@/components/MenuBar";
import Rodape from "@/components/Rodape";
import AOS from 'aos'
import {useEffect} from 'react'
import 'aos/dist/aos.css';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    useEffect(()=>{
       
      AOS.init({
          duration: 800, // Duração da animação em ms
          easing: 'ease-in-out', // Curva de animação
          once: false, // Anima apenas uma vez
          offset: 100, // Distância do topo para ativar (px)
        });

},[])
    

    return (
      <>
      
      <NavBar/>
        <main>
        <section className='bg-green-950'>
            {children}
        </section>
       </main>
        <Rodape/>
      </>
     
    );
  }
  