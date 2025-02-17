
import ActividadesRecentes from "@/components/ActividadesRecentes";
import BannerComponent from "@/components/BannerComponent";
import Comentarios from "@/components/Comentarios";
import Consultorias from "@/components/Consultorias";
import Contacto from "@/components/Contacto";
import Noterreno from "@/components/Noterreno";
import Parceiros from "@/components/Parceiros";
import ServicesComponents from "@/components/ServicesComponents";
import SobreNos from "@/components/SobreNos";
import { Suspense } from "react";



export default function Home() {


  return (
    <>
       <Suspense fallback={<Loading />}>
    <section  className="flex flex-col w-full scroll-section ">
       <BannerComponent/>
       <div className="relative w-full">
      <ServicesComponents/>
       </div>
       

       <div id="produtos-servicos" className="flex  flex-col w-full -top-20 bg-gradient-to-b from-green-3 ">
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl w-[50%] self-center">
          <h1 className="text-[28px] font-extrabold uppercase font-ibm-plex-serif text-white">Consultorias e formações</h1>
            <div className="w-full h-1 bg-green-2" />
        </div>
       <Consultorias/>
       </div>

       <div id="actividades" className="flex  flex-col w-full -top-20 ">
       
       <ActividadesRecentes/>
       </div>


       <div id="noterreno" className="flex  flex-col w-full top-20  ">
        
       <Noterreno/>
       </div>

      
       <div id="parceiros" className="flex  flex-col w-full top-20 ">
        
        <Parceiros/>
        </div>
    
        <div id="sobre-nos" className="flex  flex-col w-full xl:h-[100vh] top-20 ">
        
        <SobreNos/>
        </div>
        <div id="contactos" className="flex  flex-col w-full top-20 ">
        
        <Contacto/>
        </div>


        <div id="comentarios" className="flex  flex-col w-full top-20 ">
        
        <Comentarios/>
        </div>
    </section>
    </Suspense>
  </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

