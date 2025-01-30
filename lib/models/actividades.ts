import mongoose from "mongoose";

const actividadeShema = new mongoose.Schema({
  titulo:String, 
  imagem:String,
  descricao:String, 
  status:{
   type:String, 
   default:"Pendente"
  },
  ativo:{
    type:Boolean, 
    default:false
  }, 
  dataRegistro: {
    type:Date, 
    default: Date.now
  }
})

const Actividade = mongoose.models.Pedidos||mongoose.model("Actividade", actividadeShema)
export default Actividade