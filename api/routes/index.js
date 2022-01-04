const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const passport = require("passport");
var cors = require("cors");
const { applyMiddleware } = require("redux");
const favorite = require("./favorite");
const auth=require("./auth")
const user=require("./user")

router.use(cors());


router.use("/favorite", favorite);
router.use("/auth" , auth)
router.use("/user",user)






module.exports = router;
