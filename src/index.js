import { app } from "./app.js";
const Port=process.env.PORT || 6000;
app.listen(Port,()=>{
    console.log(`server is runing ${Port}`)
})