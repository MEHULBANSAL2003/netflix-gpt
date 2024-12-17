const { User } = require("../model/User");
const { validateSignUpData } = require("../utils/validation");
const bcrypt=require("bcrypt");

const handleSignUp=async(req,res)=>{
  
   try{
    validateSignUpData(req);

    let {email,password,name}=req.body;
    

    const registeredUser=await User.find({email:email});
    
    if(registeredUser.length>0) throw new Error("User already registered");

    const hashedPassword=await bcrypt.hash(password,10);

    const user=new User({
        name,email,password:hashedPassword
    });
    
    await user.save();

    res.status(201).json({
        result:"success",
        message:"user saved successfully"
    })
     
      
   }
   catch(err){
    res.status(400).json({
         result:"error",
         message:err.message
    })
   }
    
};

const handleLogin=async (req,res)=>{

    try{
    let {email,password}=req.body;

    let registeredUser=await User.findOne({email:email})

    if(!registeredUser) throw new Error("User doesn't exists. Sign up first");
 
    const isPasswordMatched=await registeredUser.validatePassword(password);
    if(!isPasswordMatched) throw new Error("password is incorrect");

    const token=await registeredUser.generateJWT();

    res.cookie("token", token, {
        expires: new Date(Date.now() + 1 * 3600000),
      });
          
    res.status(201).json({
        result:"success",
        message:"logged in successfully",
        data:registeredUser
    })

    }
    catch(err){
        res.status(400).json({
            result:"error",
            message:err.message
       })
    }

}



module.exports={handleSignUp,handleLogin};