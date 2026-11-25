import express from "express"
import dotenv from "dotenv"
import connectionDB from "./db/db.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"


const app = express()
const PORT = process.env.PORT || 3000
dotenv.config()

app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)


app.get("/api/health", (req,res)=>{
    res.status(200).json({
        status: "True",
        message: "API Health is Good"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
    connectionDB()
})