import mongoose from "mongoose";

const comentarioShema = new mongoose.Schema({
  nome:String, 
  email:String, 
  telefone:String,
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

const Comentar = mongoose.models.Comentar||mongoose.model("Comentar", comentarioShema)
export default Comentar