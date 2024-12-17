require("dotenv").config();
const express =require("express");
const { connectDB } = require("./config/database");
const { User } = require("./model/User");
const app=express();
const port=process.env.PORT

app.use(express.json());


app.post("/signup",async(req,res)=>{
try{
    let {name,email,password}=req.body;
    let user1=new User({name,email,password});

    await user1.save();

    console.log("user added");
    res.send("added user");
  
}
catch(err){
    console.log("error :",err.message);
    res.send("error");
}
    

})

connectDB().then(()=>{
    console.log("connected to db succesully");
    app.listen(port,()=>{
        console.log(`app listening on port ${port}`);
    })


})
.catch((err)=>{
  console.log(err);
})


