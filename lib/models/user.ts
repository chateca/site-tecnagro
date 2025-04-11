
import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name:String, 
    email:String, 
    password:String, 
    ativo:{
        type:Boolean, 
        default:true
    }, 
    dataRegistro:{
        type:Date, 
        default:Date.now
    }
})

const User = mongoose.models.User || mongoose.model("User", userShema)

export default User