import dotenv from 'dotenv'  
import connetDB from './db/index.js'  
import { app } from './app.js'

dotenv.config({
   path: './env' 
}) 

connetDB()
.then(() => {
   app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`) 
   })
}) 
.catch((err) => {
   console.log("MongoDB Connection Failed !!!", err) 
})

















/*  
import express from "express" 

const app = express() 

( async () => {
   try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)     
       app.on("error", (error) => {
          console.log("ERRR: ", error) 
          throw error 
       })  

       app.listen(process.env.PORT, () => {
          console.log(`App is listening on port ${process.env.PORT}`) 
       })
   } catch (error) {
     console.error("ERROR", error); 
     throw error
   }
})() 
*/ 