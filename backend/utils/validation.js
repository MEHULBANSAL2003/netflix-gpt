const validator = require("validator");

const validateSignUpData=(req)=>{

    const {name,email,password}=req.body;

    if(!name) throw new Error("Name is required");
    if(!email) throw new Error("Email is required");
    if(!password) throw new Error("Password is required");
 

    if(name.length<4 || name.length>50) throw new Error("name should contain 4-50 characters");

    if(!validator.isEmail(email)) throw new Error("enter a valid email");

    if(!validator.isStrongPassword(password)) throw new Error("enter a strong password");

};



module.exports={validateSignUpData};