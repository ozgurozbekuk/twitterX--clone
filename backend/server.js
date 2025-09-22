import path from "path"
import express from "express";
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongo.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"
import postRoutes from "./routes/post.routes.js"
import notificationRoute from "./routes/notifications.route.js"
import {v2 as cloudinary} from "cloudinary"


dotenv.config()

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()

//middleware
app.use(express.json({limit:"5mb"})) //parse req.body
app.use(express.urlencoded({extended:true})) //parse form data


app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)
app.use("/api/notifications",notificationRoute)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))

    app.get(/^\/(?!api).*/,(req,res) =>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}



app.listen(PORT,() =>{
    console.log(`server on the port: ${PORT}`);
    connectMongoDB();
})