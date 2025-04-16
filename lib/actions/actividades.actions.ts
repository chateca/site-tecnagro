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
        console.log("Algo deu raado ao buscar actividades", error)
        return []
        //throw new Error("não foi possivel buscar o pedido", {cause:error})
    }
}

export const BuscarActividadesActivasPaginaPrincipal = async ()=>{
    try {
        connectDB()
         const dados = await Actividade.find({ativo:true}).sort({dataRegsitro:-1}).limit(4)
        return JSON.stringify(dados) 
    } catch (error) {
        console.log("Algo deu erro ao buscar as actividades para a pagina principal ", error)
        return JSON.stringify('[]')
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

// buscar activas user
type Paginacao = {
    perPage:number, 
    page:number
}

export const BuscarActividadesActivasUser = async ({perPage, page}:Paginacao)=>{
  
    try {
        connectDB()
       const data =  await Actividade.find({ativo:true})
       .select('_id imagem titulo descricao dataRegistro')
       .skip(perPage * (Number(page) - 1 ))
       .limit(perPage)
        
      const total =  await  Actividade.countDocuments({ativo:true})

     

       return{
            data:JSON.stringify(data),
            total:total
       } 
        
    } catch (error) {
        console.log("Algo deu raado ao buscar actividades", error)
        return {
         data:   JSON.stringify('[]'),
         total:0
        }
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

//buscar activas admin


export const BuscarActividadesActivas = async ()=>{
    try {
        connectDB()
       const data =  await Actividade.find({ativo:true})
       .select('_id imagem titulo descricao dataRegistro')
       .sort({dataRegsitro:-1})
       

       return JSON.stringify(data)
        
    } catch (error) {
        console.log("Algo deu raado ao buscar actividades", error)
        return JSON.stringify('[]')
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

export const BuscarActividadeTodas = async ()=>{
    try {
        connectDB()
       return  await Actividade.find().sort({dataRegsitro:-1})
        
    } catch (error) {
        console.log("Algo deu raado ao buscar actividades", error)
        return []
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
        
    }
}

export const BuscarActividadesNaoActivas = async ()=>{
    try {
        connectDB()
       return  await Actividade.find({ativo:false}).sort({dataRegsitro:-1})
        
    } catch (error) {
        console.log("Algo deu raado ao buscar actividades", error)
        return []
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

// buscarActividadeuser
export const BuscarAtividadeUser = async (id:string)=>{
    try {    
       connectDB()
       return await Actividade.findOne({_id:id, ativo:true}).select('_id imagem titulo descricao')
    } catch (error) {
        console.log('algo deu errado ao buscar a atividade no banco de dados', error)
        return {
            imagem:"",
            _id:"",
            titulo:"", 
            descricao:""

        }
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


