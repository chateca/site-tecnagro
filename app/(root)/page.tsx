
import ActividadesRecentes from '@/components/ActividadesRecentes';
import Contacto from '@/components/Contacto';
import Parceiros from '@/components/Parceiros';
import ProdutosEservicos from '@/components/ProdutosEservicos';
import SobreNos from '@/components/SobreNos';
import { Suspense} from 'react';


import Loading from './loading';
import BannerShow from '@/components/BannerShow';



export default async function Home() {

  return (
    <section  className="flex flex-col w-full scroll-section ">
         <Suspense fallback={<Loading/>}> 
          <BannerShow/>
         </Suspense>
   
     <section id='sobre-nos' className="relative lg:mt-20 xl:mt-20 mt-20 mb-10 overflow-hidden">
     <SobreNos/>
   
    </section>

        <section id='produtos-servicos' className="relative bg-white overflow-hidden text-green-2 py-20 xl:py-16  ">
        <ProdutosEservicos/>
       </section>
        
        <section className='relative py-20 bg-green-900'>
          <ActividadesRecentes/>
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


