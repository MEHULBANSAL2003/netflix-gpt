require("dotenv").config();
const express =require("express");
const app=express();
const cors = require('cors');
const cookieParser=require("cookie-parser");
const { connectDB } = require("./config/database");
const { userRouter } = require("./routers/user");


app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  credentials: true,              // Allow credentials (cookies, headers, etc.)
}));


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


