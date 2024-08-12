import { dataModel } from "../Models/DataModel.js";

const test=async(req,res)=>{
    try{
      res.status(200).json({status:"success",data:""})
    }
    catch(err){
        res.status(401).json({status:"fail",data:err})
    }
}


const dataCreate=async(req,res)=>{
    try {
        const reqbody=req.body;
        const data=await dataModel.create(reqbody)
        res.status(200).json({status:"succss",data:data})
    } catch (err) {
        res.status(404).json({status:"fail",data:err})
    }
}
export {test,
    dataCreate,
}