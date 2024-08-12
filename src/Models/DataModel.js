import mongoose from "mongoose";

const dataSchema= new mongoose.Schema({
    Name:{type:String,},
    category:{type:String},
    condition:{type:String},
    price:{type:String},
    description:{type:String},

},{versionKey:false,
    timestamps:true
})
const dataModel=mongoose.model("datas",dataSchema)
export{dataModel}