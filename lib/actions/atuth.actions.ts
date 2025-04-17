"use server"

import { revalidatePath } from "next/cache";
import { connectDB } from "../dbConnect";
import User from "../models/user";
import { createSession, deleteSession} from "../session";




type UserData = {
    name:string, 
    email:string, 
    password:string
}



export const CreateUser = async (dados:UserData)=>{
      try {
        connectDB()
          await User.create(dados)
          revalidatePath('/')
      } catch (error) {
        console.log("Algo deu errado ao criar o  usuario", error)
      
        }
}

type AuTh = {
    email:string, 
    password:string
}

export const AuthUser = async (dadosAuth:AuTh)=>{
    try {
        connectDB()
        const getUser = await User.findOne({email:dadosAuth.email, password:dadosAuth.password}).select('_id name  email')    
         await createSession(getUser._id)
      revalidatePath("/adminPage")
    } catch (error) {
        console.log("Algo deu errado ao realizar o login", error)
    }

}
 
export async function logout(){
     await  deleteSession()
  revalidatePath('/login')
}


