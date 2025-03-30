

import Contacto from '@/components/Contacto';
import Parceiros from '@/components/Parceiros';
import ProdutosEservicos from '@/components/ProdutosEservicos';
import SobreNos from '@/components/SobreNos';


export default function Home() {

  return (
    <section  className="flex flex-col w-full scroll-section ">
      
   
     <section id='sobre-nos' className="relative lg:mt-20 xl:mt-20 mt-20 mb-10 overflow-hidden">
     <SobreNos/>
    </section>

        <section id='produtos-servicos' className="relative bg-white overflow-hidden text-green-2 py-20 xl:py-16  ">
        <ProdutosEservicos/>
       </section>
        
        <section className='relative py-20 bg-green-900'>
         
        </section>

        <section id='parceiros'>
          <Parceiros/>
        </section>

        <section className='bg-green-900'>
        
        </section>

        <section id='contactos' className='relative bg-[#000] text-white py-20'>
          <Contacto/>
        </section>

    
    </section>
  );
}


