import { StaticImport } from "next/dist/shared/lib/get-img-props"




export type ItemProdutosServicos = {
    titulo:string,
    desc:string,
    image:string|StaticImport,
    id:number
}