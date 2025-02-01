import mongoose from "mongoose"

let isConnected = false; 

export const connectDB = async ()=>{
    mongoose.set("strictQuery", false)

    if(!process.env.NEXT_PUBLIC_MONGODB_URL) return console.log("URL de coneção não encontrada")

        if(isConnected){
            console.log("Já existe uma coneção estabelecida");
            return;
        }

        try {
            await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL)
            isConnected = true;
            console.log("Coneção com o mongodb Criada com sucesso")
        } catch (error) {
              console.log("Algo deu errado ao estabelecer coneção com o banco de dados", error)            
        }
}