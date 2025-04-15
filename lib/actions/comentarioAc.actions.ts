"use server"
import { revalidatePath } from "next/cache";
import { connectDB } from "../dbConnect";
import Comentar from "../models/comentarios";


type DadosCriar = {
    nome:string, 
    descricao:string
}

export const CriarComentario = async (dados:DadosCriar)=>{
    try {
        connectDB()
        await Comentar.create(dados)
    } catch (error) {
      console.log("algo deu errado ao publicar comentario ", error)
        
    }
}

type DadosComentariosPrincipal = {
_id:string, 
nome:string,
descricao:string 

}[]

export const BuscarComentariosPaginaInicia = async ()=>{
    try {
        connectDB()
       const dados:DadosComentariosPrincipal =  await Comentar.find({ativo:true}).select('_id nome descricao dataRegistro').sort({dataRegistro:-1}).limit(4)
         return JSON.stringify(dados)
      } catch (error) {
      console.log("algo deu errado ao publicar comentario ", error)
      return "[]"
    }
}

export const BuscarComentariosTodos = async ()=>{
    try {
        connectDB()
       return  await Comentar.find().sort({dataRegistro:-1})
    } catch (error) {
      console.log("algo deu errado ao publicar comentario ", error)
        return []
    }

}

type DadosAcao = {
    id:string, 
    acao:boolean
}

export const PublicarComentario = async (dadosAcao:DadosAcao)=>{
    try {
        connectDB()
           await Comentar.findOneAndUpdate({_id:dadosAcao.id}, {$set:{ativo:dadosAcao.acao}})
           revalidatePath('/comentarios')
      } catch (error) {
      console.log("algo deu errado ao publicar comentario ", error)
        
    }
}


export const ApagarCOmentario = async (id:string)=>{
    try {
        connectDB()
        await Comentar.findOneAndDelete({_id:id})
        revalidatePath('/comentarios')
    } catch (error) {
      console.log("algo deu errado ao publicar comentario ", error)
        
    }
}
