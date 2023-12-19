let express=require("express");
const { connection } = require("./db");
let app=express();
app.use(express.json());
require("dotenv").config();

let PORT=process.env.PORT||8090;

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.listen(PORT,async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port",PORT)
})
