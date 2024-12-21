const jwt = require("jsonwebtoken");
const {User} = require("../model/user.js");

const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;

    const { token } = cookies;
    //console.log(token);

    if (!token) {
      throw new Error("invalid token");
    }

    const validateToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    const { _id } = validateToken;
    console.log(_id);

    const user = await User.findById(_id);
    console.log(user);
    if (!user) {

      throw new Error("user not found. Login to access");
    }
   
  
    req.user = user; 
    next();
  } catch (err) {
    res.status(400).json({
      result:"error",
      message:err.message
    })
  }
};

module.exports = { userAuth };
