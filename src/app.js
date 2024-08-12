import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import { router } from "./Routes/AuthRotes.js"
dotenv.config()
const app=express()
app.use(bodyParser.json())
app.use(cors())

const mongconnect= async()=>{
    return await mongoose.connect(process.env.MONGO_URL)
}
mongconnect()
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))
app.use("/api/v1",router)
app.all("*",(req,res)=>{
    res.status(404).json({status:"bad request"})

})
export{app}