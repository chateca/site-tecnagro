"use server"

import { revalidatePath } from "next/cache"
import { connectDB } from "../dbConnect"
import Pedidos from "../models/pedidos"

interface DadosPedido{
    nome:string,
    email:string, 
    descricao:string, 
    telefone:string 

}

export const CrearPedido = async (dados:DadosPedido)=>{
    try {
        connectDB()
        await Pedidos.create(dados)
        revalidatePath("/")
    } catch (error) {
        throw new Error("não foi possivel criar o pedido", {cause:error})
    }
}


export const TotalPedidos = async ()=>{
    try {
       connectDB()
       return  await Pedidos.find().select('_id')
        
    } catch (error) {
        console.log("Algo deu rado ao buscar os Pedido", error)
        return []
        //throw new Error("não foi possivel buscar o total dos pedidos",{cause:error})
    }
}


export const BuscarPedidos = async ()=>{
    try {
       connectDB()
       return  await Pedidos.find({ativo:true}).sort({dataRegsitro:-1}).limit(3)
        
    } catch (error) {
        console.log("Algo deu rado ao buscar os Pedido", error)
        return []
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

export const BuscarPedidosTodos = async ()=>{
    try {
       connectDB()
       return  await Pedidos.find({ativo:true}).sort({dataRegsitro:-1})
        
    } catch (error) {
        console.log("Algo deu rado ao buscar os Pedido", error)
        return []
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

export const BuscarPedidosAceites = async ()=>{
    try {
       connectDB()
       return  await Pedidos.find({status:'Aceite'}).sort({dataRegsitro:-1})
        
    } catch (error) {
        console.log("Algo deu rado ao buscar os Pedido", error)
        return []
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

export const BuscarPedidosNegados = async ()=>{
    try {
       connectDB()
       return  await Pedidos.find({status:'Negado'}).sort({dataRegsitro:-1})
        
    } catch (error) {
        console.log("Algo deu rado ao buscar os Pedido", error)
        return []
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}

export const BuscarPedidosPendente = async ()=>{
    try {
       connectDB()
       return  await Pedidos.find({status:'Pendente'}).sort({dataRegsitro:-1})
        
    } catch (error) {
        console.log("Algo deu rado ao buscar os Pedido", error)
        return []
        //throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}



export const BuscarPedidosNaoAtivos = async ()=>{
    try {
       connectDB()
       return  await Pedidos.find({ativo:false}).sort({dataRegsitro:-1})
        
    } catch (error) {
        console.log("Algo deu rado ao buscar os Pedido", error)
        return []
       // throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}



type DadosAccao = {
    id:string, 
    status:string
}

export const AccaoDoPedido = async (dados:DadosAccao)=>{
    try {
        
        connectDB()
        await Pedidos.findOneAndUpdate({_id:dados.id},{$set : {status:dados.status}})
        revalidatePath("/admin")
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}


export const DescartarPedido = async (id:string)=>{
    try {
        
         connectDB()
        await Pedidos.findOneAndUpdate({_id:id},{$set : {ativo:false}})
        revalidatePath("/admin")
    } catch (error) {
        throw new Error("não foi possivel buscar os pedido",{cause:error})
    }
}


