"use client"
import * as React from 'react'
import {animate, scroll, stagger} from "motion"
import { useEffect } from "react";
import Image from 'next/image';
 


function SobreNos() {
    const [goal, setGoal] = React.useState(350)
    useEffect(()=>{
        document.querySelectorAll(".conteudo-container").forEach((item) => {
          scroll(animate(item, { opacity: [0, 1, 1, 0], x: [100, 0] }, { delay: stagger(0.1) }), {
              target: item,
              offset: ["start end", "end end", "start start", "end start"],
          })
      })
      },[])
 
 
   
   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full">
    
      
      <div className='flex  gap-4 p-12  w-full justify-between  rounded-2xl'>
       <span className='text-white text-[18px] text-wrap text-justify'>
       A TecnAgro é uma Empresa de Consultoria Agrícola inovadora, especializada em oferecer serviços de consultoria agrária, desenvolvimento de soluções na Agricultura Digital e aplicação de tecnologia agrícola de ponta.<br/>
       
      <p>
        Com base em princípios de ética, inovação e responsabilidade socioambiental, buscamos construir parcerias sólidas e duradouras com nossos clientes, colaboradores e stakeholders, trabalhando em conjunto para impulsionar o agronegócio em direção a um futuro próspero, sustentável e tecnologicamente avançado. Acreditamos que a agricultura do futuro será impulsionada pela integração entre o conhecimento tradicional e as tecnologias de ponta, e nos comprometemos a ser agentes facilitadores desse progresso em prol de um setor agrícola mais produtivo, resiliente e conectado.
       </p>
       </span>
      </div>
        

      </div>
  )
}

export default SobreNos