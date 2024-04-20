import connectDB from "./db/index.js";
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import express from 'express';
const app=express();
const PORT=process.env.PORT;



dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(PORT|| 8000,()=>{
        console.log(`Server is running at port:${PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err)
})



// app.listen(PORT,()=>{
//     console.log(`server is running on http://localhost:${PORT}`)
// })