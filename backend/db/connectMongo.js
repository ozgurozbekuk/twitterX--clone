import mongoose from "mongoose";


const connectMongoDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo connected : ${conn.connection.host}`)
 
    } catch (error) {
        console.log(`Error connection to MongoDB : ${error.message}`)
    }
}

export default connectMongoDB;