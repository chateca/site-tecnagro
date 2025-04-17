'use client'
import {useEffect} from 'react'
function Aos() {
    useEffect(()=>{
       
            AOS.init({
                duration: 800, // Duração da animação em ms
                easing: 'ease-in-out', // Curva de animação
                once: false, // Anima apenas uma vez
                offset: 100, // Distância do topo para ativar (px)
              });
    
    },[])
  return <></>
}

export default Aos
