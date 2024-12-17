const express=require("express");
const userRouter=express.Router();



userRouter.post("/login",(req,res)=>{
    res.send("hello");
})



module.exports={userRouter}