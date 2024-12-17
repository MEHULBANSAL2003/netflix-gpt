const { User } = require("../model/User");
const { validateSignUpData } = require("../utils/validation");
const bcrypt=require("bcrypt");



const handleSignUp=async(req,res)=>{
  
   try{
    validateSignUpData(req);

    let {email}=req.body;

    const registeredUser=await User.find({email:email});
    
    if(registeredUser.length>0) throw new Error("User already registered");


    res.status(201).json({
        result:"success",
        message:"done successfully"
    })
     
      
   }
   catch(err){
    res.status(400).json({
         result:"error",
         message:err.message
    })
   }
    
};



module.exports={handleSignUp};