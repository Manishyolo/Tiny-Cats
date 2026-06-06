import app from "./app.ts"
import connectToDb from "./config/db.ts";
import dotenv from "dotenv"
dotenv.config();


connectToDb();

app.listen(process.env.PORT,()=>{
   
    console.log("server running on port 3000")
})