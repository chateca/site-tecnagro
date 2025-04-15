"use client"
import NavBar from "@/components/MenuBar";
import Rodape from "@/components/Rodape";
import { useEffect } from "react";
import AOS from '@/constants/AOS.js'
import 'aos/dist/aos.css';


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

        useEffect(()=>{
          try {
            
          AOS.init({
            duration: 800, // Duração da animação em ms
            easing: 'ease-in-out', // Curva de animação
            once: false, // Anima apenas uma vez
            offset: 100, // Distância do topo para ativar (px)
          });
        } catch (error) {
          console.log('algo deu errado ao estilizar com o aos')
        }
      
        },[]);
     

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
  