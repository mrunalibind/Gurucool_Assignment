let express=require("express");
let urlRoute=express.Router();
let urlControllers=require("../controllers/urlController");
const auth = require("../middleware/auth");

urlRoute.post("/shortURL",auth,urlControllers.toshortURL);
urlRoute.get("/redirect/:short",auth,urlControllers.redirectURL);

module.exports=urlRoute