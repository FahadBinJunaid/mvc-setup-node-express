import mongoose from "mongoose";

const connectionDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected successfully!")
    }catch(error){
        console.log(error.message)
    }
}

export default connectionDB