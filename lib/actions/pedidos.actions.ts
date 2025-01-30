"use server"
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
        
    } catch (error:any) {
        throw new Error("não foi possivel criar o pedido", error.message)
    }
}


export const BuscarPedidos = async ()=>{
    try {
        connectDB()
       return  await Pedidos.find().sort({dataRegsitro:-1}).limit(3)
        
    } catch (error:any) {
        throw new Error("não foi possivel buscar os pedido", error.message)
    }
}