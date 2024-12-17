require("dotenv").config();
const express =require("express");
const app=express();
const cookieParser=require("cookie-parser");

const { connectDB } = require("./config/database");
const { userRouter } = require("./routers/user");




app.use(express.json());
app.use(cookieParser());


app.use("/",userRouter);



connectDB().then(()=>{
    console.log("connected to db succesully");
    app.listen(process.env.PORT,()=>{
        console.log(`app listening on port ${process.env.PORT}`);
    })


})
.catch((err)=>{
  console.log(err);
})


