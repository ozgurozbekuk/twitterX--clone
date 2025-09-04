import express from "express";
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongo.js";

import dotenv from "dotenv";

dotenv.config()


const app = express();
const PORT = process.env.PORT || 5001;

app.use('/api/auth',authRoutes)



app.listen(PORT,() =>{
    console.log(`server on the port: ${PORT}`);
    connectMongoDB();
})