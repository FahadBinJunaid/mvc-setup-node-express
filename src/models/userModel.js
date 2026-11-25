import mongoose from "mongoose";

const userscheme = new mongoose.Schema({
    name: String,
    email:{
        type: String,
        unique : true,
        required :true
    },
    password:{
        type: String,
        required : true,
        minLength: [8, "password must be greater than 8"]
    }
})

const User = mongoose.model("user",userscheme)

export default User