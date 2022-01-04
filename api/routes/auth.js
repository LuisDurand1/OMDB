const express=require("express")
const router=express.Router()
const AuthController=require("../controllers/auth");
const isLogin = require("../middlewares");
const passport=require("passport")

router.post("/register",AuthController.register);
router.post("/login", passport.authenticate("local"),AuthController.login);
router.get("/secret", AuthController.secret);
router.post("/logout", AuthController.logout);
router.get("/me", isLogin,AuthController.me);
router.get("/home", AuthController.home);






module.exports=router