"use client"

import Image from 'next/image';
import Link from 'next/link';
import logo from './../public/assets/img/logo.png'


function Rodape() {
  return (
    <footer className='bg-green-950 text-white py-8'>
      <div className='container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left'>
        
        <div className='relative flex  flex-col items-center md:items-start gap-3'>
        

          <Image src={logo} 
          alt='logo' 
          />
          

          <p className=' text-[12px] text-justify'>  Nosso objetivo é ser reconhecido como um parceiro estratégico no agronegócio, 
            liderando a transformação digital do sector e impulsionando o desenvolvimento sustentável da agricultura.</p>
        </div>
        
        <div>
          <h2 className='text-lg font-semibold text-green-400 mb-3'>Horário de Atendimento</h2>
          <p>Segunda a Sexta: 8:00 - 17:00h</p>
        </div>

        <div>
          <h2 className='text-lg font-semibold text-green-400 mb-3'>Navegação</h2>
          <ul className='space-y-2 text-sm'>
            <li><Link prefetch={false} href='#' className='hover:text-green-300'>Home</Link></li>
            <li><Link prefetch={false} href='#sobre-nos' className='hover:text-green-300'>Sobre nós</Link></li>
            <li><Link prefetch={false} href='/produtos-servicos/todos' className='hover:text-green-300'>Serviços</Link></li>
            <li><Link prefetch={false} href='#parceiros' className='hover:text-green-300'>Parceiros</Link></li>
            <li><Link prefetch={false} href='#contactos' className='hover:text-green-300'>Contatos</Link></li>
          </ul>
        </div>

        <div>
          <h2 className='text-lg font-semibold text-green-400 mb-3'>Contato</h2>
          <p className='text-sm flex items-center gap-2 mt-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
</svg>
 (+244) 925 798 686
          </p>
          <p className='text-sm flex items-center gap-2 mt-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
</svg>
(+244) 921 470 202
          </p>
          <p className='text-sm flex items-start gap-2 mt-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
 Lubango, Rua 4 de Fevereiro, Prédio dos Laureanos 3º Andar
          </p>
        </div>
      </div>

      <div className='border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400'>
        &copy; {2025} TecnoAgro. Todos os direitos reservados.
      </div>

      
    </footer>
  );
}

export default Rodape;