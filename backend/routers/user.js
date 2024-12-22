const express=require("express");
const { handleSignUp, handleLogin, handleLogout,getUser,changePassword } = require("../controllers/user");
const { userAuth } = require("../middlewares/auth");
const userRouter=express.Router();



userRouter.post("/signup",handleSignUp);

userRouter.post("/login",handleLogin);

userRouter.post("/logout",handleLogout);

userRouter.get("/getUserByToken",userAuth,getUser);

userRouter.post("/change-password",userAuth,changePassword); 




module.exports={userRouter}