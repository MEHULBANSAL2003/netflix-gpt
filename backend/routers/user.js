const express=require("express");
const { handleSignUp } = require("../controllers/user");
const userRouter=express.Router();



userRouter.post("/signup",handleSignUp);



module.exports={userRouter}