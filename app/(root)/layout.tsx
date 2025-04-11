"use client"
import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";
import { Suspense} from "react";
import Loading from "./loading";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function DashboardLayout({
  children,
}:Readonly< {
  children: React.ReactNode
}>) {

  useEffect(() => {
    AOS.init({
      duration: 800, // Duração da animação em ms
      easing: 'ease-in-out', // Curva de animação
      once: true, // Anima apenas uma vez
      offset: 100, // Distância do topo para ativar (px)
    });
  }, []);

  return (
     
    <main className="flex flex-col w-full h-full">
      
        <Navbar/>
        <div className="flex flex-col  overflow-x-hidden bg-green-950">
          <Suspense fallback={<Loading/>}>
          
          {children}
          </Suspense>
           
        </div>
        <Rodape/>
    </main>
      
    
  );
}
