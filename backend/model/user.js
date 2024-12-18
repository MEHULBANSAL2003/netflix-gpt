const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("enter a valid email");
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("enter a strong password");
            }
        }
    }

},{timestamps:true});


userSchema.methods.validatePassword=async function(password){

    const isPasswordMatched=await bcrypt.compare(password,this.password);

    return isPasswordMatched;

}

userSchema.methods.generateJWT=async function(){

    const token= await jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY);
    return token;
}

const User=mongoose.model("User",userSchema);

module.exports={User};