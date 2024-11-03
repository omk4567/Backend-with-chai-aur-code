import mongoose from "mongoose"
import { DB_NAME } from "../constants.js" 

const connetDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)   
        console.log(`\n MongoDB connected !! DB_HOST: ${connectionInstance.connection.port}`)
    } catch (error) {
        console.log("MongoDB Connection FAILED", error) 
        process.exit(1)
    }
} 

export default connetDB 