const express=require("express")
const UserControllers = require("../controllers/user")
const router=express.Router()


router.get("/",UserControllers.users)

module.exports=router