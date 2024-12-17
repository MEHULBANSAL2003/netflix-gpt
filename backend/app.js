require("dotenv").config();
const express =require("express");
const { connectDB } = require("./config/database");
const app=express();
const port=process.env.PORT












connectDB().then(()=>{
    console.log("connected to db succesully");
    app.listen(port,()=>{
        console.log(`app listening on port ${port}`);
    })


})
.catch((err)=>{
  console.log(err);
})


