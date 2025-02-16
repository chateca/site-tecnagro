"use client"
import * as React from 'react'



 


function SobreNos() {
   
   
   
  return (
    <div className="flex flex-col p-2 w-full h-full  backdrop-blur-2xl relative">
      
      
      <div className='flex flex-col gap-4 p-12  w-full justify-between  rounded-2xl '>
      <h1 className='text-center text-[38px] font-ibm-plex-serif font-extrabold text-green-1'> 
        Sobre nós
        </h1>
       <span className='text-green-3 text-[24px]  font-inter font-extrabold text-wrap text-justify'>
       A TecnAgro é uma Empresa de Consultoria Agrícola inovadora, especializada em oferecer serviços de consultoria agrária, desenvolvimento de soluções na Agricultura Digital e aplicação de tecnologia agrícola de ponta.<br/>
       
      <p className='text-[24px] font-inter text-wrap text-green-3 font-semibold text-justify'>
        Com base em princípios de ética, inovação e responsabilidade socioambiental, buscamos construir parcerias sólidas e duradouras com nossos clientes, colaboradores e stakeholders, trabalhando em conjunto para impulsionar o agronegócio em direção a um futuro próspero, sustentável e tecnologicamente avançado. Acreditamos que a agricultura do futuro será impulsionada pela integração entre o conhecimento tradicional e as tecnologias de ponta, e nos comprometemos a ser agentes facilitadores desse progresso em prol de um setor agrícola mais produtivo, resiliente e conectado.
       </p>
       </span>
      </div>

      <div className='flex md:flex-row flex-col  w-full h-full gap-8 p-8 '>
     <div className='flex gap-2 p-12 shadow-2xl shadow-black rounded-xl transition hover:scale-[1.02] duration-75 bg-gradient-to-t from-green-3 to-green-2'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-[28px] font-extrabold font-ibm-plex-serif uppercase text-white'>Visão</h1>
          <p className='text-[20px] font-ibm-plex-serif font-semibold text-wrap text-justify text-white'>
          Nossa missão é fornecer serviços e soluções de alto valor agregado que atendam às necessidades específicas do agronegócio, contribuindo para o crescimento sustentável e a competitividade do setor.
          </p>

          <p className='text-[20px] font-ibm-plex-serif font-semibold text-wrap text-justify text-white'>
          Trazemos consultoria especializada, tecnologia avançada e conhecimentos actualizados para ajudar os produtores agrícolas a superar desafios, implementar melhores práticas e alcançar resultados de excelência em suas operações.
          </p>
      </div>
    
          
     </div>

     <div className='flex gap-2 p-12 shadow-2xl shadow-black rounded-xl transition hover:scale-[1.02] duration-75 bg-gradient-to-t from-green-2 to-green-3'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[28px] font-extrabold font-ibm-plex-serif uppercase text-white'>Nossa Missão</h1>
          <p className='text-[20px] font-ibm-plex-serif font-semibold text-wrap text-justify text-white'>
          Nosso objetivo é ser reconhecido como um parceiro estratégico no agronegócio, liderando a transformação digital do sector e impulsionando o desenvolvimento sustentável da agricultura.
          </p>

          <p className='text-[20px] font-ibm-plex-serif font-semibold text-wrap text-justify text-white'>
          Buscamos ser referência na prestação de serviços de consultoria agrária, inovação e tecnologia agrícola, proporcionando soluções inovadoras e inteligentes que maximizem a produtividade, eficiência e rentabilidade dos negócios agrícolas de nossos clientes.
          </p>
      </div>
          
     </div>
      </div>
        

      </div>
  )
}

export default SobreNos