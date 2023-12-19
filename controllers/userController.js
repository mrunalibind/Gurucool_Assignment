const UserModel = require("../models/userModel");
let bcrypt=require("bcrypt");
let jwt=require("jsonwebtoken")
require("dotenv").config();

exports.register=async(req,res)=>{
    let {username,password}=req.body;
    try {
        let user=await UserModel.findOne({username});
        if(user){
            return res.status(400).send({msg:"User is already exist"});
        }
        bcrypt.hash(password,5,async function(err,hash){
                let user=new UserModel({username,password:hash});
                await user.save();
                res.status(200).send({msg:"Register Successfull"});
        })
    }catch (error) {
        res.status(200).send({msg:error.message});
    }
}

exports.login=async(req,res)=>{
    let {username,password}=req.body;
    try {
        let user=await UserModel.findOne({username});
        if(!user){
            res.status(500).send({msg:"User is not exist"});
        }
        else{
            bcrypt.compare(password, user.password, function(err, result) {
                if(result){
                    bcrypt.compare(password, user.password, function(err, result) {
                        if(result){
                            var token = jwt.sign({ user }, process.env.SECRETKEY);
                            res.cookie("userID",user._id);
                            res.cookie("token",token);
                            // console.log(req.cookies,"userController")
                            res.status(200).send({msg:"Login Successfull",token});
                            
                        }
                        else{
                            res.status(400).send({msg:"Wrong credential"});
                        }
                    });
                }
                else{
                    res.status(400).send({msg:"Wrong credential"});
                }
            });
        }
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
}