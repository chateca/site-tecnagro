"use server"

import { revalidatePath } from "next/cache"
import { connectDB } from "../dbConnect"
import Actividade from "../models/actividades"



interface DadosPedido{
    titulo:string,
    imagem:string, 
    descricao:string, 
  

}

export const CrearPublicacao = async (dados:DadosPedido)=>{
    try {
        connectDB()
        await Actividade.create(dados)
        revalidatePath("/actividades")
    } catch (error) {
        throw new Error("não foi possivel criar o pedido", {cause:error})
    }
}

export const TotalActividades = async ()=>{
    try {
        connectDB()
       return await Actividade.find().select('_id')
        
    } catch (error) {
        throw new Error("não foi possivel buscar o pedido", {cause:error})
    }
}

export const BuscarActividadesActivasPaginaPrincipal = async ()=>{
    try {
        connectDB()
         const dados =   await Actividade.find({ativo:true}).sort({dataRegsitro:-1}).limit(4)
        return JSON.stringify(dados)
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}




export const BuscarActividadesActivas = async ()=>{
    try {
        connectDB()
       return  await Actividade.find({ativo:true}).sort({dataRegsitro:-1})
        
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

export const BuscarActividadeTodas = async ()=>{
    try {
        connectDB()
       return  await Actividade.find().sort({dataRegsitro:-1})
        
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

export const BuscarActividadesNaoActivas = async ()=>{
    try {
        connectDB()
       return  await Actividade.find({ativo:false}).sort({dataRegsitro:-1})
        
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}


export const Publicar= async (id:string)=>{
    try {
        
        connectDB()
        await Actividade.findOneAndUpdate({_id:id},{$set : {ativo:true}})
        revalidatePath("/actividades")
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

export const RetirarDoAr= async (id:string)=>{
    try {
        
        connectDB()
        await Actividade.findOneAndUpdate({_id:id},{$set : {ativo:false}})
        revalidatePath("/actividades")
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

type DadosEditar = {
    titulo:string, 
    id:string, 
    descricao:string,
    imagem:string
}

export const EditarPublicacao = async (dados:DadosEditar)=>{
    try {
        
        connectDB()
        await Actividade.findOneAndUpdate({_id:dados.id},{$set : {titulo:dados.titulo, descricao:dados.descricao, imagem:dados.imagem }})
        revalidatePath("/actividades")
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}


export const DescartarPublicacao = async (id:string)=>{
    try {
        
        connectDB()
        await Actividade.findOneAndDelete({_id:id})
        revalidatePath("/actividades")
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}


