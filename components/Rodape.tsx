import React from 'react'

function Rodape() {
  return (
    <footer className='flex w-full flex-col justify-between h-[50vh] bg-gradient-to-t from-green-3'>
       <div className="container mx-auto p-4 grid md:grid-cols-4 gap-12 text-center md:text-left">
        <div>
          
          <h2 className="text-xl font-bold mb-3 text-[28px] font-ibm-plex-serif text-green-3">TecnAgro</h2>
          <p className="text-[18px] max-xl:text-[14px] font-ibm-plex-serif text-gray-950 text-justify">
            Consultoria Agrícola inovadora, 
            especializada em oferecer serviços de consultoria agrária,
            desenvolvimento de soluções na Agricultura Digital e aplicação de tecnologia agrícola de ponta.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Navegação</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">Sobre nós</a></li>
            <li><a href="#" className="hover:text-green-400">Produtos e serviços</a></li>
            <li><a href="#" className="hover:text-green-400">Parceiros</a></li>
            <li><a href="#" className="hover:text-green-400">Contactos</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Contato</h2>
          <p>(+244) 923 569 212</p>
          <p>(+244) 921 470 202</p>
          <p className="mt-2 text-sm">
            Luanda, Rua Kwame Nkrumah, Edifício Unitel Money <br />
            Nº 54, 5º Andar
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Siga-nos</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-green-400">Facebook</a>
            <a href="#" className="hover:text-green-400">Instagram</a>
            <a href="#" className="hover:text-green-400">Twitter</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm  border-t border-green-700 p-4">
       <span className='text-gray-300'>&copy; {new Date().getFullYear()} TecnAgro. Todos os direitos reservados.</span> 
      </div>

    </footer>
  )
}

export default Rodape