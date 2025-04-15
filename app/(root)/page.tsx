import ActividadesRecentes from "@/components/ActividadesRecentes";
import BannerComponent from "@/components/BannerComponent";
import Parceiros from "@/components/Parceiros";
import ProdutosEservicos from "@/components/ProdutosEservicos";
import SobreNos from "@/components/SobreNos";
import { BuscarActividadesActivasPaginaPrincipal } from "@/lib/actions/actividades.actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";

const  BuscarPublicacoes = cache(  async ()=>{
  const dados = await BuscarActividadesActivasPaginaPrincipal()
  if(!dados) notFound()
  return {dadosPubli:dados}
}
)



export default async function Home() {
  const getDados = await BuscarPublicacoes()
  const publicacoes:string|'[]' = getDados?.dadosPubli
  return (
      <div>
        <BannerComponent/>
        <SobreNos/>
        <ProdutosEservicos/>
        <ActividadesRecentes
        actividades={publicacoes}
        />
        <Parceiros/>
      </div>
  );
}
