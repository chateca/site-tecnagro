
import ActividadesRecentes from "@/components/ActividadesRecentes";
import BannerComponent from "@/components/BannerComponent";
import Comentarios from "@/components/Comentarios";

import Parceiros from "@/components/Parceiros";
import ProdutosEservicos from "@/components/ProdutosEservicos";

import SobreNos from "@/components/SobreNos";
import Link from "next/link";
import { Suspense } from "react";




export default function Home() {


  return (
    <>
       <Suspense fallback={<Loading />}>
    <section  className="flex flex-col w-full scroll-section ">
       <BannerComponent/>
        
        <SobreNos/>
        
    
       <section id="produtos-servicos" className=" bg-white text-green-2 py-20 ">
       <ProdutosEservicos  />
       </section>

       <section id="actividades" className=" text-green-2 py-20">
       
       <ActividadesRecentes/>
       </section>


      
       <div id="parceiros" className="text-green-2 py-20">
        
        <Parceiros/>
        </div>
    
      
      


        <div id="comentarios" className="flex  flex-col w-full top-20 ">
        
        <Comentarios/>
        </div>
      
      <Link href="#" id="scroll-up" className="fixed right-4 -bottom-1/2 bg-green-2 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300">
      subir
      </Link>

    </section>
    </Suspense>
  </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

