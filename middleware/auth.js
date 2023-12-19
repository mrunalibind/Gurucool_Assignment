let jwt=require("jsonwebtoken");
require("dotenv").config();


let auth=async(req,res,next)=>{
    let token=req.headers?.authorization?.split(" ")[1]||req.cookies.token;
    jwt.verify(token, process.env.SECRETKEY, function(err, decoded) {
        
        if(decoded.user._id==req.cookies.userID){
            
            next();
        }
        else{
            res.status(500).send({msg:"Unauthorized"});
        }
        
    });

}
module.exports=auth;