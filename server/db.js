const dotenv = require("dotenv");   
dotenv.config({ path: "./.env" });
const mongoose=require("mongoose");
const loginDB = process.env.MONGOURI;

mongoose.set('strictQuery', true);
mongoose.connect(loginDB).then(()=>{
    console.log("connection successful to DB");
}).catch((err)=>{
    console.log(err);
});