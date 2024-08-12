import express from "express"
import { dataCreate, test } from "../Controllers/DataController.js"
const router=express()

router.get("/test",test)
router.post("/datacreate",dataCreate)
export{router}