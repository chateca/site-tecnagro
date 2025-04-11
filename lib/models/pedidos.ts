import mongoose from "mongoose";

const pedidosShema = new mongoose.Schema({
  nome:String, 
  email:String, 
  telefone:String,
  descricao:String, 
  endereco:String,
  status:{
   type:String, 
   default:"Pendente"
  },
  ativo:{
    type:Boolean, 
    default:true
  }, 
  dataRegistro: {
    type:Date, 
    default: Date.now
  }
})

const Pedidos = mongoose.models.Pedidos||mongoose.model("Pedidos", pedidosShema)
export default Pedidos