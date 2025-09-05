import express from "express";
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongo.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


dotenv.config()


const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json()) //parse req.body
app.use(express.urlencoded({extended:true})) //parse form data
app.use(cookieParser())
app.use('/api/auth',authRoutes)




app.listen(PORT,() =>{
    console.log(`server on the port: ${PORT}`);
    connectMongoDB();
})