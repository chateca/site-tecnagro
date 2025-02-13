"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Rodape() {
  return (
    <footer className='flex w-full flex-col justify-between bg-gradient-to-t from-green-3 py-6'>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold mb-3 text-green-3">TecnAgro</h2>
          <p className="text-sm text-[12px] text-gray-950 text-justify">
            Consultoria Agrícola inovadora, 
            especializada em oferecer serviços de consultoria agrária,
            desenvolvimento de soluções na Agricultura Digital 
            e aplicação de tecnologia agrícola de ponta.
          </p>
        </div>



<div>
<h2 className="font-semibold text-lg text-green-3 mb-3">Navegação</h2>
<ul className="space-y-2 text-sm">
  <li><Link href="/" className="hover:text-green-400">Home</Link></li>
  <li><Link href="#sobre-nos" className="hover:text-green-400">Sobre nós</Link></li>
  <li><Link href="#produtos-servicos" className="hover:text-green-400">Produtos e serviços</Link></li>
  <li><Link href="#parceiros" className="hover:text-green-400">Parceiros</Link></li>
  <li><Link href="#contactos" className="hover:text-green-400">Contactos</Link></li>
</ul>
</div>

<div>
<h2 className="font-semibold text-lg text-green-3 mb-3">Contato</h2>
<p className='text-sm'>(+244) 923 569 212</p>
<p className='text-sm'>(+244) 921 470 202</p>
<p className="mt-2 text-sm text-gray-950 text-justify">
  Luanda, Rua Kwame Nkrumah, Edifício Unitel Money <br /> Nº 54, 5º Andar
</p>
</div>

<div>
<h2 className="font-semibold text-lg text-green-3 mb-3">Siga-nos</h2>
<div className="flex justify-center md:justify-start space-x-4">
  <a href="#" className="hover:scale-110 transition-transform">
    <Image src="/icons/facebook.svg" alt='Facebook' width={24} height={24} />
  </a>
  <a href="#" className="hover:scale-110 transition-transform">
    <Image src="/icons/whatsapp.svg" alt='WhatsApp' width={24} height={24} />
  </a>
  <a href="#" className="hover:scale-110 transition-transform">
    <Image src="/icons/x.svg" alt='X' width={24} height={24} />
  </a>
</div>
</div>
</div>

<div className="text-center text-sm border-t border-gray-300 p-4 mt-6">
<span className='text-gray-500'>&copy; {new Date().getFullYear()} TecnAgro. Todos os direitos reservados.</span>
</div>
</footer>
);
}

export default Rodape;