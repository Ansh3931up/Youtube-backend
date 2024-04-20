import cookieParser from "cookie-parser"
import express from "express"
import cors from  "cors"

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(cookieParser())
app.use(express.static("public"))
app.use(express.json({limit:"16kb"}));//ye json fromat ma convert krna ka liya
app.use(express.urlencoded({extended:true,limit:"16kb"}));//ye sabi code ka url uniform krna ka liya

export{app}

