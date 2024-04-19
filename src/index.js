import connectDB from "./db/index.js";
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import express from 'express';
const app=express();
const PORT=process.env.PORT;



dotenv.config({
    path:'./env'
})


connectDB();
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})