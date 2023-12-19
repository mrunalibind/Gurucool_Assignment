let express=require("express");
let userRoute=express.Router();
let userController=require("../controllers/userController");

userRoute.post("/register",userController.register);
userRoute.post("/login",userController.login);

module.exports=userRoute